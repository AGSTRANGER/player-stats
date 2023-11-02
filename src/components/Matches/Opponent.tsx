import React from "react";
import { Player } from "../../types";

type OpponentProps = {
  opponent: Player;
  onClose: () => void;
};

const Opponent: React.FC<OpponentProps> = ({ opponent, onClose }) => {
  return (
    <div>
      <h3>
        {opponent.firstname} {opponent.lastname}
      </h3>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Opponent;
