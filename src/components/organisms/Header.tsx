import Logo from '@atoms/Logo';
import NavItem from '@molecules/NavItem';
import Dropdown from '@molecules/Dropdown';

const Header = () => (
  <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
    <Logo />
    <nav className="flex space-x-4">
      <NavItem label="Inicio" href="#" />
      <NavItem label="Nosotros" href="#" />
      <Dropdown />
      <NavItem label="Contacto" href="#" />
    </nav>
  </header>
);

export default Header;
