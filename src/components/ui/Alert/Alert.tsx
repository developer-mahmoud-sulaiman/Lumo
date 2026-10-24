import { clsx } from 'clsx';
import styles from './Alert.module.css';
import type { ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Info, X, AlertTriangle } from 'lucide-react';

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

export type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
};

const icons: Record<AlertVariant, ReactNode> = {
  success: <CheckCircle2 size={20} />,
  error: <AlertCircle size={20} />,
  warning: <AlertTriangle size={20} />,
  info: <Info size={20} />,
};

export function Alert({ variant = 'info', title, children, onClose, className }: AlertProps) {
  return (
    <div role={variant === 'error' ? 'alert' : 'status'} className={clsx(styles.alert, styles[variant], className)}>
      <span className={styles.icon} aria-hidden="true">
        {icons[variant]}
      </span>

      <div className={styles.content}>
        {title && <p className={styles.title}>{title}</p>}
        <div className={styles.message}>{children}</div>
      </div>

      {onclose && (
        <button type="button" onClick={onClose} aria-label="Dismiss alert" className={styles.onClose}>
          <X size={16} />
        </button>
      )}
    </div>
  );
}
