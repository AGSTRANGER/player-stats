import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PLAYERS, LOAD_MATCHES } from "../GraphQL/Queries";
import { Player,} from "../types";
import PlayerComponent from "./Player";
import { calculateTotalPlayTime } from "../helpers/player_helpers";

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const { error: playersError, loading: playersLoading, data: playersData } = useQuery(LOAD_PLAYERS);
  const { error: matchesError, loading: matchesLoading, data: matchesData } = useQuery(LOAD_MATCHES);

  useEffect(() => {
    if (playersData && matchesData) {
      const { players } = playersData;
      const { matches } = matchesData;
      const playersWithPlayTime = players.map((player:Player) => ({
        ...player,
        totalPlayTime: calculateTotalPlayTime(player, matches)
      }));
      console.log("🚀 ~ file: Players.tsx:48 ~ useEffect ~ playersWithPlayTime:", playersWithPlayTime)

      setPlayers(playersWithPlayTime);
    }
  }, [playersData, matchesData]);

  return (
    <div className="flex flex-wrap justify-center items-center border border-gray-500 border-2">
      {
        players?.map(player=>(<PlayerComponent key={player.id} player={player} />))
      }
    </div>
  );
}
