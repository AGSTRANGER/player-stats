import { Player, Match } from "../types";

export function calculateTotalPlayTime(player: Player, matches: Match[]): string {
  const playerMatches = matches.filter(match => match.players.some(p => p.id === player.id));

  const totalDuration = playerMatches.reduce((total, match) => {
    const startTime = new Date(match.startTime);
    const endTime = new Date(match.endTime);
    const duration = endTime.getTime() - startTime.getTime();
    return total + duration;
  }, 0);

  // Convert the total duration to a human-readable format (e.g., hours and minutes)
  const hours = Math.floor(totalDuration / 3600000);
  const minutes = Math.floor((totalDuration % 3600000) / 60000);
  console.log("🚀 ~ file: player_helpers.ts:19 ~ calculateTotalPlayTime ~ `${hours} hours ${minutes} minutes`:", `${hours} hours ${minutes} minutes`)
  return `${hours} hours ${minutes} minutes`;
}

export function getGamesWonByPlayer(player: Player, matches: Match[]): Match[] {
  return matches.filter((match) => match.winner.id === player.id);
}