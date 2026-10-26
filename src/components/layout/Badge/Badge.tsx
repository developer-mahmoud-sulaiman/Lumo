import clsx from 'clsx';
import styles from './Badge.module.css';

export type BadgeProps = {
  count: number;
  variant?: 'primary' | 'accent';
  className?: string;
  'aria-label'?: string;
};

export function Badge({ count, variant = 'primary', className, 'aria-label': ariaLabel }: BadgeProps) {
  if (count <= 0) return null;

  const display = count > 99 ? '99+' : count;

  return (
    <span className={clsx(styles.badge, styles[variant], className)} aria-label={ariaLabel ?? `${count} items`}>
      {display}
    </span>
  );
}
