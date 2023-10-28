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
    country: { code }, // Access the 'code' property directly from the 'country' object
    stats: { rank, age },
  } = player;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
<img src={pictureUrl} alt={`${firstname} ${lastname}`} className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-128 lg:h-128" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {firstname} {lastname}
        </div>
        <p className="text-gray-700 text-base">
          Short Name: {shortname}
        </p>
        <p className="text-gray-700 text-base">
          Sex: {sex}
        </p>
        <p className="text-gray-700 text-base">
          Country Code: {code}
        </p>
        <p className="text-gray-700 text-base">
          Rank: {rank}
        </p>
        <p className="text-gray-700 text-base">
          Age: {age}
        </p>
      </div>
    </div>
  );
};

export default PlayerComponent;
