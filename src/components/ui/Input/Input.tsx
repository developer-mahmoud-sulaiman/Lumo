import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './Input.module.css';

type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = {
  size?: InputSize;
  invalid?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ size = 'md', invalid = false, fullWidth = false, leftIcon, rightIcon, className, id, type = 'text', ...rest }, ref) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={clsx(styles.wrapper, styles[size], invalid && styles.invalid, fullWidth && styles.fullWidth, className)}>
      {leftIcon && (
        <span className={styles.iconLeft} aria-hidden="true">
          {leftIcon}
        </span>
      )}

      <input ref={ref} id={inputId} type={type} className={clsx(styles.input, leftIcon && styles.withLeftIcon, rightIcon && styles.withRightIcon)} aria-invalid={invalid || undefined} {...rest} />

      {rightIcon && (
        <span className={styles.iconRight} aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </div>
  );
});
