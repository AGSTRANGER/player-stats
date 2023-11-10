import React from "react";
import { Match, Player } from "../../types";
import {
  getTimeFromString,
  getDateFromString,
} from "../../helpers/dateHelpers";
import { useSelector } from "react-redux";

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
  const { players } = useSelector((state: any) => state.players);

  const opponent = match.players.find(
    (player) => player.id !== selectedPlayerId
  );
  const opponentId = opponent?.id;
  const opponentData = players.find(
    (player: Player) => player.id === opponentId
  );

  return (
    <div className="bg-blue-100 p-4 rounded shadow-md mb-4hover:transform hover:scale-105 hover:transition-transform hover:duration-300 hover:bg-blue-200">
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
      <div>
        {opponentData ? (
          <p key={opponentData.id} className="text-gray-600 flex">
            {opponentData.firstname} {opponentData.lastname}
            <img
              src={opponentData.picture.url}
              alt={`${opponentData.firstname} ${opponentData.lastname}`}
              className="w-6 h-6 ml-2 rounded-full"
            />
          </p>
        ) : (
          <p className="text-gray-600">No opponent found</p>
        )}
      </div>
    </div>
  );
};

export default MatchComponent;
