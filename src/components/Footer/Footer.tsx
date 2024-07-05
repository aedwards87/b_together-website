import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
// Imported Components
import Section from '../Section/Section';
// Imported Styles
import styles from './footer.module.css';
import Heading from '../Heading/Heading';
import {
  replaceAmpersandInArrayOfObjects,
  toLowerCaseAndHyphen,
} from '@/app/utils/helpers';
import Arrow from '@/app/assets/svg/Arrow';
import FooterNav from './FooterNav';
import Newsletter from '../Newsletter/Newsletter';

//
// 'Footer' Component
//
const Footer = async () => {
  const client = createClient();

  const { data: settings } = await client.getSingle('settings');
  const {
    data: {
      footerCompanyLinks,
      footerLegalLinks,
      footerSocialMedia,
      footerNewsletterLinks,
    },
  } = await client.getSingle('navigation');

  return (
    <Section as="footer">
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logoInnerContainer}>
            <Link href="/">
              <PrismicNextImage
                field={settings.companyLogo}
                className={styles.logo}
              />
            </Link>
            <div className={styles.socialMediaContainer}>
              {footerSocialMedia.map(({ link, name, image }) => (
                <PrismicNextLink field={link} key={name}>
                  <PrismicNextImage
                    field={image}
                    className={styles.socialMediaLogo}
                  />
                </PrismicNextLink>
              ))}
            </div>
          </div>
          <p className={styles.copyright}>
            © Intergenic Limited {new Date().getFullYear()}{' '}
            {/*settings.siteTitle */}
          </p>
        </div>

        <div className={styles.divider}></div>

        <nav
          role="navigation"
          aria-label="Secondary Navigation - Footer"
          className={styles.nav}
        >
          <ul className={styles.navContainer}>
            <li className={styles.navTitle}>Company</li>
            <FooterNav links={footerCompanyLinks} />
          </ul>
          <ul className={[styles.navContainer, styles.legal].join(' ')}>
            <li className={styles.navTitle}>Legal</li>
            <FooterNav links={footerLegalLinks} />
          </ul>
        </nav>

        <div className={styles.divider}></div>

        <Newsletter styles={styles} />
      </div>
    </Section>
  );
};

export default Footer;
