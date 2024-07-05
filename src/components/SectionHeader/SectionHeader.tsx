import { ReactNode } from 'react';
import { PrismicRichText, JSXMapSerializer } from '@prismicio/react';
// Imported components
import Heading from '../Heading/Heading';
// Imported styles
import styles from './SectionHeader.module.css';

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
    <Heading as="h2" size="lg" className={styles.heading}>
      {children}
    </Heading>
  ),

  paragraph: ({ children }) => <p className={styles.body}>{children}</p>,
};

//
//  Props for `SectionHeader`.
//
interface SectionHeaderProps {
  slice: any;
  align?: 'left' | 'center' | 'right';
  justify?: 'start' | 'center' | 'end';
  children?: ReactNode;
  restProps?: any;
}

//
//     Component for 'SectionHeader'
//
const SectionHeader = ({
  slice,
  align,
  justify,
  children,
  ...restProps
}: SectionHeaderProps) => {
  // const justify =
  //   align === 'left' ? 'start' : align === 'right' ? 'end' : 'center';
  return (
    <div className={styles.container} {...restProps}>
      <div
        className={styles.contentContainer}
        style={{
          ['--align' as string]: align,
          ['--justify' as string]: justify,
        }}
      >
        <div className={styles.headingContainer}>
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
        </div>
        <div className={styles.bodyContainer}>
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;
