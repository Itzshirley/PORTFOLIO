import ServiceCard from '../components/ServiceCard';
import type { Service } from '../components/ServiceCard';

const services: Service[] = [
  { icon: 'code', title: 'Web Development', description: 'Building responsive, modern, and user-friendly websites and web applications.' },
  { icon: 'layers', title: 'Full-Stack Development', description: 'Developing complete web applications across frontend, backend, APIs, and databases.' },
  { icon: 'palette', title: 'UI/UX Development', description: 'Creating clean, intuitive, and engaging user interfaces focused on usability.' },
  { icon: 'server', title: 'Backend Development', description: 'Building reliable backend systems, APIs, authentication, and database-driven applications.' },
  { icon: 'database', title: 'Database Development', description: 'Designing and managing structured databases for secure and efficient applications.' },
  { icon: 'bulb', title: 'Software Solutions', description: 'Turning real-world problems into practical software solutions tailored to specific needs.' },
];

export default function Services() {
  return <div className="page"><div className="container fade-up"><span className="eyebrow">My Services</span><h1>What I Can Do For You</h1><p className="lead">From frontend interfaces to full-stack systems, here's how I can help bring your idea to life.</p></div><section className="container services-grid fade-up">{services.map(s => <ServiceCard key={s.title} service={s} />)}</section></div>;
}
