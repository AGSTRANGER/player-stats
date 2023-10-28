import React from "react";
import { Match } from "../../types";

type MatchProps = {
  match: Match;
};

const MatchComponent: React.FC<MatchProps> = ({ match }) => {
  return (
    <div>
      <h4>Match ID: {match.id}</h4>
      <p>Start Time: {match.startTime}</p>
      <p>End Time: {match.endTime}</p>
      <h5>Players:</h5>
      <ul>
        {match.players.map((player) => (
          <li key={player.id}>
            {player.firstname} {player.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchComponent;
