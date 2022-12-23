import { FC } from "react";

import { Response } from "../types/fixtures";
import { CustomImage, FixtureLink } from ".";

type LeagueFixturesProps = {
  fixtures: Response[];
};

const LeagueFixtures: FC<LeagueFixturesProps> = ({ fixtures }) => {
  if (fixtures === undefined || fixtures.length === 0) {
    return null;
  }

  return (
    <div className="border-b divide-y border-slate-100 divide-slate-100">
      <div className="h-[60px] pl-[20px] flex items-center space-x-5">
        <CustomImage
          className="h-[20px] w-[20px]"
          src={fixtures[0]?.league.logo}
        />

        <h1 className="text-lg">
          {fixtures[0]?.league.country} - {fixtures[0]?.league.name}
        </h1>
      </div>

      {fixtures
        .sort((a, b) => a.fixture.timestamp - b.fixture.timestamp)
        .map((match) => {
          return <FixtureLink key={match.fixture.id} match={match} />;
        })}
    </div>
  );
};

export default LeagueFixtures;
