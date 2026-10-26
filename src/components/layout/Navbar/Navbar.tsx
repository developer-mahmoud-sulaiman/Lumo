import { Heart, Menu, Search, ShoppingBag, User } from 'lucide-react';
import styles from './Navbar.module.css';
import { Badge } from '../Badge';
import { Avatar } from '../Avatar';

export type NavbarUser = {
  name: string;
  avatarUrl?: string;
};

export type NavbarProps = {
  activePath?: string;
  cartCount?: number;
  wishlistCount?: number;
  user?: NavbarUser | null;
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onNavigate: (path: string) => void;
};

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar({ activePath = '/', cartCount = 0, wishlistCount = 0, user, onOpenSearch, onOpenMenu, onNavigate }: NavbarProps) {
  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <button type="button" className={styles.iconButton} onClick={onOpenMenu} aria-label="Open Menu">
        <Menu size={32} />
      </button>

      <a
        href="/"
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          onNavigate('/');
        }}
        aria-label="Luma Home"
      >
        Luma
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map((link) => {
          const isActive = link.href === '/' ? activePath === '/' : activePath.startsWith(link.href);
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.href);
                }}
                className={styles.link}
                data-active={isActive || undefined}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <button type="button" className={styles.iconButton} onClick={onOpenSearch} aria-label="Open Search">
          <Search size={20} />
        </button>

        <a
          href="/wishlist"
          className={styles.iconButton}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/wishlist');
          }}
          aria-label={`Wishlist${wishlistCount > 0 ? ` , ${wishlistCount} items` : ''}`}
        >
          <Heart size={20} />
          <Badge count={wishlistCount} variant="accent" />
        </a>

        <a
          href="/cart"
          className={styles.iconButton}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/cart');
          }}
          aria-label={`Cart${cartCount > 0 ? ` , ${cartCount} items` : ''}`}
        >
          <ShoppingBag size={20} />
          <Badge count={cartCount} variant="primary" />
        </a>

        {user ? (
          <a
            href="/account"
            className={styles.avatarLink}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/account');
            }}
            aria-label={`Account${user.name}`}
          >
            <Avatar name={user.name} src={user.avatarUrl} size="md" />
          </a>
        ) : (
          <a
            href="/login"
            className={styles.iconButton}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/login');
            }}
            aria-label="Sign in"
          >
            <User size={20} />
          </a>
        )}
      </div>
    </nav>
  );
}
