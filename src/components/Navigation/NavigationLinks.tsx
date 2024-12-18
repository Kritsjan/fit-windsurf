import React from 'react';
import { Activity, Heart, Scale, Target, BookOpen } from 'lucide-react';
import NavLink from './NavLink';

const NavigationLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLink to="/category/track-macros" icon={Activity}>
        Track Macros
      </NavLink>
      <NavLink to="/category/body-composition" icon={Scale}>
        Body Composition
      </NavLink>
      <NavLink to="/category/heart-health" icon={Heart}>
        Heart Health
      </NavLink>
      <NavLink to="/category/ideal-weight" icon={Target}>
        Find Ideal Weight
      </NavLink>
      <NavLink to="/blog" icon={BookOpen}>
        Blog
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </div>
  );
};

export default NavigationLinks;