import { Link } from 'react-router-dom';
import Icon from './Icon';

export type Service = { icon: 'code' | 'layers' | 'palette' | 'server' | 'database' | 'bulb'; title: string; description: string };
export default function ServiceCard({ service }: { service: Service }) {
  return <article className="card service-card"><div className="service-icon"><Icon name={service.icon} size={26} /></div><h3>{service.title}</h3><p>{service.description}</p><Link to="/contact" className="read-more">Read more <Icon name="arrow" size={15} /></Link></article>;
}
