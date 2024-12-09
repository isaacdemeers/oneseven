import { section } from "motion/react-client";
import Image from "next/image";
import React from "react";

import Nav from "@/components/header";
import CustomBadge from "@/components/badge";
import BadgeInteraction from "@/components/badgeInteraction";

export default function Home() {
  return (
    <>
      <Nav />
      <BadgeInteraction />

      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <p className="text-5xl font-bold">WHY WE ARE PARTNERING</p>
        <p className="text-xl">Emerging leaders in the software design and engineering space, OneSeven Tech and Series C CPaas company Nylas are partnering together to contribute to the future of custom-gen AI applications, where OneSeven Tech and Nylas join forces to revolutionize customer service and productivity. By blending cutting-edge technology with innovative solutions, this partnership is set to drive business growth and enhance user experiences like never before.</p>
        <p className="text-2xl">EMBEDED CONTEXTUAL EMAIL</p>

        <p className="text-4xl font-light uppercase">some of our portfolio</p>
        <p className="text-4xl font-medium uppercase">LET’S BUILD THE NEXT Big Thing</p>

        <p className=" font-bold">Packages</p>
        <p className=" font-light">Packages</p>


      </section>
    </>
  );
}
