import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { GET_NEXTID_INFO } from "@/graphql/queries";
import { UserIdBadge } from "@/components/UserIdBadge";
import { all } from "axios";

type NextidInfo = {
  platform: string;
  identity: string;
};
export type NextidNeighbor = {
  displayName: string;
  identity: string;
  platform: string;
  uuid: string;
};
type NextidData = {
  identity: {
    displayName: string;
    identity: string;
  };
  neighbor: NextidNeighbor[];
  platform: string;
  uuid: string;
};

export function useNextid({ platform, identity }: NextidInfo) {
  // [twitter, ens, farcaster, lens, github
  const [ethereumAddress, setEthereumAddress] = useState("");
  const [isNotReady, setIsNotReady] = useState(true);
  const { data, loading, error } = useQuery(GET_NEXTID_INFO, {
    variables: {
      platform: platform,
      identity: identity,
    },
  });

  useEffect(() => {
    if (data && data.identity && data.identity.neighbor[0]) {
      setIsNotReady(false);
    } else {
      setIsNotReady(true);
    }
  }, [setIsNotReady, loading, !data]);

  return {
    data,
    loading,
    error,
    isNotReady,
  };
}

export function NextIdUsingAddr({ platform, identity }: NextidInfo) {
  const [nextIdAcc, setNextIdAcc] = useState([]);
  const { data, loading, isNotReady } = useNextid({
    platform: platform,
    identity: identity,
  });

  useEffect(() => {
    if (loading) return;
    if (data && data.identity && data.identity.neighbor[0]) {
      setNextIdAcc(data.identity.neighbor);
    }
  }, [data, loading, isNotReady]);

  return (
    <>
      {nextIdAcc.length !== 0 &&
        nextIdAcc.map((acc: any) => {
          return (
            <UserIdBadge
              key={acc.identity.platform}
              platform={acc.identity.platform}
              id={acc.identity.identity}
            />
          );
        })}
    </>
  );
}

export function useGetUserAddr({ platform, identity }: NextidInfo) {
  const [nextIdAcc, setNextIdAcc] = useState([]);
  const [ethAddr, setEthereumAddress] = useState("");
  const { data, loading, isNotReady } = useNextid({
    platform: platform,
    identity: identity,
  });

  useEffect(() => {
    if (loading) return;
    if (data && data.identity && data.identity.neighbor[0]) {
      setNextIdAcc(data.identity.neighbor);
    }
  }, [data, loading, isNotReady]);

  useEffect(() => {
    if (isNotReady) return;
    console.log("nextId", nextIdAcc);

    nextIdAcc.forEach((acc: any) => {
      if (acc.identity.platform === "ethereum") {
        setEthereumAddress(acc.identity.identity);
      }
    });
  }, [nextIdAcc.length, loading, isNotReady, ethAddr]);

  return { ethAddr };
}
