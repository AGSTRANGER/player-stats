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
  };
    // Add other player fields here
    totalPlayTime: string; // Add the total play time field
};

export type Match = {
  id: string;
  startTime: string;
  endTime: string;
  players: Player[];
};

