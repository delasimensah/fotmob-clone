import { FC } from "react";

type HeadingProps = {
  text: string;
  className?: string;
};

const Heading: FC<HeadingProps> = ({ text, className }) => {
  return (
    <h1 className={`text-xl font-semibold capitalize ${className}`}>{text}</h1>
  );
};

export default Heading;
