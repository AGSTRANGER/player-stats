import { gql } from "@apollo/client";

export const LOAD_PLAYERS = gql`
  query GetPlayers {
    players {
      id
      firstname
      lastname
      shortname
      sex
      picture {
        url
      }
      country {
        code
        picture {
          url
        }
      }
      stats {
        rank
        age
    }
    }
  }
`;

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