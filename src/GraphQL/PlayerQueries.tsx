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
        weight
        height
        points
    }
    }
  }
`;