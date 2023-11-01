export const players = [
  {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    shortname: "JD",
    sex: "Male",
    picture: {
      url: "https://example.com/john_doe.jpg",
    },
    country: {
      code: "US",
      picture: {
        url: "https://example.com/flags/us.jpg",
      },
    },
    stats: {
      rank: 1,
      age: 28,
      weight: 75,
      height: 180,
      points: 1000,
    },
  },
  {
    id: "2",
    firstname: "Jane",
    lastname: "Smith",
    shortname: "JS",
    sex: "Female",
    picture: {
      url: "https://example.com/jane_smith.jpg",
    },
    country: {
      code: "CA",
      picture: {
        url: "https://example.com/flags/ca.jpg",
      },
    },
    stats: {
      rank: 2,
      age: 25,
      weight: 68,
      height: 165,
      points: 900,
    },
  },
];

export const matches = [
  {
    id: "1",
    startTime: "2023-10-30T10:00:00",
    endTime: "2023-10-30T11:30:00",
    players: [players[0], players[1]],
    winner: players[0],
  },
  {
    id: "2",
    startTime: "2023-10-31T14:00:00",
    endTime: "2023-10-31T15:30:00",
    players: [players[1], players[0]],
    winner: players[1],
  },
];
