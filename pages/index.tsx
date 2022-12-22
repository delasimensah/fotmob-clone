import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { Response } from "../types/fixtures";

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

const Home = () => {
  const [fixtures, setFixtures] = useState<Response[][]>([]);

  useEffect(() => {
    const getFixtures = async () => {
      const urls = [
        `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(
          new Date()
        ).format("YYYY-MM-DD")}&league=48&season=2022`,
      ];

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f7d324f1cemsh97cc8243f2aba3dp1e755ajsnde7459ca1311",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      const matches = await Promise.all(
        urls.map((url) => fetch(url, options).then((res) => res.json()))
      );

      const transformedData = matches.map((match) => {
        return match.response;
      });

      // console.log(transformedData);

      setFixtures(transformedData);
    };

    getFixtures();
  }, []);

  return (
    <div className="grid grid-cols-[300px,640px,300px] gap-5 mt-20">
      <div className="">
        <div className="space-y-5">
          <h1 className="px-4 text-xl font-semibold">Top Leagues</h1>

          <ul className="">
            {leagues.map(({ icon, name }, idx) => {
              return (
                <li key={idx} className="font-light">
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

                    <span className="text-lg font-light capitalize">
                      {name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* matches */}
      <div className="bg-white rounded-3xl">
        <div className="h-[80px] border-b border-slate-100"></div>

        <>
          {fixtures.length > 0 ? (
            <>
              {fixtures.map((fixture, idx) => {
                return (
                  <div
                    key={idx}
                    className="border-b divide-y border-slate-100 divide-slate-100"
                  >
                    <div className="h-[60px] pl-[20px] flex items-center space-x-5">
                      <div className="relative h-[20px] w-[20px]">
                        <Image src={fixture[0].league.logo} alt="" fill />
                      </div>

                      <h1 className="text-lg">
                        {fixture[0].league.country} - {fixture[0].league.name}
                      </h1>
                    </div>

                    <>
                      {fixture
                        .sort(
                          (a, b) => a.fixture.timestamp - b.fixture.timestamp
                        )
                        .map((match) => {
                          return (
                            <div
                              key={match.fixture.id}
                              className="grid grid-cols-[1fr,25px,40px,25px,1fr] px-[5px] gap-[15px] h-[70px] place-items-center"
                            >
                              <div className="text-right">
                                {match.teams.home.name}
                              </div>

                              <div className="relative h-[25px] w-[25px]">
                                <Image
                                  src={match.teams.home.logo}
                                  alt=""
                                  fill
                                />
                              </div>

                              <div className="flex justify-center text-sm">
                                {match.fixture.status.short === "NS" ? (
                                  moment(match.fixture.date).format("LT")
                                ) : (
                                  <div className="flex flex-col items-center">
                                    <p>
                                      {match.goals.home || 0} -{" "}
                                      {match.goals.away || 0}
                                    </p>

                                    <p className="text-xs">
                                      {match.fixture.status.short}
                                    </p>
                                  </div>
                                )}
                                {}
                              </div>

                              <div className="relative h-[25px] w-[25px]">
                                <Image
                                  src={match.teams.away.logo}
                                  alt=""
                                  fill
                                />
                              </div>

                              <div>{match.teams.away.name}</div>
                            </div>
                          );
                        })}
                    </>
                  </div>
                );
              })}
            </>
          ) : (
            <p>no fixtures today</p>
          )}
        </>
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
