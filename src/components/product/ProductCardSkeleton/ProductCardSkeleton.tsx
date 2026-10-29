import { Skeleton } from '@/components/ui';
import styles from './ProductCardSkeleton.module.css';

export function ProductCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden="true">
      <Skeleton variant="rect" style={{ aspectRatio: '1 / 1', borderRadius: 0 }} />

      <div className={styles.body}>
        <Skeleton variant="text" width="40%" height={12} />
        <Skeleton variant="text" width="85%" height={16} />
        <Skeleton variant="text" width="30%" height={12} />

        <div className={styles.footer}>
          <Skeleton variant="text" width={80} height={20} />
          <Skeleton variant="rect" width={60} height={32} />
        </div>
      </div>
    </div>
  );
}
