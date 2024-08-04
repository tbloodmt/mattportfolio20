import React from 'react';
import './work.css'; 

const ProjectCard = ({ title, description, imageUrl, repoLink, deployLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="links">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
          <a href={deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;