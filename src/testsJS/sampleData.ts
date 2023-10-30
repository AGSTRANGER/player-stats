import { Player } from '../types'; 

export const players: Player[] = [
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    shortname: 'JD',
    sex: 'Male',
    picture: {
      url: 'https://example.com/john_doe.jpg',
    },
    country: {
      code: 'US',
      picture: {
        url: 'https://example.com/flags/us.jpg',
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
    id: '2',
    firstname: 'Jane',
    lastname: 'Smith',
    shortname: 'JS',
    sex: 'Female',
    picture: {
      url: 'https://example.com/jane_smith.jpg',
    },
    country: {
      code: 'CA',
      picture: {
        url: 'https://example.com/flags/ca.jpg',
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
