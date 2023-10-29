export type Player = {
  id: string;
  firstname: string;
  lastname: string;
  shortname: string; 
  sex: string; 
  picture: {
    url: string;
  };
  country: {
    code: string;
    picture: {
      url: string;
    };
  };
  stats: {
    rank: number;
    age: number;
    weight: number;
    height: number;
    points: number;
  };
};

export type Match = {
  id: string;
  startTime: string;
  endTime: string;
  players: Player[];
  winner: Player;
};

