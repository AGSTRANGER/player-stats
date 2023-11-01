import { gql } from "@apollo/client";

export const LOAD_MATCHES = gql`
  query GetMatches {
    matches {
      id
      startTime
      endTime
      winner {
        id
      }
      players {
        id
        firstname
        lastname
      }
    }
  }
`;
