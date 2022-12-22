export interface Response {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

interface Goals {
  home?: any;
  away?: any;
}

interface Teams {
  home: Home;
  away: Home;
}

interface Home {
  id: number;
  name: string;
  logo: string;
  winner?: any;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

interface Status {
  long: string;
  short: string;
  elapsed?: any;
}

interface Venue {
  id: number;
  name: string;
  city: string;
}

interface Periods {
  first?: any;
  second?: any;
}

// interface Paging {
//   current: number;
//   total: number;
// }

// interface FParameters {
//   league: string;
//   date: string;
//   season: string;
// }

// interface RootObject {
//   get: string;
//   parameters: FParameters;
//   errors: any[];
//   results: number;
//   paging: Paging;
//   response: Response[];
// }
