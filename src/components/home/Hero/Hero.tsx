import { Button, Container } from '@/components/ui';
import styles from './Hero.module.css';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export type HeroProps = {
  onShopClick?: () => void;
};

export function Hero({ onShopClick }: HeroProps) {
  return (
    <section className={styles.hero} aria-label="Featured">
      <Container>
        <div className={styles.inner}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>New season -- 2026</span>
            <h1 className={styles.headline}>
              Curated products <br />
              <span className={styles.highlight}>delivered with care.</span>
            </h1>

            <p className={styles.description}>past the description here</p>

            <div className={styles.cats}>
              <Button size="lg" leftIcon={<ShoppingBag size={18} />} onClick={onShopClick}>
                Shop Now
              </Button>

              <Button size="lg" variant="ghost" rightIcon={<ArrowRight size={16} />} onClick={onShopClick}>
                Browse categories
              </Button>
            </div>

            <ul className={styles.cats}>
              <li>
                <strong>10K+</strong>
                <span>Products</span>
              </li>
              <li>
                <strong>4.8</strong>
                <span>Avg rating</span>
              </li>
              <li>
                <strong>24/7</strong>
                <span>Support</span>
              </li>
            </ul>
          </div>

          <div className={styles.imageWrapper}>
            <img src="/public/images/heroImage.jpg" alt="Featured collection display" className={styles.image} loading="eager" fetchPriority="high" width={1200} height={1400} />
            <div className={styles.iamgeAccent} aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
