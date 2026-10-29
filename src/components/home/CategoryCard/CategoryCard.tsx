import { ArrowUpRight } from 'lucide-react';
import styles from './CategoryCard.module.css';
import type { ProductCategory } from '@/types/products';

export type CategoryCardProps = {
  category: ProductCategory;
  onClick?: (slug: string) => void;
};

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const { slug, name, imageUrl, productCount } = category;

  return (
    <button type="button" className={styles.card} onClick={() => onClick?.(slug)} aria-label={`Brows ${name} - ${productCount} product`}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="" className={styles.image} loading="lazy" width={400} height={500} />
        <span className={styles.icon} aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.count}>{productCount}</p>
      </div>
    </button>
  );
}
