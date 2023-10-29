// playersApi.ts
import { useEffect } from "react";
import { useDispatch ,useSelector} from 'react-redux';
import { setPlayers } from "../../redux/slices/playersSlice";
import { LOAD_PLAYERS } from "../../GraphQL/PlayerQueries";
import { useQuery } from "@apollo/client";
import { Player } from "../../types";
import { calculateTotalPlayTime } from "../../helpers/player_helpers";

export function useFetchPlayers() {
  const dispatch = useDispatch();

  const { error: playersError, loading: playersLoading, data: playersData } = useQuery(LOAD_PLAYERS);

  const { matches } = useSelector((state: any) => state.matches);

  useEffect(() => {
    if (playersData && matches) {
      const { players } = playersData;

      // Calculate total play time for each player
      const playersWithPlayTime = players.map((player: Player) => ({
        ...player,
        totalPlayTime: calculateTotalPlayTime(player, matches)
      }));

      dispatch(setPlayers(playersWithPlayTime));
    }
  }, [playersData, matches]);

  return {
    playersData,
    playersError,
    playersLoading,
  };
}
