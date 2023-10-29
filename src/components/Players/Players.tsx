import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Player, Match } from "../../types";
import { calculateTotalPlayTime } from "../../helpers/player_helpers";
import Modal from "../common/Modal";
import Matches from "../Matches/Matches";
import PlayerComponent from "./Player";
import { useFetchPlayers } from "../../GraphQL/api/playersApi"
import { useFetchMatches } from  "../../GraphQL/api/matchesApi"

export default function Players() {
  const state = useSelector((state: any) => state);
  const { players } = state.players;
  const { matches } = state.matches;

  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [gamesWon, setGamesWon] = useState<Match[]>([]);

  const { playersData, playersError, playersLoading } = useFetchPlayers();
  const { matchesData, matchesError, matchesLoading } = useFetchMatches();
 

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    const gamesWon = matches.filter((match: Match) => match.winner.id === player.id);
    setGamesWon(gamesWon);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="flex flex-wrap justify-center items-center border border-gray-500 border-2">
        {
      players?.map((player:Player)=>(<PlayerComponent key={player.id} player={player} matches={matches} onClick={() => handlePlayerClick(player)} />))
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

