import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="accent">
      <p>
        Back in 2016, I wrote my first program to breath life into an autonomous
        robot for my degree. Seeing the impact of those lines of code sparked my
        interest in software development, it was love at first sight. A few
        years later, credited with a Bachelors of Applied Science in Mechatronic
        Systems Engineering with a minor in AI, I was ready to take on the world
        of tech.
      </p>
      <br />
      <p>
        Today, I have the privilege of amassing a diverse software development
        journey, having completed software project life cycles for my{" "}
        <Link href={"https://www.sfu.ca/"}>
          <span className="clickable">school</span>
        </Link>
        , a{" "}
        <Link href={"https://www.ballard.com/"}>
          <span className="clickable">
            leading global provider of clean energy solutions
          </span>
        </Link>
        ,{" "}
        <Link href={"https://www.ballard.com/"}>
          <span className="clickable">a robotic start-up</span>
        </Link>
        , and a{" "}
        <Link href={"https://www.grainfox.ca/"}>
          <span className="clickable">
            data-driven farm wealth solutions platform
          </span>
        </Link>
        .
      </p>
      <br />
      <p>
        I take pride in building robust software that are both functional and
        aesthetic. In my free time, I enjoy automating the mundane things, and
        dabbling in new technology.
      </p>
      <br />
      <p>
        When I’m not tinkering away at my computer, you can find me fidgeting
        with{" "}
        <Link href={"#photography"}>
          <span className="clickable">photography</span>
        </Link>
        , exploring the mountains, riding through the twisties, or mastering the
        ukulele.
      </p>
    </div>
  );
};

export default About;
