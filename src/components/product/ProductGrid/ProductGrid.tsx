import type { Product } from '@/types/products';
import styles from './ProductGrid.module.css';
import { ProductCardSkeleton } from '../ProductCardSkeleton';
import { PackageSearch } from 'lucide-react';
import { ProductCard } from '../ProductCard';

export type ProductGridProps = {
  products: Product[];
  error?: string | null;
  isLoading?: boolean;
  emptyMessage?: string;
  skeletonCount?: number;
  onView?: (id: number) => void;
  onAddToCart?: (id: number) => void;
  isInWishlist?: (id: number) => boolean;
  onToggleWishlist?: (id: number) => void;
};

export function ProductGrid({ products, isLoading = false, error, emptyMessage = 'No products found', skeletonCount = 8, onView, onAddToCart, isInWishlist, onToggleWishlist }: ProductGridProps) {
  if (error) {
    return (
      <div className={styles.state} role="alert">
        <p className={styles.stateTitle}>Something went wrong</p>
        <p className={styles.stateMessage}>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.grid} aria-busy="true" aria-label="Loading products">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.state}>
        <PackageSearch size={40} className={styles.stateicon} aria-hidden="true" />
        <p className={styles.stateTitle}>{emptyMessage}</p>
        <p className={styles.stateMessage}>Try adjusting your filters or browsing a different category.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onView={onView} onAddToCart={onAddToCart} isInWishlist={isInWishlist?.(product.id) ?? false} onToggleWishlist={onToggleWishlist} />
      ))}
    </div>
  );
}
