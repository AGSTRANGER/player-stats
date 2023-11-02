import React from "react";
import { Match } from "../../types";
import {
  getTimeFromString,
  getDateFromString,
} from "../../helpers/dateHelpers";

type MatchProps = {
  match: Match;
  matchNumber: number;
  selectedPlayerId: string;
};

const MatchComponent: React.FC<MatchProps> = ({
  match,
  matchNumber,
  selectedPlayerId,
}) => {
  // Find the opponent based on the selectedPlayerId
  const opponent = match.players.find(
    (player) => player.id !== selectedPlayerId
  );

  return (
    <div className="bg-yellow-100 p-4 rounded shadow-md mb-4">
      <h4 className="text-indigo-600 text-lg font-semibold mb-2">
        Match {matchNumber}: {getDateFromString(match.startTime)}
      </h4>
      <div className="text-gray-700 text-base">
        <span className="font-bold text-teal-600">Start Time:</span>{" "}
        {getTimeFromString(match.startTime)}
      </div>
      <div className="text-gray-700 text-base">
        <span className="font-bold text-teal-600">End Time:</span>{" "}
        {getTimeFromString(match.endTime)}
      </div>
      <h5 className="text-indigo-600 text-lg font-semibold mt-4 mb-2">
        Opponent:
      </h5>
      <ul className="list-disc ml-6">
        {opponent ? (
          <li key={opponent.id} className="text-gray-600">
            {opponent.firstname} {opponent.lastname}
          </li>
        ) : (
          <li className="text-gray-600">No opponent found</li>
        )}
      </ul>
    </div>
  );
};

export default MatchComponent;
