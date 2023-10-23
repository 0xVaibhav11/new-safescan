import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { GET_NEXTID_INFO } from "@/graphql/queries";

type NextidInfo = {
  platform: string;
  identity: string;
};
// interface Identity {
//   displayName: string;
//   identity: string;
//   platform: string;
//   uuid: string;
//   __typename: "IdentityRecord";
// }
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
  let ident = {};
  const { data, loading, error } = useQuery(GET_NEXTID_INFO, {
    variables: {
      platform: platform,
      identity: identity,
    },
  });

  useEffect(() => {
    if (data) {
      ident = data?.identity.neighbor;
    }
  }, [data]);

  return {
    data,
    loading,
    error,
    ident,
  };
}
