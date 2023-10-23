import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { GET_NEXTID_INFO } from "@/graphql/queries";

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
  const [otherAcc, setOtherAcc] = useState([]);
  const [accReady, setAccReady] = useState<boolean>(); // [twitter, ens, farcaster, lens, github
  const { data, loading, error } = useQuery(GET_NEXTID_INFO, {
    variables: {
      platform: platform,
      identity: identity,
    },
  });

  useEffect(() => {
    if (loading) return;
    if (!data.identity.neighbor) {
      setOtherAcc(data.identity.neighbor);
      setAccReady(true);
    }
  }, [data, loading]);

  return {
    data,
    loading,
    error,
    otherAcc,
    accReady,
  };
}
