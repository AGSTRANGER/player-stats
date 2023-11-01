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
  return `${hours} hours ${minutes} minutes`;
}

export function getWinsAndLossesByPlayer(player: Player, matches: Match[]): { wins: number; losses: number } {
  let wins = 0;
  let losses = 0;

  for (const match of matches) {
    if (match.winner.id === player.id) {
      wins++;
    } else {
      const isPlayerInMatch = match.players.some((p) => p.id === player.id);
      if (isPlayerInMatch) {
        losses++;
      }
    }
  }

  return { wins, losses };
}

export function getGamesWonByPlayer(player: Player, matches: Match[]): Match[] {
  return matches.filter((match) => match.winner.id === player.id);
}