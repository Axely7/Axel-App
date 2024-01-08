import Image from "next/image";
import React from "react";

export const Avatar = () => {
  return (
    <div className="sm:hidden xl:flex xl:justify-center xl:mt-60">
      <Image
        src={"/logo.png"}
        width={220}
        height={40}
        alt=""
        className="bg-opacity-100 translate-z-0 rounded-xl h-64 w-64"
      />
    </div>
  );
};
