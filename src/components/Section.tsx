import Image, { StaticImageData } from "next/image";
import React from "react";

function Section({
  position,
  institution,
  period,
  place,
  image,
  skills,
}: {
  position: string;
  institution: string;
  period: string;
  place: string;
  image: StaticImageData;
  skills?: string;
}) {
  return (
    <div className="flex justify-start items-start gap-5">
      <Image alt={`${institution} logo`} src={image} width={40} height={40} />
      <div>
        <p className="font-bold">{position}</p>
        <p>{institution}</p>
        <p className="text-gray-500">{period}</p>
        <p className="text-gray-500">{place}</p>
        {skills && <p className="text-gray-500">Skills: {skills}</p>}
      </div>
    </div>
  );
}

export default Section;
