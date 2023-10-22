import { useQuery } from "@apollo/client";
import { useEffect } from "react";

import { GET_NEXTID_INFO } from "@/graphql/queries";

type NextidInfo = {
  platform: string;
  identity: string;
};

export default function useNextid({ platform, identity }: NextidInfo) {
  const { data, loading, error } = useQuery(GET_NEXTID_INFO, {
    variables: {
      platform: platform,
      identity: identity,
    },
  });

  useEffect(() => {
    if (data) {
      console.log("data", data);
    }
  }, [data]);

  return {
    data,
    loading,
    error,
  };
}
