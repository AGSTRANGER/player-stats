
import React from "react";
import { Match } from "../../types";

type MatchProps = {
  match: Match;
};

const MatchComponent: React.FC<MatchProps> = ({ match }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded shadow-md mb-4">
      <h4 className="text-indigo-600 text-lg font-semibold mb-2">Match ID: {match.id}</h4>
      <p className="text-indigo-600">Start Time: {match.startTime}</p>
      <p className="text-indigo-600">End Time: {match.endTime}</p>
      <h5 className="text-red-600 text-lg font-semibold mt-4 mb-2">Players:</h5>
      <ul className="list-disc ml-6">
      {match.players.map(player=>(
  <li key={player.id} className="text-gray-600">
  {player.firstname} {player.lastname}
</li>
))}
      </ul>
    </div>
  );
};

export default MatchComponent;
