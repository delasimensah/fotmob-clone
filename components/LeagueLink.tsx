import { FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
Image;

type LeagueLinkProps = {
  icon: StaticImageData;
  name: string;
};

const LeagueLink: FC<LeagueLinkProps> = ({ icon, name }) => {
  return (
    <li>
      <Link
        href="#"
        className="flex items-center p-3 space-x-4 hover:bg-[#eaeaea] rounded-3xl"
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
};

export default LeagueLink;
