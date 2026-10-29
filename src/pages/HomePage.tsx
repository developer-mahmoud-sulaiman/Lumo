import { CategoriesSection } from '@/components/home/CategoriesSection';
import { Hero } from '@/components/home/Hero';
import { SectionHeader } from '@/components/home/SectionHeader';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Container } from '@/components/ui';
import type { Product } from '@/types/products';

const STATIC_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Apple iPhone 15 Pro Max 256GB',
    description: 'Titanium design, A17 Pro chip.',
    price: 1099,
    discountPercentage: 12.5,
    rating: 4.8,
    stock: 25,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
  {
    id: 2,
    title: 'MacBook Pro 14" M3',
    description: 'Powerful laptop for creators.',
    price: 1599,
    discountPercentage: 8,
    rating: 4.9,
    stock: 12,
    brand: 'Apple',
    category: 'laptops',
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
  {
    id: 3,
    title: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling.',
    price: 349,
    discountPercentage: 15,
    rating: 4.7,
    stock: 40,
    brand: 'Sony',
    category: 'audio',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
  {
    id: 4,
    title: 'Nike Air Zoom Pegasus 40',
    description: 'Responsive cushioning for runners.',
    price: 129,
    discountPercentage: 0,
    rating: 4.5,
    stock: 0,
    brand: 'Nike',
    category: 'mens-shoes',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
  {
    id: 5,
    title: 'Classic White Oxford Shirt',
    description: 'Timeless cotton shirt for everyday.',
    price: 79,
    discountPercentage: 20,
    rating: 4.4,
    stock: 150,
    brand: 'Everlane',
    category: 'mens-shirts',
    thumbnail: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
  {
    id: 6,
    title: 'Leather Crossbody Bag',
    description: 'Minimal, handcrafted leather.',
    price: 189,
    discountPercentage: 10,
    rating: 4.6,
    stock: 30,
    brand: 'Cuyana',
    category: 'womens-bags',
    thumbnail: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
  {
    id: 7,
    title: 'Minimalist Ceramic Mug Set',
    description: 'Handmade stoneware, set of 4.',
    price: 45,
    discountPercentage: 0,
    rating: 4.3,
    stock: 80,
    brand: 'West Elm',
    category: 'home-decoration',
    thumbnail: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
  {
    id: 8,
    title: 'Vitamin C Brightening Serum',
    description: '10% vitamin C, daily brightening.',
    price: 32,
    discountPercentage: 25,
    rating: 4.7,
    stock: 200,
    brand: 'The Ordinary',
    category: 'skincare',
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80&auto=format&fit=crop',
    images: [],
  },
];

export type HomePageProps = {
  onShopClick?: () => void;
  onCategoryClick?: (slug: string) => void;
  onProductView?: (id: number) => void;
  onProductAddToCart?: (id: number) => void;
};

export function HomePage({ onShopClick, onCategoryClick, onProductView, onProductAddToCart }: HomePageProps) {
  return (
    <>
      <Hero onShopClick={onShopClick} />

      <CategoriesSection onCategoryClick={onCategoryClick} onViewAll={onShopClick ?? (() => {})} />

      <section style={{ paddingBlock: 'var(--space-12)' }} aria-labelledby="featured-heading">
        <Container>
          <SectionHeader title="Best sellers" description="Our most-loved products, hand-picked for you" actionLabel="View all" onAction={onShopClick} />

          <h2 id="featured-heading" className="sr-only">
            Featured products
          </h2>

          <ProductGrid products={STATIC_PRODUCTS} onView={onProductView} onAddToCart={onProductAddToCart} isInWishlist={(id) => id === 2} onToggleWishlist={(id) => console.log('toggle wishlist', id)} />
        </Container>
      </section>
    </>
  );
}
