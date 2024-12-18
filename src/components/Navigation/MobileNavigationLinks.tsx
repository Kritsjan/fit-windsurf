import React from 'react';
import { Activity, Heart, Scale, Target, BookOpen } from 'lucide-react';
import MobileNavLink from './MobileNavLink';

interface MobileNavigationLinksProps {
  onLinkClick: () => void;
}

const MobileNavigationLinks: React.FC<MobileNavigationLinksProps> = ({ onLinkClick }) => {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      <MobileNavLink to="/category/track-macros" icon={Activity} onClick={onLinkClick}>
        Track Macros
      </MobileNavLink>
      <MobileNavLink to="/category/body-composition" icon={Scale} onClick={onLinkClick}>
        Body Composition
      </MobileNavLink>
      <MobileNavLink to="/category/heart-health" icon={Heart} onClick={onLinkClick}>
        Heart Health
      </MobileNavLink>
      <MobileNavLink to="/category/ideal-weight" icon={Target} onClick={onLinkClick}>
        Find Ideal Weight
      </MobileNavLink>
      <MobileNavLink to="/blog" icon={BookOpen} onClick={onLinkClick}>
        Blog
      </MobileNavLink>
      <MobileNavLink to="/about" onClick={onLinkClick}>
        About
      </MobileNavLink>
    </div>
  );
};

export default MobileNavigationLinks;