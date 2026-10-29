import { RootLayout } from './components/layout';
import { useState } from 'react';
import { HomePage } from './pages';

export default function App() {
  const [path, setPath] = useState('/');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (next: string) => {
    setPath(next);
    window.scrollTo({ top: 0 });
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (q) setPath(`/shop?q=${encodeURIComponent(q)}`);
  };

  return (
    <RootLayout activePath={path} cartCount={3} wishlistCount={1} user={{ name: 'Ahmed Muhammed' }} onNavigate={handleNavigate} onSearch={handleSearch}>
      <HomePage onShopClick={() => handleNavigate('/shop')} onCategoryClick={(slug) => handleNavigate(`/shop?category=${slug}`)} onProductView={(id) => handleNavigate(`/product/${id}`)} onProductAddToCart={(id) => console.log('add to cart', id)} />
    </RootLayout>
  );
}
