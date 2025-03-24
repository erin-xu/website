import React from "react";
import "../styles/Project.scss";
import folder from '../icons/folder.svg';
import github from '../icons/github.svg';
// Our pipeline involves passing text through LLaMA2 to identify entities (nodes) and relationships (edges), then applying an unsupervised graph clustering algorithm to group closely related entities into neighborhoods. When a query is submitted, we compare it against these neighborhoods, entities, and relationships, retrieving data from those that rank the highest in relevance.

const projects = [
  {
    title: "graph rag",
    organization: "Group Project",
    date: "Aug 2024 - Dec 2024",
    description:
      "A simplified Graph RAG pipeline that uses LLaMA3.1 to extract globally relevant entities/relationships, allowing for more accurate query responses.",
    tech: ["Python", "LLaMA3.1", "Streamlit"],
    repoLink: "https://github.com/erin-xu/graph-rag",
  },
  {
    title: "queue me in",
    organization: "Cornell DTI | Contributor",
    date: "Oct 2021 - Dec 2023",
    description:
      "A web app implementing a queueing system to facilitate Cornell office hours. Students can post questions, TAs can assign themselves to questions, and more.",
    tech: ["React", "Firebase", "Typescript", "HTML/CSS"],
    repoLink: "https://github.com/cornell-dti/office-hours",
  },
  {
    title: "score!",
    organization: "Best Overall @ Cornell Hack Challenge",
    date: "Dec 2021",
    description:
      "An iOS app for Cornell students to keep track of Cornell Sporting events. Easily filter through upcoming events. View team schedules and past results.",
    tech: ["Swift", "SQL"],
    repoLink: "https://github.com/erin-xu/sports-tracker",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>/ projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => window.open(project.repoLink, "_blank")}>
            <div className="card-header">
              <img className="folder" src={folder} alt="Folder icon" />
              <button
                className="icon-button"
                onClick={() => window.open(project.repoLink, "_blank")}
              >
                <img src={github} alt="Github icon" />
              </button>
            </div>
            <h3>{project.title}</h3>
            <p className="organization">{project.organization}</p>
            <p className="date">{project.date}</p>
            <p className="description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="view-container">
        <button
          className="view-more"
          onClick={() => window.open("https://github.com/erin-xu?tab=repositories", "_blank")}
        >
          view more &gt;&gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;
