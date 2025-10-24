import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, slug, imageUrl }) => {
    return (
        <div className="project-card">
            <Link href={`/work/${slug}`}>
                <img src={imageUrl} alt={title} className="project-image" />
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </Link>
        </div>
    );
};

export default ProjectCard;