import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
// Imported Styles
import styles from './header.module.css';
// import { replaceAmpersandInArrayOfObjects } from '@/app/utils/helpers';
import Nav from '../Nav/Nav';
import MobileNav from '../Nav/MobileNav';

const Header = async () => {
  const client = createClient();
  const { data: settings } = await client.getSingle('settings');
  const {
    data: { links },
  } = await client.getSingle('navigation');

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <PrismicNextImage
            field={settings.companyLogo}
            className={styles.logo}
          />
        </Link>
        <Nav styles={styles} links={links} />
        <MobileNav styles={styles} links={links} />
      </div>
    </header>
  );
};

export default Header;
