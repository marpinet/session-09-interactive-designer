import React from 'react';
import { useRouter } from 'next/router';
import { projects } from '../data/projects';
import styles from '../styles/components.css';

const CaseStudy = () => {
    const router = useRouter();
    const { slug } = router.query;

    const project = projects.find((proj) => proj.slug === slug);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.caseStudy}>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <h2>Project Details</h2>
            <ul>
                {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <a href="/work">Back to Projects</a>
        </div>
    );
};

export default CaseStudy;