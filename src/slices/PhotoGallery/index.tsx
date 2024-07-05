'use client';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
// Imported components
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Section from '@/components/Section/Section';
// Imported styles
import stylesHorizontal from './photoGalleryHorizontal.module.css';
import stylesVertical from './photoGalleryVertical.module.css';
// Imported helpers
import { uuid } from '@/app/utils/helpers';

//
//  Props for `PhotoGallery`.
//
export type PhotoGalleryProps = SliceComponentProps<Content.PhotoGallerySlice>;

//
//  Component for "PhotoGallery" Slices.
//
const PhotoGallery = ({ slice }: PhotoGalleryProps): JSX.Element => {
  const num = Math.floor(slice.items.length / 2);
  console.log('num', num);
  return (
    <>
      {slice.variation === 'default' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          width="full"
        >
          <SectionHeader slice={slice}>
            <div className={stylesHorizontal.imageOuterContainer}>
              <div className={stylesHorizontal.imageContainer}>
                {slice.items.map((item, i) => {
                  if (i <= num)
                    return (
                      <PrismicNextImage
                        key={uuid()}
                        field={item.image}
                        className={stylesHorizontal.image}
                        loading="lazy"
                      />
                    );
                })}
              </div>
              <div className={stylesHorizontal.imageContainer}>
                {slice.items.map((item, i) => {
                  if (i > num)
                    return (
                      <PrismicNextImage
                        key={uuid()}
                        field={item.image}
                        className={stylesHorizontal.image}
                        loading="lazy"
                        sizes="(max-width: 768px) 75vw, 25vw"
                      />
                    );
                })}
              </div>
            </div>
          </SectionHeader>
        </Section>
      )}

      {slice.variation === 'vertical' && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          bgColor="orange"
        >
          <SectionHeader slice={slice}>
            <div className={stylesVertical.imageContainer}>
              {slice.items.map((item: any) => {
                const dimensionCheck =
                  item?.image?.dimensions?.width <
                  item?.image?.dimensions?.height
                    ? 'spanTwo'
                    : null;
                return (
                  <div
                    key={uuid()}
                    className={[
                      stylesVertical.imageGrp,
                      dimensionCheck && stylesVertical[dimensionCheck],
                    ].join(' ')}
                  >
                    <PrismicNextImage
                      key={uuid()}
                      field={item.image}
                      className={[
                        stylesVertical.image,
                        dimensionCheck && stylesVertical[dimensionCheck],
                      ].join(' ')}
                      loading="lazy"
                      sizes="(max-width: 768px) 75vw, 25vw"
                    />
                  </div>
                );
              })}
              {/* TO DO: Make it so only a certain amount of photos show on initial load */}
              {/* TO DO: Create a button to view more images */}
              {/* <button className={stylesVertical.button} onClick={click}>View More</button> */}
            </div>
          </SectionHeader>
        </Section>
      )}
    </>
  );
};

export default PhotoGallery;
