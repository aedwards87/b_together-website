import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import styles from '@/app/styles/not-found.module.css';
import Button from '@/components/Button/Button';

export default function Custom404() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Heading as="h1" size="xl" className={styles.heading}>
            Oops!
            <span>It seems you&apos;ve wandered off the beaten path.</span>
          </Heading>
          <p className={styles.body}>Let&apos;s get you back on track.</p>
          <Button direction="left" href="/">
            Back to home
          </Button>
        </div>
      </div>
    </Section>
  );
}
