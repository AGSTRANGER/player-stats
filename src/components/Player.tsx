// Player.tsx
import React from "react";
import { Player } from "../types";

interface PlayerProps {
  player: Player;
}

const PlayerComponent: React.FC<PlayerProps> = ({ player }) => {
  const {
    id,
    firstname,
    lastname,
    shortname,
    sex,
    picture: { url: pictureUrl },
    country: { code: countryCode, picture: { url: countryFlagUrl } },
    stats: { rank, age },
  } = player;

  console.log("Player ID: " + id);
  console.log("First Name: " + firstname);
  console.log("Last Name: " + lastname);
  console.log("Short Name: " + shortname);
  console.log("Sex: " + sex);
  console.log("Picture URL: " + pictureUrl);
  console.log("Country Code: " + countryCode);
  console.log("Country Flag URL: " + countryFlagUrl);
  console.log("Rank: " + rank);
  console.log("Age: " + age);
  console.log("----------");
  return (
    <h2>
      {player.firstname} {player.lastname}
    </h2>
  );
};

export default PlayerComponent;
