import { Container } from '@/components/ui';
import styles from './Footer.module.css';
import { Mail } from 'lucide-react';
import type { MouseEvent } from 'react';

const FOOTER_LINKS = {
  Shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Wishlist', href: '/wishlist' },
    { label: 'Cart', href: '/cart' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  Account: [
    { label: 'Sign In', href: '/login' },
    { label: 'Register', href: '/register' },
    { label: 'My Orders', href: '/orders' },
  ],
};

export type FooterProps = {
  onNavigate?: (path: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <a href="/" className={styles.logo} onClick={(e) => handleNav(e, '/')} aria-label="Luma - Home">
              Luma
            </a>
            <p className={styles.tagline}>A modern e-commerce experience. Built with React, Type script & Vite</p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className={styles.col}>
              <h3 className={styles.colTitle}>{title}</h3>
              <ul className={styles.colList}>
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={styles.link} onClick={(e) => handleNav(e, link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Luma. All rights reserved.</p>

          <div className={styles.social}>
            <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Face Book" className={styles.socialLink}>
              <Mail size={18} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Face Book" className={styles.socialLink}>
              <Mail size={18} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Face Book" className={styles.socialLink}>
              <Mail size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
