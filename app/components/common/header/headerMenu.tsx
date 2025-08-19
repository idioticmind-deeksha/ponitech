'use client';

import HeaderLink from "./customLink";
import { useActiveSection } from './activeSectionHook';
import './header.scss';

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'features', label: 'Key Features' },
  { id: 'whitepaper', label: 'Whitepaper' },
  { id: 'tokenomics', label: 'Tokenomics' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'team', label: 'Team' },
  { id: 'faq', label: 'FAQ' },
];

const HeaderMenu = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const activeId = useActiveSection(menuItems.map(item => item.id));

  return (
    <ul className={`header_menu ${className}`}>
      {menuItems
      .filter(item => item.id !== 'home')
      .map(({ id, label }) => (
        <li key={id}>
          <HeaderLink
            href={`/#${id}`}
            isActive={activeId === id}
            onClick={onClick}
          >
            {label}
          </HeaderLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
