import { ReactNode } from 'react';
import { LinkField } from '@prismicio/types';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
// Imported Styles
import styles from './button.module.css';
import Arrow from '@/app/assets/svg/Arrow';
import Cross from '@/app/assets/svg/Cross';
// Imported helpers
import { capitilise } from '@/app/utils/helpers';

//
// Button Props
//
type ButtonProps = {
  type?: 'primary' | 'secondary' | 'minimal' | 'submit';
  arrow?: string;
  direction?: 'right' | 'left' | 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
  color?: string;
  children?: ReactNode;
  field?: LinkField | undefined;
  className?: string;
  uppercase?: boolean;
  icon?: 'x' | 'cross' | 'arrow';
  title?: string;
  href?: string | undefined;
  restProps?: any;
};

//
// Button Component
//
const Button = ({
  arrow = 'show',
  direction = 'right',
  type = 'primary',
  size = 'md',
  bgColor = 'orange',
  color = 'white',
  children,
  field,
  icon,
  className,
  title,
  href,
  uppercase,
  ...restProps
}: ButtonProps) => {
  const Comp = href ? Link : field ? PrismicNextLink : 'button';

  return (
    // @ts-ignore
    <Comp
      className={[
        styles.ctaButton,
        styles[type],
        styles[size],
        styles[direction],
        uppercase && styles.uppercase,
        className,
      ].join(' ')}
      style={{
        ['--buttonBgColor' as string]: `var(--color${capitilise(bgColor)})`,
        ['--buttonColor' as string]: `var(--color${capitilise(color)}Raw)`,
      }}
      title={title}
      {...(href && { href: href })}
      {...(field && { field: field })}
      {...restProps}
      rel="noreferrer"
    >
      <span className={styles.body}>{children}</span>
      {arrow === 'hide' ? (
        ''
      ) : icon === 'x' ? (
        <Cross />
      ) : (
        <Arrow className={[styles.arrow, styles[direction]].join(' ')} />
      )}
    </Comp>
  );
};

export default Button;
