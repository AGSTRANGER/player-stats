
import  { useEffect, useState } from "react";
import { useQuery, } from "@apollo/client";
import { LOAD_PLAYERS } from "../GraphQL/Queries";
import { Player } from "../types";
import PlayerComponent from "./Player";

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const { error, loading, data } = useQuery<{ players: Player[] }>(LOAD_PLAYERS);
  useEffect(() => {
    if (data) {
      const { players } = data;
      console.log("🚀 ~ file: Players.tsx:14 ~ useEffect ~ players:", players)
      setPlayers(players);
    }
  }, [data]);
  return (
    <div>
    <h1>Players</h1>{" "}
    {players?.map((player) => {
      return (
        <PlayerComponent key={player.id} player={player} />
      );
    })}
  </div>
  )
}

