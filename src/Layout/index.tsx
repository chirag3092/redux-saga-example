import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="App">
    <header className="App-header">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/to-do">To Do</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
