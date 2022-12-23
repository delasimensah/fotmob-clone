import { useState } from "react";
import moment from "moment";
import useSWR from "swr";

import { Response, RootObject } from "../types/fixtures";

import {
  DateNavigation,
  Heading,
  LeagueFixtures,
  NoMatches,
  Loader,
  LeagueLink,
} from "../components";

// league logos
import epl from "../public/leagueLogos/epl.png";
import cl from "../public/leagueLogos/cl.png";
import laliga from "../public/leagueLogos/laliga.png";
import bundesliga from "../public/leagueLogos/bundesliga.png";
import serieA from "../public/leagueLogos/serieA.png";
import ligue1 from "../public/leagueLogos/ligue1.png";

const leagues = [
  { icon: epl, name: "premier league" },
  { icon: cl, name: "champions league" },
  { icon: laliga, name: "la liga" },
  { icon: bundesliga, name: "bundesliga" },
  { icon: serieA, name: "serie a" },
  { icon: ligue1, name: "ligue 1" },
];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST as string,
  },
};

const Home = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [season] = useState("2022");

  const urls = [
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=39&season=${season}`,
    // `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
    //   date
    // ).format("YYYY-MM-DD")}&league=45&season=${season}`,
    // `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
    //   date
    // ).format("YYYY-MM-DD")}&league=48&season=${season}`,
    // `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
    //   date
    // ).format("YYYY-MM-DD")}&league=140&season=${season}`,
    // `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
    //   date
    // ).format("YYYY-MM-DD")}&league=78&season=${season}`,
    // `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
    //   date
    // ).format("YYYY-MM-DD")}&league=61&season=${season}`,
    // `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
    //   date
    // ).format("YYYY-MM-DD")}&league=135&season=${season}`,
  ];

  const fetcher = async (args: string[]) => {
    const matches = await Promise.all(
      args.map((arg) => fetch(arg, options).then((res) => res.json()))
    );

    const transformedData = matches.map((match) => {
      if (match.errors.length > 0) {
        return [];
      }

      return match.response;
    });

    return transformedData as Response[][];
  };

  // const { data: allFixtures, error, isLoading } = useSWR(urls, fetcher);

  // if (error) {
  //   return <p>{error.message}</p>;
  // }

  const isLoading = false;

  const allFixtures: Response[][] = [[], []];

  const isEmpty = allFixtures?.flat().length === 0;

  const getNextDay = () => {
    setDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
  };

  const getPreviousDay = () => {
    setDate(new Date(date.getTime() - 24 * 60 * 60 * 1000));
  };

  return (
    <div className="grid grid-cols-[300px,640px,300px] gap-5 mt-20">
      <div className="space-y-5">
        <Heading text="Top Leagues" className="px-4" />

        <ul>
          {leagues.map(({ icon, name }, idx) => {
            return <LeagueLink key={idx} icon={icon} name={name} />;
          })}
        </ul>
      </div>

      {/* matches */}
      <div className="bg-white rounded-3xl">
        <DateNavigation
          getPreviousDay={getPreviousDay}
          getNextDay={getNextDay}
          date={date}
          setDate={setDate}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!isEmpty ? (
              allFixtures?.map((fixtures, idx) => {
                return <LeagueFixtures key={idx} fixtures={fixtures} />;
              })
            ) : (
              <NoMatches />
            )}
          </>
        )}
      </div>

      {/* news */}
      <div className="space-y-5">
        <div className="bg-white rounded-3xl h-80"></div>

        <div className="bg-white rounded-3xl h-80"></div>
      </div>
    </div>
  );
};

export default Home;
