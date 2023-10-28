import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_PLAYERS, LOAD_MATCHES } from "../../GraphQL/Queries";
import { Player,Match} from "../../types";
import PlayerComponent from "./Player";
import { calculateTotalPlayTime } from "../../helpers/player_helpers";
import Modal from "../common/Modal";
import Matches from "../Matches/Matches";

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [gamesWon, setGamesWon] = useState<Match[]>([]);
  
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

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  const gamesWon = matchesData.matches.filter((match:Match) => match.winner.id === player.id);
    setGamesWon(gamesWon)
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  
  return (
    <div className="flex flex-wrap justify-center items-center border border-gray-500 border-2">
      {
        players?.map(player=>(<PlayerComponent key={player.id} player={player} matches={matchesData.matches} onClick={() => handlePlayerClick(player)} />))
      }
       {selectedPlayer && (
        <Modal
        title="Matches won by this player"
        body={<Matches matches={gamesWon} />} 
        onClose={handleCloseModal}
/>
      )}
    </div>
  );
}
