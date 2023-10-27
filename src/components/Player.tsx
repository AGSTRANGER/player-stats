// Player.tsx
import React from "react";
import { Player } from "../types";

interface PlayerProps {
  player: Player;
}

const PlayerComponent: React.FC<PlayerProps> = ({ player }) => {
  return (
    <h2>
      {player.firstname} {player.lastname}
    </h2>
  );
};

export default PlayerComponent;
