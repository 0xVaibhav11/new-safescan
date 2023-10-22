import { useQuery } from "@apollo/client";
import { useEffect } from "react";

import { GET_NEXTID_INFO } from "@/graphql/queries";

type NextidInfo = {
  platform: string;
  identity: string;
};
type NextidNeighbor = {
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

export default function useNextid({ platform, identity }: NextidInfo) {
  const { data, loading, error } = useQuery(GET_NEXTID_INFO, {
    variables: {
      platform: platform,
      identity: identity,
    },
  });

  return {
    data,
    loading,
    error,
  };
}
