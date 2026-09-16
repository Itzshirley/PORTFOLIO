import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const links = [['/', 'Home'], ['/about', 'About Me'], ['/services', 'My Services'], ['/projects', 'My Projects'], ['/contact', 'Contact']];
export default function Navbar() { const [open, setOpen] = useState(false); return <header className="site-header"><div className="container nav-wrap"><NavLink to="/" className="logo" onClick={() => setOpen(false)}>Shirley<span>.</span></NavLink><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav><NavLink className="nav-cta" to="/contact">Let's talk <Icon name="arrow" size={16} /></NavLink></div></header>; }
