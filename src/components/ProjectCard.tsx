import Button from './Button';

export type Project = { title: string; description: string; techs: string[]; category: 'Web Development' | 'Full-Stack' | 'Frontend' | 'Backend'; image: string; imageAlt: string; demo?: string; repo?: string };
export default function ProjectCard({ project }: { project: Project }) {
  return <article className="card project-card"><div className="project-thumb"><span className="thumb-glow" /><img src={project.image} alt={project.imageAlt} loading="lazy" /></div><div className="project-body"><h3>{project.title}</h3><p>{project.description}</p><div className="techs">{project.techs.map(t => <span key={t}>{t}</span>)}</div><div className="project-actions">{project.repo && <Button to={project.repo} external variant="ghost">GitHub</Button>}{project.demo && <Button to={project.demo} external>View Project</Button>}</div></div></article>;
}
