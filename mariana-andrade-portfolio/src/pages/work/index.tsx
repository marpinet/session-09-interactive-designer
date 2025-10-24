import React from 'react';
import { useRouter } from 'next/router';
import projects from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

const WorkPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>My Work</h1>
      <p>Here are some of the projects I've worked on as a founder and creative director at Marabunta Creative Agency.</p>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            onClick={() => router.push(`/work/${project.slug}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;