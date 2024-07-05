import Section from '@/components/Section/Section';
import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

import styles from './imageDownload.module.css';
import Button from '@/components/Button/Button';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import Heading from '@/components/Heading/Heading';

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
/**
 * Props for `ImageDownload`.
 */
export type ImageDownloadProps =
  SliceComponentProps<Content.ImageDownloadSlice>;

/**
 * Component for "ImageDownload" Slices.
 */
const ImageDownload = ({ slice }: ImageDownloadProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
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
        <div className={styles.imageContainer}>
          <a
            href={slice.primary.image?.url ?? ''}
            download={slice.primary.image?.url}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.imageLink}
          >
            <PrismicNextImage
              field={slice.primary.image}
              className={styles.image}
            />
          </a>
          <Button
            field={slice.primary.buttonLink}
            className={styles.button}
            size="lg"
          >
            {slice.primary.buttonLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ImageDownload;
