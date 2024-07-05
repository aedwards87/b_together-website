import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
// Imported Components
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import { PrismicNextImage } from '@prismicio/next';
// Imported Styles
import styles from './banner.module.css';
import stylesFeature from './bannerFeature.module.css';
// Imported helpers
import { uuid } from '@/app/utils/helpers';

//
//    Components for `RichText`
//
const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" color="white" className={styles.heading}>
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="xs" color="white" className={styles.heading}>
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => <p className={styles.body}>{children}</p>,
};

const featureComponents: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading as="h3" size="xs" color="white" className={stylesFeature.heading}>
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => <p className={stylesFeature.body}>{children}</p>,
};

//
//    Props for `Banner`
//
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

//
//    Component for "Banner" Slices
//
const Banner = ({ slice }: BannerProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (
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
            <div className={styles.bodyContainer}>
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
            </div>
            <Button
              field={slice.primary.buttonLink}
              type="secondary"
              color="var(--colorWhite)"
              size="lg"
            >
              {slice.primary.buttonText}
            </Button>
            <PrismicNextImage
              field={slice.primary.illustrationOne}
              className={[styles.illustrationOne, styles.illustration].join(
                ' '
              )}
              priority
            />
            <PrismicNextImage
              field={slice.primary.illustrationTwo}
              className={[styles.illustrationTwo, styles.illustration].join(
                ' '
              )}
              priority
            />
          </div>
        </Section>
      )}

      {slice.variation === 'feature' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className={stylesFeature.container}>
            {slice.items.map(({ heading, body, image }) => {
              return (
                <div key={uuid()} className={stylesFeature.innerContainer}>
                  <PrismicNextImage
                    field={image}
                    className={stylesFeature.image}
                  />
                  <PrismicRichText
                    field={heading}
                    components={featureComponents}
                  />
                  <PrismicRichText
                    field={body}
                    components={featureComponents}
                  />
                </div>
              );
            })}
          </div>
        </Section>
      )}
    </>
  );
};

export default Banner;
