import clsx from 'clsx';
import styles from './SectionHeader.module.css';
import { ArrowRight } from 'lucide-react';

export type SectionHeaderProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

export function SectionHeader({ title, description, actionLabel, onAction, className }: SectionHeaderProps) {
  return (
    <div className={clsx(styles.header, className)}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {actionLabel && onAction && (
        <button type="button" onClick={onAction} className={styles.action} aria-label={actionLabel}>
          <span>{actionLabel}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
