'use client';

import { Widget } from '@typeform/embed-react';
// Imported components
import Section from '@/components/Section/Section';
// Imported styles
import styles from './page.module.css';

//
// Page for "Enquire Form"
//
const Enquire = () => {
  const formId = 'mqi7UQnW';

  return (
    <Section width="full">
      <div className={styles.enquireFormContainer}>
        <Widget id={formId} className={styles.enquireForm} />
      </div>
    </Section>
  );
};

export default Enquire;
