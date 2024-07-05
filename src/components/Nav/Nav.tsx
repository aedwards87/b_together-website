'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { PrismicNextLink } from '@prismicio/next';
// Imported Components
import DropdownMenu from '../DropdownMenu/DropdownMenu';
// Imported Styles
import styles from './nav.module.css';
// Imported Utils
import { replaceAmpersandInArrayOfObjects } from '@/app/utils/helpers';

//
// Nav Component
//
const Nav = ({ links }: any) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname.slice(1);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Primary Navigation"
      className={styles.container}
    >
      <ul className={styles.listContainer}>
        {links.map(({ link, label }: any) => {
          const newLink = replaceAmpersandInArrayOfObjects([link], 'url'); // prettier-ignore
          const check = label.includes('Enquire');
          return (
            <li
              key={label}
              className={styles.list}
              {...(check && { onMouseEnter: handleMouseEnter })}
              {...(check && { onMouseLeave: handleMouseLeave })}
            >
              <PrismicNextLink
                field={newLink}
                className={[
                  styles.link,
                  isActive(newLink.url) && styles.active,
                ].join(' ')}
              >
                {label}
              </PrismicNextLink>
              {check && isDropdownVisible && <DropdownMenu />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
