import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon: Icon, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center space-x-1 hover:text-cyan-100"
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </Link>
  );
};

export default NavLink;