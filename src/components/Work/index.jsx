import React from 'react'
import ProjectCard from './Projectcard';
import "./work.css"
import work from "../../assets/work.jpg"
import work2 from "../../assets/work2.jpg"
import work3 from "../../assets/work3.jpg"
import work4 from "../../assets/work4.jpg"
import work5 from "../../assets/work5.jpg"
import work6 from "../../assets/work6.jpg"
const Work = () => {
    const projects = [
        {
          title: 'Project 1',
          description: 'Description for Project 1.',
          imageUrl: work, 
          repoLink: 'https://github.com/tbloodmt/Challenge01',
          deployLink: 'https://tbloodmt.github.io/Challenge01/'
        },
        // Add more projects following the same structure
        {
          title: 'Project 2',
          description: 'Description for Project 2.',
          imageUrl: work2,
          repoLink: 'https://github.com/user/project-2',
          deployLink: 'https://deployed-app-link-2.com'
        },
        {
          title: 'Project 3',
          description: 'Description for Project 2.',
          imageUrl: work3,
          repoLink: 'https://github.com/user/project-2',
          deployLink: 'https://deployed-app-link-2.com'
        },
        {
          title: 'Project 4',
          description: 'Description for Project 2.',
          imageUrl: work4,
          repoLink: 'https://github.com/user/project-2',
          deployLink: 'https://deployed-app-link-2.com'
        },
        {
          title: 'Project 5',
          description: 'Description for Project 2.',
          imageUrl: work5,
          repoLink: 'https://github.com/user/project-2',
          deployLink: 'https://deployed-app-link-2.com'
        },
        {
          title: 'Project 6',
          description: 'Description for Project 2.',
          imageUrl: work6,
          repoLink: 'https://github.com/user/project-2',
          deployLink: 'https://deployed-app-link-2.com'
        },
      
        // Continue for all six projects
      ];
    
  return (
    <>
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    </>
  )
}

export default Work