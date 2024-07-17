import React from "react";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
// TODO is this import required?
// import resume from "@/public/Michael Huang Resume.pdf";
const experiences = [
  {
    title: "Full Stack Engineer",
    company: "GrainFox",
    companyLink: "https://grainfox.ca/",
    date: "Oct 2022 - Jan 2024",
    description:
      "Built and maintained data-driven features serving \
       5000+ organizations in the agricultural industry, \
      including an AI-driven recommendation feature that \
      increased user engagement by streamlining the content \
      exploration process.",
    tags: [
      "JavaScript",
      "Python",
      "Vue.js",
      "Django",
      "HTML & CSS",
      "Salesforce",
    ],
  },
  {
    title: "Robotic Developer",
    company: "MapaRobo",
    companyLink: "https://maparobo.com",
    date: "Oct 2021 - Mar 2022",
    description:
      "Spearheaded the design and implementation of a cross platform mobile app \
    that enabled users to monitor and control their robots remotely. \
    Worked closely with Product Managers, developers, and engineers \
    to refine project requirements.",
    tags: ["JavaScript", "Python", "React Native", "HTML & CSS", "ROS"],
  },
  {
    title: "Control Engineer Co-op",
    company: "Ballard Power Systems",
    companyLink: "https://www.ballard.com/",
    date: "Jan 2020 - Aug 2020",
    description:
      "Implemented and maintained data acquisition and control \
    systems software for fuel cell testing. Developed an aggregate plant consumption \
    template that automated the data reporting process.",
    tags: ["LabVIEW", "SCADA", "Industrial Automation", "Beckhoff", "Excel"],
  },
  {
    title: "Robotic Instructor",
    company: "Surrey Schools",
    companyLink:
      "https://www.sfu.ca/fas/news-and-outreach/years/2013/sticks-and-stars.html",
    date: "Summer 2016, 2017",
    description:
      "Instructed cohorts of 25+ students in \
    robotic design, implementaion, and programming. \
    Led multiple teams through the project life cycle \
    to build and program autonomous robots.",
    tags: ["RobotC", "Teaching", "Project Management"],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="grid gap-8">
      {experiences.map((experience, index) => (
        <div key={experience.title}>
          <div>
            <p className="date">{experience.date}</p>
            <span>
              {experience.companyLink ? (
                <Link
                  href={experience.companyLink}
                  className="flex items-center gap-1"
                >
                  <h2>{experience.company}</h2> <AiOutlineLink />
                </Link>
              ) : (
                <h2>{experience.company}</h2>
              )}
            </span>
          </div>
          <h3>{experience.title}</h3>
          <p className="description">{experience.description}</p>
          {experience.tags && experience.tags.length > 0 && (
            <div>
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-white rounded-3xl px-2 py-1 mr-2 mb-2 inline-block"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* TODO implement resume opening logic */}
      {/* <div className="pt-4">
        <Link href="/Michael Huang Resume.pdf">
          <p>See my full resume</p>
        </Link>
      </div> */}
    </div>
  );
};

export default Experience;
