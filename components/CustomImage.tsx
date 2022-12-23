import { FC } from "react";
import Image from "next/image";

type ImageProps = {
  className: string;
  src: string;
};

const CustomImage: FC<ImageProps> = ({ src, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 20px,
              (max-width: 1200px) 20px,20px"
      />
    </div>
  );
};

export default CustomImage;
