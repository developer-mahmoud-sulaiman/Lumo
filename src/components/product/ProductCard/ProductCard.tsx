import type { Product } from '@/types/products';
import styles from './ProductCard.module.css';
import clsx from 'clsx';
import { Heart, Star } from 'lucide-react';
import { formatPrice } from '@/utils/formatPrice';

export type ProductCardProps = {
  product: Product;
  onView?: (id: number) => void;
  onAddToCart?: (id: number) => void;
  isInWishlist?: boolean;
  onToggleWishlist?: (id: number) => void;
};

export function ProductCard({ product, onView, onAddToCart, isInWishlist = false, onToggleWishlist }: ProductCardProps) {
  const { id, title, price, discountPercentage, rating, stock, thumbnail, brand, category } = product;

  const hasDiscount = discountPercentage > 0;
  const originalPrice = hasDiscount ? price / (1 - discountPercentage / 100) : price;

  const isOutOfStock = stock <= 0;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={thumbnail} alt={title} className={styles.image} loading="lazy" width={400} height={400} />
        {hasDiscount && <span className={styles.discountBadge}>-{Math.round(discountPercentage)}%</span>}
        {onToggleWishlist && (
          <button type="button" className={clsx(styles.wishlistBtn, isInWishlist && styles.wishlistActive)} onClick={() => onToggleWishlist(id)} aria-label={isInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'} aria-pressed={isInWishlist}>
            <Heart size={18} fill={isInWishlist ? 'currentColor' : 'none'} />
          </button>
        )}
        {isOutOfStock && (
          <div className={styles.outOfStock}>
            <span>Out of stock</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {brand && <span className={styles.brand}>{brand}</span>}
          <span className={styles.category}>{category}</span>
        </div>

        <h3 className={styles.title}>
          <button type="button" onClick={() => onView?.(id)} className={styles.titleBtn}>
            {title}
          </button>
        </h3>

        <div className={styles.rating}>
          <Star size={14} fill="currentColor" aria-hidden="true" />
          <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            <span className={styles.price}>{formatPrice(price)}</span>
            {hasDiscount && <span className={styles.originalPrice}>{formatPrice(originalPrice)}</span>}
          </div>
        </div>
        {onAddToCart && !isOutOfStock && (
          <button type="button" onClick={() => onAddToCart(id)} className={styles.addBtn}>
            Add
          </button>
        )}
      </div>
    </article>
  );
}
