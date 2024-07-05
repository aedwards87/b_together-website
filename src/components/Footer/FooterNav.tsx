'use client';

import { PrismicNextLink } from '@prismicio/next';
import { usePathname } from 'next/navigation';
// Imported Styles
import styles from './footer.module.css';
// Imported Helpers
import { replaceAmpersandInArrayOfObjects } from '@/app/utils/helpers';

//
// 'FooterNav' Component
//
const FooterNav = ({ links }: any) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname.slice(1);

  return (
    <>
      {links.map(({ link, label }: { link: string; label: string }) => {
        const newLink = replaceAmpersandInArrayOfObjects([link], 'url'); // prettier-ignore

        return (
          <li key={label} className={styles.navLinks}>
            <PrismicNextLink
              field={newLink}
              // className={`${styles.link} ${isActive(newLink.url) && styles.active}`}
              {...(isActive(newLink.url) && { className: styles.active })}
            >
              {label}
            </PrismicNextLink>
          </li>
        );
      })}
    </>
  );
};

export default FooterNav;
