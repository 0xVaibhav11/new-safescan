import { gql } from "@apollo/client";

export const GET_NEXTID_INFO = gql`
  query findOneIdentityWithSource {
    identity(platform: "twitter", identity: "suji_yan") {
      uuid
      platform
      identity
      displayName
      createdAt
      addedAt
      updatedAt
      # Here we perform a 100-depth deep search for this identity's "neighbor".
      neighbor(depth: 100) {
        sources # Which upstreams provide these connection infos.
        identity {
          uuid
          platform
          identity
          displayName
        }
      }
    }
  }
`;
