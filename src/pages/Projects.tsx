import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../components/ProjectCard';

const projects: Project[] = [
  { title: 'HerDaily', description: 'A full-stack personal productivity and wellness application designed to help users organize their daily lives through task management, calendars, habits, journaling, water tracking, and period tracking.', techs: ['React', 'Django', 'JavaScript', 'SQLite'], category: 'Full-Stack', image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', imageAlt: 'Developer coding a productivity app on dual monitors', repo: 'https://github.com/itzshirley' },
  { title: 'TeamIt', description: 'A web-based project management tool for individual and team work, helping users organize tasks, track progress, and collaborate effectively.', techs: ['PHP', 'MySQL', 'HTML', 'CSS'], category: 'Web Development', image: 'https://images.pexels.com/photos/7988674/pexels-photo-7988674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', imageAlt: 'Team collaborating on a project with laptops', repo: 'https://github.com/itzshirley' },
  { title: 'Share-Your-Dish', description: 'A web application for cooking enthusiasts to share and explore recipes. Users can sign up, log in, add recipes with images, and browse community recipes categorized into Breakfast, Lunch, Dinner, Snacks, Drinks, Desserts, and Vegan.', techs: ['PHP', 'MySQL', 'HTML', 'CSS'], category: 'Web Development', image: 'https://images.pexels.com/photos/5514815/pexels-photo-5514815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', imageAlt: 'Colorful healthy food bowls with fresh vegetables', demo: 'https://share-your-dish.vercel.app/', repo: 'https://github.com/itzshirley' },
  { title: 'Personal Portfolio', description: 'A modern responsive developer portfolio showcasing my skills, services, projects, and contact information.', techs: ['React', 'TypeScript', 'CSS'], category: 'Frontend', image: 'https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', imageAlt: 'Code on a laptop screen with blue lighting', repo: 'https://github.com/itzshirley' },
];

const filters = ['All', 'Web Development', 'Full-Stack', 'Frontend', 'Backend'] as const;

export default function Projects() {
  const [active, setActive] = useState<typeof filters[number]>('All');
  const shown = active === 'All' ? projects : projects.filter(p => p.category === active);
  return <div className="page"><div className="container fade-up"><span className="eyebrow">My Projects</span><h1>Some of My Recent Work</h1><p className="lead">A selection of projects I've built — each one solving a real problem with thoughtful design and solid engineering.</p></div><div className="container filters fade-up">{filters.map(f => <button key={f} className={active === f ? 'chip active' : 'chip'} onClick={() => setActive(f)}>{f}</button>)}</div><section className="container projects-grid fade-up">{shown.map(p => <ProjectCard key={p.title} project={p} />)}</section></div>;
}
