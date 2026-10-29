import type { ProductCategory } from '@/types/products';
import styles from './CategoriesSection.module.css';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { Container, Skeleton } from '@/components/ui';
import { SectionHeader } from '../SectionHeader';

const STATIC_CATEGORIES: ProductCategory[] = [
  {
    slug: 'smartphones',
    name: 'Smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80&auto=format&fit=crop',
    productCount: 24,
  },
  {
    slug: 'laptops',
    name: 'Laptops',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80&auto=format&fit=crop',
    productCount: 18,
  },
  {
    slug: 'mens-shirts',
    name: "Men's Fashion",
    imageUrl: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&q=80&auto=format&fit=crop',
    productCount: 32,
  },
  {
    slug: 'womens-dresses',
    name: "Women's Fashion",
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80&auto=format&fit=crop',
    productCount: 27,
  },
  {
    slug: 'home-decoration',
    name: 'Home & Living',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80&auto=format&fit=crop',
    productCount: 21,
  },
  {
    slug: 'beauty',
    name: 'Beauty',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80&auto=format&fit=crop',
    productCount: 16,
  },
];

export type CategoriesSectionProps = {
  categories?: ProductCategory[];
  isLoading?: boolean;
  onCategoryClick?: (slug: string) => void;
  onViewAll: () => void;
};

export function CategoriesSection({ categories = STATIC_CATEGORIES, isLoading = false, onCategoryClick, onViewAll }: CategoriesSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <Container>
        <SectionHeader title="Shop by category" description="Find exactly what you are looking for across our curated collection" actionLabel="View all" onAction={onViewAll} />

        <h2 id="categories-heading" className="sr-only">
          Categories
        </h2>

        <div className={styles.grid}>
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.skeleton}>
                  <Skeleton variant="rect" style={{ aspectRatio: '4 / 3' }} />
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </div>
              ))
            : categories.map((cat) => <CategoryCard key={cat.slug} category={cat} onClick={onCategoryClick} />)}
        </div>
      </Container>
    </section>
  );
}
