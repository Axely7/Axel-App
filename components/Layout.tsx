import React, { FC } from "react";
import { Sora } from "@next/font/google";
import { Nav } from "./Nav";
import { Header } from "./Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Nav />
      <Header />
    </div>
  );
};
