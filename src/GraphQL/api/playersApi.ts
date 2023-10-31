import { useEffect, useState } from "react";
import { useDispatch ,} from 'react-redux';
import { setPlayers } from "../../redux/slices/playersSlice";
import { LOAD_PLAYERS } from "../../GraphQL/PlayerQueries";
import { useQuery } from "@apollo/client";

export function useFetchPlayers() {
  const [players,setPlayers]=useState([])
  const { error: playersError, loading: playersLoading, data: playersData } = useQuery(LOAD_PLAYERS);

  useEffect(() => {
    if (playersData ) {
      const { players } = playersData;
     setPlayers(players)
    }
  }, [playersData]);

  return {
    playersData,
    playersError,
    playersLoading,
  };
}
