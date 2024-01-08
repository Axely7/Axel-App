import Link from "next/link";
import React from "react";
import { RiGithubLine } from "react-icons/ri";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};
