import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
// Imported Components
import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import CardCorner from '@/app/assets/svg/CardCorner';
import Arrow from '@/app/assets/svg/Arrow';
import Button from '@/components/Button/Button';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Timetable from '@/components/Timetable/Timetable';
// Imported Styles
import styles from './gridLayout.module.css';
import stylesIconWithText from './gridLayoutIconWithText.module.css';
import stylesBentoLayoutOne from './gridLayoutBentoOne.module.css';
import stylesTheBigOne from './gridLayoutTheBigOne.module.css';
// Import Helpers
import { uuid } from '@/app/utils/helpers';

//
//  Components for `RichText`
//
const cardComponents: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading as="h3" size="rg" className={styles.cardHeading}>
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => <p className={styles.cardBody}>{children}</p>,
};

//
//  Props for `GridLayout`.
//
export type GridLayoutProps = SliceComponentProps<Content.GridLayoutSlice>;

//
//  Component for "GridLayout" Slices.
//
const GridLayout = ({ slice }: GridLayoutProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <SectionHeader slice={slice}>
            <div className={styles.cardContainer}>
              {slice.items.map(
                ({
                  cardBody,
                  cardHeading,
                  cardImage,
                  cardLink,
                }: {
                  cardBody?: any;
                  cardHeading?: any;
                  cardImage?: any;
                  cardLink?: any;
                }) => {
                  const Comp = cardLink?.url ? PrismicNextLink : 'div';
                  return (
                    <Comp
                      key={uuid()}
                      field={cardLink?.url && cardLink}
                      className={styles.card}
                    >
                      <div className={styles.cardImageContainer}>
                        <PrismicNextImage
                          field={cardImage}
                          className={styles.cardImage}
                          loading="lazy"
                        />
                        {cardLink.url && (
                          <>
                            <CardCorner className={styles.cardSVG} />
                            <CardCorner
                              className={[
                                styles.cardSVG,
                                styles.cardSVGAnimate,
                              ].join(' ')}
                            />
                            <div className={styles.button}>
                              <Arrow />
                            </div>
                          </>
                        )}
                      </div>
                      <div className={styles.cardContentContainer}>
                        <PrismicRichText
                          field={cardHeading}
                          components={cardComponents}
                        />
                        <PrismicRichText
                          field={cardBody}
                          components={cardComponents}
                        />
                      </div>
                    </Comp>
                  );
                }
              )}
            </div>
          </SectionHeader>
        </Section>
      )}

      {slice.variation === 'iconWithText' && (
        <Section
          id={slice.primary?.heading
            .map((item) =>
              'text' in item && 'text' && item.text
                ? item.text.toLowerCase()
                : null
            )
            .join('-')}
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          bgColor={slice.primary.backgroundSpotColour ?? undefined}
        >
          <SectionHeader slice={slice}>
            <div className={stylesIconWithText.cardContainer}>
              {slice.items.map((item) => {
                return (
                  <div key={uuid()} className={stylesIconWithText.card}>
                    <div className={stylesIconWithText.cardIconContainer}>
                      <PrismicNextImage
                        field={item.cardIcon}
                        className={stylesIconWithText.cardIcon}
                        loading="lazy"
                      />
                    </div>
                    <div className={stylesIconWithText.cardContentContainer}>
                      <PrismicRichText
                        field={item.cardHeading}
                        components={cardComponents}
                      />
                      <PrismicRichText
                        field={item.cardBody}
                        components={cardComponents}
                      />
                    </div>
                    {item.cardButtonLabel && item.cardButtonLink && (
                      <Button field={item.cardButtonLink}>
                        {item.cardButtonLabel}
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </SectionHeader>
        </Section>
      )}

      {slice.variation === 'bentoLayoutOne' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <SectionHeader slice={slice}>
            <div className={stylesBentoLayoutOne.cardContainer}>
              {slice.items.map((item) => {
                return (
                  <div key={uuid()} className={stylesBentoLayoutOne.card}>
                    <div className={stylesBentoLayoutOne.cardImageContainer}>
                      <PrismicNextImage
                        field={item.cardImage}
                        className={stylesBentoLayoutOne.cardImage}
                        loading="lazy"
                      />
                    </div>
                    <div className={stylesBentoLayoutOne.cardContentContainer}>
                      <PrismicRichText
                        field={item.cardHeading}
                        components={cardComponents}
                      />
                      <PrismicRichText
                        field={item.cardBody}
                        components={cardComponents}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionHeader>
        </Section>
      )}

      {slice.variation === 'theBigOne' && (
        <Section
          id="classes"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <SectionHeader slice={slice}>
            <div className={stylesTheBigOne.container}>
              <div className={stylesTheBigOne.cardContainer}>
                {slice.items.map(
                  ({
                    classCardLink,
                    classCardImage,
                    classCardHeading,
                    classCardBody,
                  }: any) => {
                    const Comp = classCardLink?.url ? PrismicNextLink : 'div';
                    return (
                      <Comp
                        key={uuid()}
                        field={classCardLink}
                        className={stylesTheBigOne.card}
                      >
                        <div className={stylesTheBigOne.cardImageContainer}>
                          <PrismicNextImage
                            field={classCardImage}
                            className={stylesTheBigOne.cardImage}
                            loading="lazy"
                          />
                        </div>
                        <div className={stylesTheBigOne.cardContentContainer}>
                          <PrismicRichText
                            field={classCardHeading}
                            components={cardComponents}
                          />
                          <PrismicRichText
                            field={classCardBody}
                            components={cardComponents}
                          />
                        </div>
                        {classCardLink.url && (
                          <>
                            <CardCorner className={stylesTheBigOne.cardSVG} />
                            <CardCorner
                              className={[
                                stylesTheBigOne.cardSVG,
                                stylesTheBigOne.cardSVGAnimate,
                              ].join(' ')}
                            />
                            <div
                              className={[
                                stylesTheBigOne.button,
                                stylesTheBigOne.peach,
                              ].join(' ')}
                            >
                              <Arrow />
                            </div>
                          </>
                        )}
                      </Comp>
                    );
                  }
                )}
              </div>
              <Button field={slice.primary.ctaButtonLink} uppercase>
                {slice.primary.ctaButtonLabel}
              </Button>
              <Timetable
                slice={slice}
                component={cardComponents}
                styles={stylesTheBigOne}
              />
              {/* <div className={stylesTheBigOne.timetableContainer}>
                <div className={stylesTheBigOne.timetableContentContainer}>
                  <PrismicRichText
                    field={slice.primary.timetableHeading}
                    components={cardComponents}
                  />
                  <PrismicRichText
                    field={slice.primary.timetableBody}
                    components={cardComponents}
                  />
                </div>
                <div className={stylesTheBigOne.timetableButtonContainer}>
                  <Button
                    field={slice.primary.timetableJanuaryLink}
                    direction="down"
                    color="purple800"
                  >
                    January
                  </Button>
                  <Button
                    field={slice.primary.timetableFebruaryLink}
                    direction="down"
                    color="purple800"
                  >
                    February
                  </Button>
                  <Button
                    field={slice.primary.timetableFebruaryLink}
                    direction="down"
                    color="purple800"
                  >
                    March
                  </Button>
                </div>
              </div> */}
              <div className={stylesTheBigOne.yearlyScheduleContainer}>
                <div className={stylesTheBigOne.yearlyScheduleContentContainer}>
                  <PrismicRichText
                    field={slice.primary.yearlyScheduleHeading}
                    components={cardComponents}
                  />
                  <PrismicRichText
                    field={slice.primary.yearlyScheduleBody}
                    components={cardComponents}
                  />
                </div>
                <a
                  href={slice.primary.yearlyScheduleImage?.url ?? ''}
                  download={slice.primary.yearlyScheduleImage?.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={stylesTheBigOne.yearlyScheduleImageContainer}
                >
                  <PrismicNextImage
                    field={slice.primary.yearlyScheduleImage}
                    className={stylesTheBigOne.yearlyScheduleImage}
                  />
                  <CardCorner className={stylesTheBigOne.cardSVG} />
                  <CardCorner
                    className={[
                      stylesTheBigOne.cardSVG,
                      stylesTheBigOne.cardSVGAnimate,
                    ].join(' ')}
                  />
                  <div
                    className={[
                      stylesTheBigOne.button,
                      stylesTheBigOne.sage,
                    ].join(' ')}
                  >
                    <Arrow />
                  </div>
                </a>
              </div>
            </div>
          </SectionHeader>
        </Section>
      )}
    </>
  );
};

export default GridLayout;
