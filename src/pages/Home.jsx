/* eslint-disable react/no-unescaped-entities */

import Brand from "../components/Brand";
import Expertise from "../components/Expertise";
import HeroSection from "../components/HeroSection";
import UseCase from "../components/UseCase";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <UseCase />
      <Brand />
      <Expertise />
    </div>
  );
}
