import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8">Welcome to My Portfolio</h1>
        <p className="mb-8">
          I am Mariana Andrade, founder and creative director of Marabunta Creative Agency. 
          As an Interactive Designer, I specialize in creating engaging and user-friendly digital experiences.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;