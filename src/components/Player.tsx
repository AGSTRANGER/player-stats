import React from "react";
import { Player } from "../types";

interface PlayerProps {
  player: Player;
}

const PlayerComponent: React.FC<PlayerProps> = ({ player }) => {
  const {
    firstname,
    lastname,
    shortname,
    sex,
    picture: { url: pictureUrl },
    country: { code },
    stats: { rank, age },
    totalPlayTime
  } = player;
  console.log("🚀 ~ file: Player.tsx:18 ~ player:", player)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        src={pictureUrl}
        alt={`${firstname} ${lastname}`}
        className="w-full h-auto"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {firstname} {lastname}
        </div>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Sex:</span> {sex}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Country Code:</span> {code}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Rank:</span> {rank}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Age:</span> {age}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Total play time:</span> {totalPlayTime}
        </p>
      </div>
    </div>
  );
};

export default PlayerComponent;
