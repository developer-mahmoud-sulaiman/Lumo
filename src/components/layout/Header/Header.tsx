import { useState } from 'react';
import { MobileMenu, type MobileMenuItem } from '../MobileMenu/MobileMenu';
import { Navbar, type NavbarUser } from '../Navbar/Navbar';
import styles from './Header.module.css';
import { Container } from '@/components/ui';
import { SearchPanel } from '../SearchPanel';

export type HeaderProps = {
  activePath?: string;
  cartCount?: number;
  wishlistCount?: number;
  user?: NavbarUser | null;
  onNavigate: (path: string) => void;
  onSearch?: (query: string) => void;
};

const MOBILE_MENU_ITEMS: MobileMenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Wishlist', href: '/wishlist' },
  { label: 'Cart', href: '/cart' },
];

export function Header({ activePath = '/', cartCount = 0, wishlistCount = 0, user, onNavigate, onSearch }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Navbar activePath={activePath} cartCount={cartCount} wishlistCount={wishlistCount} user={user} onOpenSearch={() => setIsSearchOpen(true)} onOpenMenu={() => setIsMenuOpen(true)} onNavigate={handleNavigate} />

        <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSearch={onSearch} />
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} items={MOBILE_MENU_ITEMS} activePath={activePath} />
    </header>
  );
}
