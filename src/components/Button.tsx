import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

type Props = { children: ReactNode; to?: string; variant?: 'primary' | 'ghost'; external?: boolean };
export default function Button({ children, to = '#', variant = 'primary', external = false }: Props) { const content = <>{children}<Icon name={external ? 'external' : 'arrow'} size={16} /></>; return external ? <a className={`button ${variant}`} href={to} target="_blank" rel="noreferrer">{content}</a> : <Link className={`button ${variant}`} to={to}>{content}</Link>; }
