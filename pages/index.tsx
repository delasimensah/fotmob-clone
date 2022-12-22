import Link from "next/link";
import Image from "next/image";

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
      <div className="bg-white rounded-3xl">Matches</div>

      {/* news */}
      <div className="space-y-5">
        <div className="bg-white rounded-3xl h-80">Trending News</div>

        <div className="bg-white rounded-3xl h-[500px]">Premier League</div>
      </div>
    </div>
  );
};

export default Home;
