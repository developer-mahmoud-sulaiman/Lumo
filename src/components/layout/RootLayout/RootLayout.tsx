import type { ReactNode } from 'react';
import styles from './RootLayout.module.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

export type RootLayoutProps = {
  children: ReactNode;
  activePath?: string;
  cartCount?: number;
  wishlistCount?: number;
  user?: { name: string; avatarUrl?: string } | null;
  onNavigate: (path: string) => void;
  onSearch?: (query: string) => void;
  showFooter?: boolean;
};

export function RootLayout({ children, activePath = '/', cartCount = 0, wishlistCount = 0, user, onNavigate, onSearch, showFooter = true }: RootLayoutProps) {
  return (
    <div className={styles.root}>
      <Header activePath={activePath} cartCount={cartCount} wishlistCount={wishlistCount} user={user} onNavigate={onNavigate} onSearch={onSearch} />

      <main className={styles.main}>{children}</main>
      {showFooter && <Footer onNavigate={onNavigate} />}
    </div>
  );
}
