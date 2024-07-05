import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
// Imported Components
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Heading from '@/components/Heading/Heading';
// Imported Styles
import styles from './simpleText.module.css';

//
//  Props for `SimpleText`.
//
export type SimpleTextProps = SliceComponentProps<Content.SimpleTextSlice>;

//
//    Components for `RichText`
//
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className={styles.heading}>
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="rg" className={styles.heading}>
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="xs" className={styles.heading}>
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="xxs" className={styles.cardHeading}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className={styles.cardBody}>{children}</p>,
};

//
//
//   Component for "SimpleText" Slices.
//
//
const SimpleText = ({ slice }: SimpleTextProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <SectionHeader slice={slice} align="left" justify="center" /> */}
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.headingContainer}>
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
          </div>
          <div className={styles.bodyContainer}>
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SimpleText;
