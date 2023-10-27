import { gql } from "@apollo/client";

export const LOAD_PLAYERS = gql`
  query GetPlayers {
    players {
      id
      firstname
      lastname
    }
  }
`;
