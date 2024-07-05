import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
// Imported components
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
// Imported styles
import styles from './pricing.module.css';
// Imported helpers
import { convertPriceModel, convertTime12hr, isOdd } from '@/app/utils/helpers';

//
//    Components for `RichText`
//
const cardComponents: JSXMapSerializer = {
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
//  Props for `Pricing`.
//
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

//
//  Component for "Pricing" Slices.
//
const Pricing = ({ slice }: PricingProps): JSX.Element => {
  return (
    <Section
      id="packages"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionHeader slice={slice}>
        <div className={styles.cardContainer}>
          {slice.items.map((item, i) => {
            return (
              <div key={item.price} className={styles.card}>
                <PrismicRichText
                  field={item.pricePlanHeading}
                  components={cardComponents}
                />
                <div className={styles.cardPriceContainer}>
                  <span className={styles.cardCurrency}>£</span>
                  <span className={styles.cardPrice}> {item.price} </span>
                  <span className={styles.cardPriceModel}>
                    {`/${item.pricingModel && convertPriceModel(item.pricingModel)}`}
                  </span>
                </div>
                <div className={styles.cardContentContainer}>
                  {item.startTime && item.finishTime && (
                    <div className={styles.cardTime}>
                      <span>
                        {convertTime12hr(new Date(item.startTime))} -{' '}
                        {convertTime12hr(new Date(item.finishTime))}
                      </span>
                    </div>
                  )}
                  <PrismicRichText
                    field={item.pricePlanBody}
                    components={cardComponents}
                  />
                  <div className={styles.cardButtonContainer}>
                    <Button
                      field={item.buttonLinkOne}
                      size="lg"
                      bgColor={isOdd(i + 1) ? 'Terracotta' : 'Orange'}
                    >
                      {item.buttonLabelOne}
                    </Button>
                    {item.buttonLabelTwo && (
                      <Button
                        field={item.buttonLinkTwo}
                        type="secondary"
                        size="lg"
                        color={isOdd(i + 1) ? 'Terracotta' : 'Orange'}
                        bgColor={isOdd(i + 1) ? 'Terracotta' : 'Orange'}
                      >
                        {item.buttonLabelTwo}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionHeader>
    </Section>
  );
};

export default Pricing;
