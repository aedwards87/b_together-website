// Imported components
import Section from '@/components/Section/Section';
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm';
import Heading from '@/components/Heading/Heading';
// Imported styles
import styles from './page.module.css';
import StickPeepFamily from '../assets/svg/StickPeepFamily';

//
//
// Page for "Enquire Form"
//
//
const membershipEnquire = () => {
  return (
    <Section
      hero
      width="full"
      bgImage="url('https://images.prismic.io/b-together-website/ZfFcxkmNsf2sHiYq_background-gradient-mesh-001.jpg?auto=format,compress')"
    >
      <div className={styles.container}>
        <div className={styles.sidePanel} role="presentation">
          <StickPeepFamily className={styles.stickPeepFamilySVG} />
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>
            <Heading as="h1" size="xl">
              Get in Touch.
            </Heading>
          </div>
          <EnquiryForm category="membership" />
        </div>
      </div>
    </Section>
  );
};

export default membershipEnquire;
