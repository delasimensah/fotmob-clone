import { FC } from "react";
import Link from "next/link";
import moment from "moment";

import { Response, Goals } from "../types/fixtures";

import { CustomImage } from ".";

type MatchStatusProps = {
  goals?: Goals;
  status: string;
  className?: string;
};

type FixtureLinkProps = {
  match: Response;
};

const MatchStatus: FC<MatchStatusProps> = ({ goals, status, className }) => {
  return (
    <div className="flex flex-col items-center">
      {goals && (
        <p>
          {goals.home} - {goals.away}
        </p>
      )}

      <p className={`${className}`}>{status}</p>
    </div>
  );
};

const FixtureLink: FC<FixtureLinkProps> = ({ match }) => {
  let matchStatus;

  switch (match.fixture.status.short) {
    case "NS":
      matchStatus = (
        <MatchStatus
          status={moment(match.fixture.date).format("LT")}
          className="text-center"
        />
      );
      break;

    case "1H":
    case "2H":
      matchStatus = (
        <MatchStatus
          goals={match.goals}
          status={`${match.fixture.status.elapsed}'`}
          className="text-xs text-green-500"
        />
      );
      break;

    case "HT":
      matchStatus = (
        <MatchStatus
          goals={match.goals}
          status={match.fixture.status.short}
          className="text-xs text-green-500"
        />
      );
      break;

    case "FT":
      matchStatus = (
        <MatchStatus
          goals={match.goals}
          status={match.fixture.status.short}
          className="text-xs text-slate-400"
        />
      );
      break;

    default:
      matchStatus = <MatchStatus status={match.fixture.status.short} />;
      break;
  }

  return (
    <Link
      href="#"
      className="grid grid-cols-[1fr,25px,40px,25px,1fr] px-[5px] gap-[15px] h-[70px] place-items-center hover:bg-[#ededed]"
    >
      <p className="w-full text-right">{match.teams.home.name}</p>

      <CustomImage className="h-[25px] w-[25px]" src={match.teams.home.logo} />

      <div className="flex justify-center text-sm">{matchStatus}</div>

      <CustomImage className="h-[25px] w-[25px]" src={match.teams.away.logo} />

      <p className="w-full">{match.teams.away.name}</p>
    </Link>
  );
};

export default FixtureLink;
