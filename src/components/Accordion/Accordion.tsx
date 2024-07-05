'use client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import React, { useState } from 'react';
import Button from '../Button/Button';
// Imported helpers
import { uuid } from '@/app/utils/helpers';

//
// Accordion Type Props
//
type AccordionProps = {
  heading: any;
  body: any;
  image: any;
  buttonLink: any;
};

//
// Accordion Component
//
const Accordion = ({
  componentsAccordion,
  stylesAccordion,
  slice,
}: {
  componentsAccordion: any;
  stylesAccordion: any;
  slice: any;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  const color = ['purple', 'orange', 'peach', 'blue', 'sage'];
  const colorButton = ['purple600', 'orange', 'peach700', 'blue700', 'sage700'];

  return (
    <div className={stylesAccordion.accordionContainer}>
      {slice.items.map(
        ({ heading, body, image, buttonLink }: AccordionProps, i: number) => {
          return (
            <div
              key={uuid()}
              className={[
                stylesAccordion.accordion,
                activeIndex === i ? stylesAccordion.active : '',
                stylesAccordion[color[i].toLowerCase()],
              ].join(' ')}
              // style={{
              //   ['--bgColor' as string]: `var(--color${capitilise(color)})`,
              // }}
              onClick={() => activeIndex !== i && handleItemClick(i)}
            >
              <PrismicNextImage
                field={image}
                className={stylesAccordion.accordionImage}
                priority
                sizes="(max-width: 768px) 50vw, 30vw"
                width="768"
              />
              <div className={stylesAccordion.accordionInnerContainer}>
                <div className={stylesAccordion.accordionHeading}>
                  <PrismicRichText
                    field={heading}
                    components={componentsAccordion}
                  />
                </div>
                <div className={stylesAccordion.accordionBody}>
                  <PrismicRichText
                    field={body}
                    components={componentsAccordion}
                  />
                </div>
                {(buttonLink.url || activeIndex !== i) && (
                  <Button
                    field={activeIndex === i ? buttonLink : ''}
                    type="minimal"
                    icon={activeIndex === i ? 'arrow' : 'x'}
                    bgColor={colorButton[i].toLowerCase()}
                    className={stylesAccordion.accordionButton}
                  />
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Accordion;
