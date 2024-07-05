import styles from './heading.module.css';
import { capitilise } from '@/app/utils/helpers';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  size?: 'xl' | 'lg' | 'md' | 'rg' | 'sm' | 'xs' | 'xxs';
  color?: string;
};

const Heading = ({
  as: Comp = 'h1',
  className,
  children,
  size = 'lg',
  color = 'primary100',
}: HeadingProps) => {
  const accent = color !== 'white' ? 'gradient' : 'orange';
  return (
    <Comp
      className={[styles[size], styles.heading, styles[accent], className].join(
        ' '
      )}
      style={{ ['--color' as string]: `var(--color${capitilise(color)})` }}
    >
      {children}
    </Comp>
  );
};

export default Heading;
