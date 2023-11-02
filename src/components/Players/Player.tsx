import React from "react";
import { useSelector } from "react-redux";

import { Player } from "../../types";
import {
  getWinsAndLossesByPlayer,
  calculateTotalPlayTime,
} from "../../helpers/playerHelpers";

interface PlayerProps {
  player: Player;
  onClick: () => void;
}

const PlayerComponent: React.FC<PlayerProps> = ({ player, onClick }) => {
  const { matches } = useSelector((state: any) => state.matches);

  const { wins, losses } = getWinsAndLossesByPlayer(player, matches);
  const totalPlayTime = calculateTotalPlayTime(player, matches);

  const {
    firstname,
    lastname,
    sex,
    picture: { url: pictureUrl },
    country: {
      code,
      picture: { url: countryUrl },
    },
    stats: { rank, age, weight, height, points },
  } = player;

  const weightInKilograms = (weight / 1000).toFixed(2);

  const heightInMeters = (height / 100).toFixed(2);

  return (
    <div
      data-testid="player-component"
      className="player max-w-sm rounded-lg overflow-hidden shadow-md m-4 hover:shadow-lg cursor-pointer bg-blue-100"
      onClick={onClick}
    >
      <img
        src={pictureUrl}
        alt={`${firstname} ${lastname}`}
        className="w-auto h-auto rounded-full mx-auto pt-2"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-indigo-600 mb-2">
          <div className="font-bold text-xl text-indigo-600 mb-2 flex items-center">
            {firstname} {lastname}
            <img src={countryUrl} alt={`${code}`} className="w-6 h-6 ml-2" />
          </div>
        </div>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Sex:</span> {sex}
        </p>

        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Rank:</span> {rank}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Age:</span> {age}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Weight:</span>{" "}
          {weightInKilograms} kg
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Height:</span>{" "}
          {heightInMeters} m
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Points:</span> {points}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Total play time:</span>{" "}
          {totalPlayTime}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Wins:</span> {wins}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-teal-600">Losses:</span> {losses}
        </p>
      </div>
    </div>
  );
};

export default PlayerComponent;
