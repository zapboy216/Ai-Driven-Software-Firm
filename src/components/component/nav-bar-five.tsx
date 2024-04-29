// Navbar.tsx

// Indicating this as a client component if it uses client-specific hooks
import styled from '@emotion/styled';
import Link from 'next/link';

export const config = { runtime: 'client' };

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled.a`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Comfortaa', cursive;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link href="/" passHref>
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/about" passHref>
        <NavLink>About</NavLink>
      </Link>
      <Link href="/signin" passHref>
        <NavLink>Sign In</NavLink>
      </Link>
      <Link href="/signup" passHref>
        <NavLink>Sign Up</NavLink>
      </Link>
      <Link href="?lang=en" passHref>
        <NavLink>EN</NavLink>
      </Link>
      <Link href="?lang=fr" passHref>
        <NavLink>FR</NavLink>
      </Link>
    </Nav>
  );
};

export default Navbar;
