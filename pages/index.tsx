import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import useSWR from "swr";

import { Response } from "../types/fixtures";

import {
  DateNavigation,
  Heading,
  LeagueFixtures,
  NoMatches,
  Loader,
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
    "X-RapidAPI-Key": "f7d324f1cemsh97cc8243f2aba3dp1e755ajsnde7459ca1311",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

const Home = () => {
  const [date, setDate] = useState<Date>(new Date());

  const urls = [
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=39&season=2022`,
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=45&season=2022`,
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=48&season=2022`,
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=140&season=2022`,
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=78&season=2022`,
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=61&season=2022`,
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
      date
    ).format("YYYY-MM-DD")}&league=135&season=2022`,
  ];

  const fetcher = async (args: string[]) => {
    const matches = await Promise.all(
      args.map((arg) => fetch(arg, options).then((res) => res.json()))
    );

    const transformedData = matches.map((match) => {
      return match.response;
    });

    return transformedData as Response[][];
  };

  // const { data, error, isLoading } = useSWR(urls, fetcher);

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

        <ul className="">
          {leagues.map(({ icon, name }, idx) => {
            return (
              <li key={idx}>
                <Link
                  href="#"
                  className="flex items-center p-3 space-x-4 hover:bg-black/10 rounded-3xl"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={20}
                    height={20}
                    className="object-cover"
                  />

                  <span className="text-lg font-light capitalize">{name}</span>
                </Link>
              </li>
            );
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
        {/* {isLoading ? <Loader /> : <>{}</>} */}

        {/* {data?.length > 0 && data[0] !== undefined ? (
          <>
            {data?.map((fixture, idx) => {
              return <LeagueFixtures key={idx} fixtures={fixture} />;
            })}
          </>
        ) : (
          <NoMatches />
        )} */}
      </div>

      {/* news */}
      <div className="space-y-5">
        <div className="bg-white rounded-3xl h-80"></div>

        <div className="bg-white rounded-3xl h-[500px]"></div>
      </div>
    </div>
  );
};

export default Home;
