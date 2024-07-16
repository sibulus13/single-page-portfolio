import React from "react";
import { AiOutlineLink } from "react-icons/ai";

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
    // companyLink: "https://maparobo.com",
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
    <div>
      {experiences.map((experience, index) => (
        <div key={experience.title} className="pt-6">
          <div>
            <p>{experience.date}</p>
            <span>
              {experience.companyLink ? (
                <a
                  href={experience.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {experience.company} <AiOutlineLink />
                </a>
              ) : (
                <span>{experience.company}</span>
              )}
            </span>
          </div>
          <p>{experience.title}</p>
          <p>{experience.description}</p>
          {experience.tags && experience.tags.length > 0 && (
            <div className="pt-2 text-xs">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid white",
                    padding: "2px 5px",
                    marginRight: "5px",
                    display: "inline-block",
                    marginBottom: "5px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
