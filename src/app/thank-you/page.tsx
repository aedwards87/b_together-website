// Imported components
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import StickPeepFamily from '../assets/svg/StickPeepFamily';
import Tick from '../assets/svg/Tick';
// Imported styles
import styles from './page.module.css';

//
//
// Page for "Thank you"
//
//
const thankYou = () => {
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
          <Tick className={styles.tick} />
          <div className={styles.headingContainer}>
            <Heading as="h1" size="xl">
              Thank you
            </Heading>
          </div>
          <div className={styles.thankYouContainer}>
            <p>
              Your enquiry has been submitted successfully. We will be in touch
              soon.
            </p>
            <Button href="/" direction="left">
              Back to home
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default thankYou;
