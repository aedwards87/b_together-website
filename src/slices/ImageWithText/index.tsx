import Section from '@/components/Section/Section';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
// Imported Components
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
// Imported Styles
import styles from './imageWithText.module.css';

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
 * Props for `ImageWithText`.
 */
export type ImageWithTextProps =
  SliceComponentProps<Content.ImageWithTextSlice>;

/**
 * Component for "ImageWithText" Slices.
 */
const ImageWithText = ({ slice }: ImageWithTextProps): JSX.Element => {
  let bgColor;
  if (slice.variation === 'imageLeftWithBackground') {
    if (slice.primary?.backgroundColourBlue) {
      bgColor = 'blue';
    } else if (slice.primary?.backgroundColourPurple) {
      bgColor = 'purple';
    } else {
      bgColor = 'orange';
    }
  }
  if (slice.variation === 'imageLeftWithBackground') {
    if (slice.primary?.backgroundColour === 'Sage') {
      bgColor = 'Sage';
    }
  }

  return (
    <>
      {slice.variation === 'default' && (
        <Section
          id={slice.primary.sectionReferenceId}
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          overflow
        >
          <div className={[styles.container, styles.left].join(' ')}>
            <div className={styles.imageContainer}>
              <PrismicNextImage
                field={slice.primary.image}
                className={styles.image}
              />
            </div>
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
              <div className={styles.buttonContainer}>
                {slice.items.map(
                  ({ buttonLink, buttonLabel }, i) =>
                    buttonLink && (
                      <Button
                        key={buttonLabel}
                        field={buttonLink}
                        size="lg"
                        {...(i > 0 && { type: 'secondary' })}
                        {...(i > 0 && { color: 'orange' })}
                      >
                        {buttonLabel}
                      </Button>
                    )
                )}
              </div>
            </div>
          </div>
        </Section>
      )}

      {slice.variation === 'imageRight' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          overflow
        >
          <div className={[styles.container, styles.right].join(' ')}>
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
              {slice.items.map(
                ({ buttonLink, buttonLabel }) =>
                  buttonLink && (
                    <Button key={buttonLabel} field={buttonLink} size="lg">
                      {buttonLabel}
                    </Button>
                  )
              )}
            </div>
            <div className={styles.imageContainer}>
              <PrismicNextImage
                field={slice.primary.image}
                className={styles.image}
              />
            </div>
          </div>
        </Section>
      )}

      {slice.variation === 'imageLeftWithBackground' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          bgColor={bgColor}
        >
          <div className={[styles.container, styles.left].join(' ')}>
            <div className={styles.imageContainer}>
              <PrismicNextImage
                field={slice.primary.image}
                className={styles.image}
              />
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.headingContainer}>
                <PrismicRichText
                  field={slice.primary.heading}
                  components={components}
                  // components={{
                  //   heading2: ({ children }) => (
                  //     <Heading
                  //       as="h2"
                  //       size="lg"
                  //       color="white"
                  //       className={styles.heading}
                  //     >
                  //       {children}
                  //     </Heading>
                  //   ),
                  // }}
                />
              </div>
              <div className={styles.bodyContainer}>
                <PrismicRichText
                  field={slice.primary.body}
                  components={components}
                />
              </div>
              {slice.items.map(
                ({ buttonLink, buttonLabel }) =>
                  buttonLink && (
                    <Button key={buttonLabel} field={buttonLink} size="lg">
                      {buttonLabel}
                    </Button>
                  )
              )}
            </div>
          </div>
        </Section>
      )}

      {slice.variation === 'imageRightLarge' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          bgColor={slice.primary.backgroundColour}
        >
          <div className={[styles.container, styles.largeImage].join(' ')}>
            <div className={styles.innerContainer}>
              <PrismicNextImage
                field={slice.primary.illustration}
                className={styles.illustration}
              />
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
                <Button
                  key={slice.primary.buttonLabel}
                  field={slice.primary.buttonLink}
                  size="lg"
                >
                  {slice.primary.buttonLabel}
                </Button>
              </div>
            </div>

            {slice.items.map(
              ({ image }) =>
                image && (
                  <PrismicNextImage
                    key={image.id}
                    field={image}
                    className={styles.imageLarge}
                  />
                )
            )}
          </div>
        </Section>
      )}
    </>
  );
};

export default ImageWithText;
