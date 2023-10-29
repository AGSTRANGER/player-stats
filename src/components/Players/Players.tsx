import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setPlayers } from "../../redux/slices/playersSlice";
import { setMatches } from "../../redux/slices/matchesSlice";

import { useQuery } from "@apollo/client";
import { LOAD_PLAYERS, LOAD_MATCHES } from "../../GraphQL/Queries";
import { Player,Match,} from "../../types";
import PlayerComponent from "./Player";
import { calculateTotalPlayTime } from "../../helpers/player_helpers";
import Modal from "../common/Modal";
import Matches from "../Matches/Matches";

export default function Players() {
  // const [players, setPlayers] = useState<Player[]>([]);
  const dispatch = useDispatch();
  const state= useSelector((state:any) => state);
  const {players}=state.players
  // const state = useSelector((state:RootState) => state);
  // console.log("🚀 ~ file: Players.tsx:18 ~ Players ~ state:", state)
  console.log("🚀 ~ file: Players.tsx:18 ~ Players ~ players:", players)
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [gamesWon, setGamesWon] = useState<Match[]>([]);
  
  const { error: playersError, loading: playersLoading, data: playersData } = useQuery(LOAD_PLAYERS);
  console.log("🚀 ~ file: Players.tsx:20 ~ Players ~ playersData:", playersData)
  const response = useQuery(LOAD_PLAYERS);
  console.log("🚀 ~ file: Players.tsx:21 ~ Players ~ response:", response)
  const { error: matchesError, loading: matchesLoading, data: matchesData } = useQuery(LOAD_MATCHES);

  useEffect(() => {
    console.log("🚀 ~ file: Players.tsx:28 ~ useEffect ~ useEffect:", useEffect)
    if (playersData && matchesData) {
      const { players } = playersData;
      console.log("🚀 ~ file: Players.tsx:31 ~ useEffect ~ players:", players)
      const { matches } = matchesData;
      console.log("🚀 ~ file: Players.tsx:33 ~ useEffect ~ matches:", matches)
      const playersWithPlayTime = players.map((player:Player) => ({
        ...player,
        totalPlayTime: calculateTotalPlayTime(player, matches)
      }));
      console.log("🚀 ~ file: Players.tsx:48 ~ useEffect ~ playersWithPlayTime:", playersWithPlayTime)

      dispatch(setPlayers(playersWithPlayTime));
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
  console.log("🚀 ~ file: Players.tsx:56 ~ Players ~ players:", players)
  console.log("🚀 ~ file: Players.tsx:59 ~ Players ~ players.length>0:", players.length>0)
  
  return (
    <div className="flex flex-wrap justify-center items-center border border-gray-500 border-2">
       {
        players?.map((player:Player)=>(<PlayerComponent key={player.id} player={player} matches={matchesData.matches} onClick={() => handlePlayerClick(player)} />))
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
