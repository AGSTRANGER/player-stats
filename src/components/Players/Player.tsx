import React from "react";
import { Player, Match } from "../../types";
import { getGamesWonByPlayer } from "../../helpers/player_helpers";

interface PlayerProps {
  player: Player;
  matches: Match[];
  onClick: () => void;
}

const PlayerComponent: React.FC<PlayerProps> = ({ player, matches, onClick }) => {
  const gamesWon = getGamesWonByPlayer(player, matches);

  const {
    firstname,
    lastname,
    shortname,
    sex,
    picture: { url: pictureUrl },
    country: { code },
    stats: { rank, age },
    totalPlayTime,
  } = player;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md m-4 hover:shadow-lg cursor-pointer" onClick={onClick}>
      <img src={pictureUrl} alt={`${firstname} ${lastname}`} className="w-full h-auto" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-indigo-600 mb-2">
          {firstname} {lastname}
        </div>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Sex:</span> {sex}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Country Code:</span> {code}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Rank:</span> {rank}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Age:</span> {age}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Total play time:</span> {totalPlayTime}
        </p>
      </div>
    </div>
  );
};

export default PlayerComponent;
