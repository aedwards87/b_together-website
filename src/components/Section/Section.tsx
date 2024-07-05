import { ReactNode } from 'react';
import styles from './section.module.css';
import { camalise, capitilise } from '@/app/utils/helpers';

//
//  Props for `Section`.
//
interface SectionProps {
  as?: 'section' | 'header' | 'footer';
  id?: string | null;
  children: ReactNode;
  className?: string;
  bgImage?: string;
  width?: 'max' | 'layout' | 'full';
  overflow?: boolean;
  boxed?: boolean;
  bgColor?: string;
  hero?: boolean;
  heroGradient?: boolean;
  restProps?: any;
}

//
//  Component for `Section`.
//
const Section = ({
  as: Comp = 'section',
  id,
  children,
  className,
  bgColor = '',
  bgImage,
  width = 'layout',
  overflow,
  heroGradient,
  hero,
  boxed,
  ...restProps
}: SectionProps) => {
  if (width === 'full') width = 'max';
  return (
    <Comp
      {...(id && { id: id })}
      className={[
        styles.container,
        styles[camalise(bgColor)],
        (bgColor || bgImage) && styles.background,
        heroGradient && styles.heroGradient,
        overflow && styles.overflow,
        boxed && styles.boxed,
        className,
      ].join(' ')}
      style={
        {
          '--maxWidth': `var(--site${capitilise(width)}Width)`,
          ...(bgImage && { '--backgroundImage': `${bgImage}` }),
          ...(hero && { marginTop: '2rem' }),
        } as React.CSSProperties
      }
      {...restProps}
    >
      <div className={styles.layoutContainer}>{children}</div>
    </Comp>
  );
};

export default Section;
