import { gql, useQuery } from "@apollo/client";
import {LOAD_PLAYERS} from "../../GraphQL/PlayerQueries"


export function Players() {
  // const { error: playersError, loading: playersLoading, data: playersData }  = useQuery(LOAD_PLAYERS,);

  // if (playersLoading) return <p>Loading...</p>;
  // if (playersError) return <p>{playersError.message}</p>;
  return (
    <p>
      Whatever
      {/* {playersData.dog.name} is a {playersData.dog.breed} */}
    </p>
  );
}
