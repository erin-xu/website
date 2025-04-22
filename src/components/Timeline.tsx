import React, { useState } from "react";
import "../styles/Timeline.scss";

interface Experience {
  company: string;
  position: string;
  duration: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    company: "TeaCup",
    position: "Software Development Intern",
    duration: "Dec 2021 - Jan 2022",
    details: [
      "Programmed in **Swift** to create the initial iteration of a community-building social media app targeting the elderly population",
      "Integrated Agora SDK to create real-time video calling functionality and **Firebase** to allow for user login and authentication",
      "Conducted market research and user surveys, using findings to make **product design** decisions for an early-stage startup",
    ],
  },
  {
    company: "Cirrus Logic",
    position: "Software Development Engineer Intern",
    duration: "May 2022 - Aug 2022",
    details: [
      "Automated workflow of importing chip requirements into a requirement management system by creating a checker workflow",
      "Leveraged **Python** to implement a multilayer comparison algorithm performing complex HTML processing",
      "Exceeded project expectations by reducing deltas by 89% and runtime by 86%, **shortening the import process from hours to minutes**"
    ],
  },
  {
    company: "Hudson River Trading",
    position: "Trading Technology Intern",
    duration: "Jan 2023 - Jan 2023",
    details: [
      "Programmed in **C++** to implement an order book and matching engine to execute trades on the BATS Exchange",
      "Conducted **signal research**, constructed a trading strategy, and tested using previous market data and through live trading",
    ],
  },

  {
    company: "Arcesium",
    position: "Software Engineer Intern",
    duration: "May 2023 - Aug 2023",
    details: [
      "Leveraged **Python, Kotlin, SQL** to **bootstrap clients onto a new PNL pipeline**, backpopulating the necessary dependencies",
      "Implemented the **backend logic** to maintain a consolidated audit trail for admin action APIs in the PNL pipeline data flow",
      "Programmed Kotlin library used by many company apps to automate the process of setting up API calls on the frontend",
    ],
  },
  {
    company: "Datadog",
    position: "Software Engineer Intern",
    duration: "Jan 2024 - Apr 2024",
    details: [
      "Completed **concurrency optimization** of data intake service in **Golang**; conducted **load tests** to portray results and tune configurations",
      "Identified vulnerabilities, initiated conversations, and implemented changes to improve **fault tolerance** of existing services",
      "Designed and implemented **authorization** for internal API, communicating with other teams to determine best interface",
    ],
  },
  {
    company: "Hudson River Trading ",
    position: "Core Developer Intern",
    duration: "May 2024 - Aug 2024",
    details: [
      "Developed new tooling in asynchronous **Python** to support end-to-end testing of over-the-counter trading workflows",
      "Leveraged **C++** to write a daemon to better book manual trades, implementing **disaster recovery** and **external state-tracking**",
      "Designed and implemented a tool providing ergonomics around configuring custom data streams to run simulations on",
    ],
  },
];

const highlightImportant = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/); // Splits on **word**
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="highlight">
          {part.replace(/\*\*/g, "")}
        </span>
      );
    }
    return part;
  });
};

const Timeline: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[5]);

  return (
    <div className="experience">
      <h2>/ work-experience</h2>
      <div className="timeline-container">
        <div className="timeline-left">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item ${selectedExperience.company === exp.company ? "active" : ""
                  }`}
                onClick={() => setSelectedExperience(exp)}
              >
                {/* {exp.company} */}
                <span className="timeline-text">{exp.company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-right">
          <div className="panel">
            <div className="title">
              <h3>{selectedExperience.company}</h3>
              <p className="duration">{selectedExperience.duration}</p>
            </div>
            <p className="position">{selectedExperience.position}</p>
            <ul>
              {selectedExperience.details.map((detail, i) => (
                <li key={i}>{highlightImportant(detail)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;