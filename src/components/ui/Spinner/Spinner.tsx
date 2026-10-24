import { clsx } from 'clsx';
import styles from './Spinner.module.css';

type SpinnerSize = 'sm' | 'md' | 'lg';

export type SpinnerProps = {
  size?: SpinnerSize;
  label?: string;
  className?: string;
};

export function Spinner({ size = 'md', label = 'loading', className }: SpinnerProps) {
  return <span role="status" aria-label={label} className={clsx(styles.spinner, styles[size], className)} />;
}
