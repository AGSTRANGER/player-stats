// Matches.tsx
import React from "react";
import { Match } from "../../types";
import MatchComponent from "./Match";

type MatchesProps = {
  matches: Match[];
};

const Matches: React.FC<MatchesProps> = ({ matches }) => {
  return (
    <div>
      {matches.map((match) => (
        <MatchComponent key={match.id} match={match} />
      ))}
    </div>
  );
};

export default Matches;
