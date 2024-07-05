'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './mobileNav.module.css';
import { replaceAmpersandInArrayOfObjects } from '@/app/utils/helpers';
import { PrismicNextLink } from '@prismicio/next';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Arrow from '@/app/assets/svg/Arrow';

const MobileNav = ({ links }: any) => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    setNavVisible((prevCheck) => !prevCheck);
  };
  const handleMouseLeave = () => {
    setNavVisible(true);
    setDropdownVisible(false);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as Node)
      ) {
        // alert('Outside Clicked.');
        // console.log('Outside Clicked. ');
        setDropdownVisible(false);
        setNavVisible(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  return (
    <nav className={styles.container} aria-label="Primary Navigation" ref={ref}>
      <div
        className={styles.menuButton}
        title="Open mobile navigation"
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          className={styles.burgerMenu}
          width="16"
          height="10"
          viewBox="0 0 16 10"
        >
          <title>Open mobile navigation</title>
          <g fill="var(--colorPrimary100)" fillRule="evenodd">
            <rect y="8" width="16" height="2" rx="1"></rect>
            <rect y="4" width="16" height="2" rx="1"></rect>
            <rect width="16" height="2" rx="1"></rect>
          </g>
        </svg>
      </div>
      {isNavVisible && (
        <ul className={styles.menuContainer}>
          {links.map(({ link, label }: any) => {
            const newLink = replaceAmpersandInArrayOfObjects([link], 'url'); // prettier-ignore
            const check = label.includes('Enquire');
            // console.log('check', check);
            return (
              <li
                key={label}
                className={styles.menuLists}
                {...(check && { onMouseEnter: handleMouseEnter })}
                {...(check && { onMouseLeave: handleMouseLeave })}
              >
                {check ? (
                  <div className={styles.link}>
                    <Arrow />
                    {label}
                  </div>
                ) : (
                  <PrismicNextLink
                    field={newLink}
                    className={styles.link}
                    onClick={handleClick}
                  >
                    {label}
                  </PrismicNextLink>
                )}
                {check && isDropdownVisible && <DropdownMenu mobile />}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
