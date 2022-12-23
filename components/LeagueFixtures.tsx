import { FC } from "react";
import Link from "next/link";
import moment from "moment";

import { Response } from "../types/fixtures";
import { CustomImage } from ".";

type LeagueFixturesProps = {
  fixtures: Response[];
};

const LeagueFixtures: FC<LeagueFixturesProps> = ({ fixtures }) => {
  return (
    <Link
      href="#"
      className="block border-b divide-y border-slate-100 divide-slate-100"
    >
      <div className="h-[60px] pl-[20px] flex items-center space-x-5">
        <CustomImage
          className="h-[20px] w-[20px]"
          src={fixtures[0]?.league.logo}
        />

        <h1 className="text-lg">
          {fixtures[0]?.league.country} - {fixtures[0]?.league.name}
        </h1>
      </div>

      <>
        {fixtures
          .sort((a, b) => a.fixture.timestamp - b.fixture.timestamp)
          .map((match) => {
            return (
              <div
                key={match.fixture.id}
                className="grid grid-cols-[1fr,25px,40px,25px,1fr] px-[5px] gap-[15px] h-[70px] place-items-center"
              >
                <div className="text-right">{match.teams.home.name}</div>

                <CustomImage
                  className="h-[25px] w-[25px]"
                  src={match.teams.home.logo}
                />

                <div className="flex justify-center text-sm">
                  {match.fixture.status.short === "NS" ? (
                    <div className="text-center">
                      {moment(match.fixture.date).format("LT")}{" "}
                    </div>
                  ) : match.fixture.status.short === "1H" ||
                    match.fixture.status.short === "2H" ? (
                    <div className="flex flex-col items-center">
                      <p>
                        {match.goals.home || 0} - {match.goals.away || 0}
                      </p>

                      <p className="text-xs text-green-500">
                        {match.fixture.status.elapsed}&apos
                      </p>
                    </div>
                  ) : match.fixture.status.short === "HT" ? (
                    <div className="flex flex-col items-center">
                      <p>
                        {match.goals.home || 0} - {match.goals.away || 0}
                      </p>

                      <p className="text-xs text-green-500">
                        {match.fixture.status.short}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <p>
                        {match.goals.home || 0} - {match.goals.away || 0}
                      </p>

                      <p className="text-xs text-slate-400">
                        {match.fixture.status.short}
                      </p>
                    </div>
                  )}
                </div>

                <CustomImage
                  className="h-[25px] w-[25px]"
                  src={match.teams.away.logo}
                />

                <div>{match.teams.away.name}</div>
              </div>
            );
          })}
      </>
    </Link>
  );
};

export default LeagueFixtures;
