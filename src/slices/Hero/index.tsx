'use client';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
// Imported Components
import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
// Imported Styles
import stylesStacked from './heroStacked.module.css';
import stylesBento from './heroBento.module.css';
import stylesLayered from './heroLayered.module.css';
import stylesAccordion from './heroAccordion.module.css';
import Accordion from '@/components/Accordion/Accordion';
// Imported helpers
import { uuid } from '@/app/utils/helpers';

/**
 * Components for `RichText`.
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className={stylesStacked.heading}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className={stylesStacked.body}>{children}</p>,
};
const componentsLayered: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className={stylesLayered.heading}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className={stylesLayered.body}>{children}</p>,
};
const componentsAccordion: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="rg" className={stylesAccordion.heading}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className={stylesAccordion.body}>{children}</p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          heroGradient
        >
          <div
            className={stylesStacked.container}
            style={{ ['--align' as string]: 'center' }}
          >
            <div className={stylesStacked.headingContainer}>
              <PrismicRichText
                field={slice.primary.heading}
                components={components}
              />
            </div>
            <div className={stylesStacked.bodyContainer}>
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
            </div>
            <div className={stylesStacked.buttonContainer}>
              <Button field={slice.primary.buttonLink} size="lg">
                {slice.primary.buttonText}
              </Button>
              <Button
                href="https://btogetheruk.perfectgym.com/clientportal2/#/login"
                type="secondary"
                color="orange"
                size="lg"
              >
                Sign-up
              </Button>
            </div>
            <div className={stylesStacked.imageContainer}>
              <PrismicNextImage
                field={slice.primary.image}
                className={stylesStacked.image}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                width="1290"
              />

              <PrismicNextImage
                field={slice.primary.imageSticker}
                className={stylesStacked.imageSticker}
                priority
              />
            </div>
          </div>
        </Section>
      )}

      {slice.variation === 'bento' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          width="full"
        >
          <div className={stylesBento.container}>
            <div className={stylesBento.bentoContainer}>
              {/* Main Card */}
              <div
                className={[
                  stylesBento.bentoCard,
                  stylesBento.bentoCardOne,
                ].join(' ')}
              >
                <div className={stylesBento.headingContainer}>
                  <PrismicRichText
                    field={slice.primary.heading}
                    components={components}
                  />
                </div>
                <div>
                  <div className={stylesBento.bodyContainer}>
                    <PrismicRichText
                      field={slice.primary.body}
                      components={components}
                    />
                  </div>
                  <Button field={slice.primary.buttonLink} size="lg">
                    {slice.primary.buttonText}
                  </Button>
                </div>
                {/* <div className={stylesBento.illustrationContainer}> */}
                <PrismicNextImage
                  field={slice.primary.illustration}
                  className={stylesBento.illustration}
                  priority
                />
                {/* </div> */}
              </div>

              {/* Card Two */}
              <div
                className={[
                  stylesBento.bentoCard,
                  stylesBento.bentoCardTwo,
                ].join(' ')}
              >
                <p className={stylesBento.title}>{slice.primary.titleCatOne}</p>
                <div className={stylesBento.imageCatOneContainer}>
                  <PrismicNextImage
                    field={slice.primary.imageCatOne}
                    className={stylesBento.imageCatOne}
                    priority
                    sizes="(max-width: 768px) 100vw, 75vw"
                    width="768"
                  />
                </div>
                <Button
                  field={slice.primary.buttonLinkCatOne}
                  type="minimal"
                  bgColor="Purple600"
                />
              </div>

              {/* Card Three */}
              <div
                className={[
                  stylesBento.bentoCard,
                  stylesBento.bentoCardThree,
                ].join(' ')}
              >
                <p className={stylesBento.title}>{slice.primary.titleCatTwo}</p>
                <div className={stylesBento.imageCatTwoContainer}>
                  <PrismicNextImage
                    field={slice.primary.imageCatTwo}
                    className={stylesBento.imageCatTwo}
                    priority
                    sizes="(max-width: 768px) 50vw, 20vw"
                    width="400"
                  />
                </div>
                {/* <PrismicNextImage
                field={slice.primary.illustrationCatTwo}
                className={stylesBento.illustrationCatTwo}
                priority
              /> */}
                <Button
                  field={slice.primary.buttonLinkCatTwo}
                  type="minimal"
                  bgColor="Sage900"
                />
              </div>

              {/* Card Four */}
              <div
                className={[
                  stylesBento.bentoCard,
                  stylesBento.bentoCardFour,
                ].join(' ')}
              >
                <p className={stylesBento.title}>
                  {slice.primary.titleCatThree}
                </p>
                <div className={stylesBento.imageCatThreeContainer}>
                  <PrismicNextImage
                    field={slice.primary.imageCatThree}
                    className={stylesBento.imageCatThree}
                    priority
                    sizes="(max-width: 768px) 50vw, 20vw"
                    width="400"
                  />
                </div>
                {/* <PrismicNextImage
                field={slice.primary.illustrationCatThree}
                className={stylesBento.illustrationCatThree}
                priority
              /> */}
                <Button
                  field={slice.primary.buttonLinkCatThree}
                  type="minimal"
                  bgColor="Blue900"
                />
              </div>
            </div>
          </div>
        </Section>
      )}

      {slice.variation === 'layered' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          width="full"
          bgColor="lavender"
          boxed
        >
          <div className={stylesLayered.container}>
            <div className={stylesLayered.headingContainer}>
              <PrismicRichText
                field={slice.primary.heading}
                components={componentsLayered}
              />
            </div>
            <div className={stylesLayered.contentContainer}>
              <div className={stylesLayered.bodyContainer}>
                <PrismicRichText
                  field={slice.primary.body}
                  components={componentsLayered}
                />
              </div>
              <Button field={slice.primary.buttonLink} size="lg">
                {slice.primary.buttonText}
              </Button>
              <PrismicNextImage
                field={slice.primary.illustrationTwo}
                className={stylesLayered.illustrationTwo}
                priority
                width="200"
              />
            </div>
            <div className={stylesLayered.imageSmallContainer}>
              <PrismicNextImage
                field={slice.primary.imageSmall}
                className={stylesLayered.imageSmall}
                priority
                width="300"
              />
            </div>
            <div className={stylesLayered.imageContainer}>
              <PrismicNextImage
                field={slice.primary.image}
                className={stylesLayered.image}
                priority
                sizes="(max-width: 768px) 50vw, 30vw"
                width="801"
              />
            </div>
            {/* <div className={stylesLayered.illustrationTwo}> */}

            {/* </div> */}
          </div>
        </Section>
      )}

      {slice.variation === 'accordion' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          width="full"
          overflow
        >
          <div className={stylesAccordion.container}>
            <div className={stylesAccordion.innerContainer}>
              <div className={stylesAccordion.headingContainer}>
                <PrismicRichText
                  field={slice.primary.heading}
                  components={components}
                />
              </div>
              <div className={stylesAccordion.bodyContainer}>
                <PrismicRichText
                  field={slice.primary.body}
                  components={components}
                />
              </div>
            </div>

            <Accordion
              key={uuid()}
              slice={slice}
              stylesAccordion={stylesAccordion}
              componentsAccordion={componentsAccordion}
            />
          </div>
        </Section>
      )}
    </>
  );
};

export default Hero;
