// Matches.tsx
import React from "react";
import { Match } from "../../types";
import MatchComponent from "./Match";

type MatchesProps = {
  matches: Match[];
  selectedPlayerId: string;
};

const Matches: React.FC<MatchesProps> = ({ matches, selectedPlayerId }) => {
  return (
    <div className="matches-list">
      {matches.map((match, i) => (
        <MatchComponent
          matchNumber={i + 1}
          key={match.id}
          match={match}
          selectedPlayerId={selectedPlayerId}
        />
      ))}
    </div>
  );
};

export default Matches;
