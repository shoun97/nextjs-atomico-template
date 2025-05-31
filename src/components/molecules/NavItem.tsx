import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => (
  <Link href={href} className="text-gray-700 hover:text-blue-600 px-3 py-2">
    {label}
  </Link>
);

export default NavItem;
