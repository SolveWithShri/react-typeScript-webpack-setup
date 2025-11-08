import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const navActiveStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      textDecoration: isActive ? 'none' : 'underline',
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };

  return (
    <nav>
      <div>Way 1 - (Link)</div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/demo'>Demo</Link>
      <Link to='/products'>Products</Link>

      <hr />

      <div>Way 2 - (NavLink) - Active links </div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/demo'>Demo</NavLink>
      <NavLink to='/products'>Products</NavLink>

      <hr />

      <div>Way 3 - (navLinkStyles) - Active links </div>
      <NavLink style={navActiveStyles} to='/'>
        Home
      </NavLink>
      <NavLink style={navActiveStyles} to='/about'>
        About
      </NavLink>
      <NavLink style={navActiveStyles} to='/demo'>
        Demo
      </NavLink>
      <NavLink style={navActiveStyles} to='/products'>
        Products
      </NavLink>

      <hr />
    </nav>
  );
};
