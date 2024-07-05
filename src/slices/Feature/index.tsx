import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
// Imported Components
import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
// Imported Styles
import styles from './feature.module.css';
import { PrismicNextImage } from '@prismicio/next';

//
//    Components for `RichText`
//
const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className={styles.heading}>
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => <p className={styles.body}>{children}</p>,
};

//
//  Props for `Feature`.
//
export type FeatureProps = SliceComponentProps<Content.FeatureSlice>;

//
//  Component for "Feature" Slices.
//
const Feature = ({ slice }: FeatureProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
        </div>
        <PrismicNextImage
          field={slice.primary.illustration}
          className={styles.illustration}
        />
        <div className={styles.innerContainer}>
          <div className={styles.gridContainerOne}>
            <div className={styles.bodyContainer}>
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
            </div>
            <div className={styles.imageOneContainer}>
              <PrismicNextImage
                field={slice.primary.imageOne}
                className={styles.imageOne}
              />
            </div>
          </div>

          <div className={styles.gridContainerTwo}>
            <div className={styles.imageTwoContainer}>
              <PrismicNextImage
                field={slice.primary.imageTwo}
                className={styles.imageTwo}
              />
            </div>
            <div className={styles.subheadingContainer}>
              <PrismicRichText
                field={slice.primary.subheading}
                components={components}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Feature;
