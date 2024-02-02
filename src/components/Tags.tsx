import Image, { StaticImageData } from "next/image";
import React from "react";

function Tags({
  name,
  image,
  h = 28,
  w = 28,
}: {
  name: string;
  image: StaticImageData;
  h?: number;
  w?: number;
}) {
  return (
    <div className="flex shadow border border-gray-50 px-2 py-2 rounded-xl gap-2 justify-center items-center">
      <Image alt="logo" src={image} width={w} height={h} />
      <p className="m-0">{name}</p>
    </div>
  );
}

export default Tags;
