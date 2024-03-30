import React from "react";
import Marquee from "react-fast-marquee";

export default function BreakingNews() {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true}>
        The match was also witness to a bizarre incident as Bangladesh went for
        a DRS against Sri Lanka's Kusal Mendis, though he had came forward to
        defend the ball against Taijul Islam
      </Marquee>
    </div>
  );
}
