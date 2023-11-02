import React from "react";
import { Match } from "../../types";
import {
  getTimeFromString,
  getDateFromString,
} from "../../helpers/dateHelpers";

type MatchProps = {
  match: Match;
  matchNumber: Number;
};

const MatchComponent: React.FC<MatchProps> = ({ match, matchNumber }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded shadow-md mb-4">
      <h4 className="text-indigo-600 text-lg font-semibold mb-2">
        Match {String(matchNumber)}: {getDateFromString(match.startTime)}
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
        Players:
      </h5>
      <ul className="list-disc ml-6">
        {match.players.map((player) => (
          <li key={player.id} className="text-gray-600">
            {player.firstname} {player.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchComponent;
