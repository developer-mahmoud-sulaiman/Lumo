import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import { Spinner } from '../Spinner/Spinner';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'primary', size = 'md', loading = false, fullWidth = false, leftIcon, rightIcon, disabled, className, children, type = 'button', ...rest }: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button type={type} disabled={isDisabled} aria-busy={loading || undefined} className={clsx(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, loading && styles.loading, className)} {...rest}>
      {loading && (
        <span className={styles.spinner} aria-hidden="true">
          <Spinner size="sm" />
        </span>
      )}

      {!loading && (
        <span className={styles.icon} aria-hidden="true">
          {leftIcon}
        </span>
      )}

      <span className={styles.label}>{children}</span>

      {!loading && rightIcon && (
        <span className={styles.icon} aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
