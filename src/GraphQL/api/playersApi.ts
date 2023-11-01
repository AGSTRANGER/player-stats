import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPlayers } from "../../redux/slices/playersSlice";
import { LOAD_PLAYERS } from "../../GraphQL/PlayerQueries";
import { useQuery } from "@apollo/client";
import { Player } from "../../types";

type PlayersData = {
  players: Player[];
};

export function useFetchPlayers() {
  const dispatch = useDispatch();

  const { loading: playersLoading, data: playersData } =
    useQuery<PlayersData>(LOAD_PLAYERS);

  useEffect(() => {
    if (playersData) {
      const { players } = playersData;
      dispatch(setPlayers(players));
    }
  }, [playersData]);

  return {
    playersData,
    playersLoading,
  };
}
