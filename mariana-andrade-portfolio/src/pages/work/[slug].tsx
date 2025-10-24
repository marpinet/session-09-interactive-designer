import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CaseStudy from '../../components/CaseStudy';
import { projects } from '../../data/projects';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find((proj) => proj.slug === slug);
      setProject(foundProject);
    }
  }, [slug]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CaseStudy project={project} />
    </div>
  );
};

export default ProjectPage;