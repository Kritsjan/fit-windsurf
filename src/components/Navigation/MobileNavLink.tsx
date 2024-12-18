import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface MobileNavLinkProps {
  to: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, icon: Icon, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded-md text-white hover:bg-cyan-700"
    >
      <div className="flex items-center space-x-2">
        {Icon && <Icon className="w-4 h-4" />}
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default MobileNavLink;