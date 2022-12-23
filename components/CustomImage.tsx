import { FC } from "react";
import Image from "next/image";

type ImageProps = {
  className: string;
  src: string;
};

const CustomImage: FC<ImageProps> = ({ src, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt="" fill sizes="" />
    </div>
  );
};

export default CustomImage;
