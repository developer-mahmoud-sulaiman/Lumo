import { useEffect } from 'react';
import styles from './MobileMenu.module.css';
import { X } from 'lucide-react';

export type MobileMenuItem = {
  label: string;
  href: string;
};

export type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: MobileMenuItem[];
  activePath?: string;
};

export function MobileMenu({ isOpen, onClose, items, activePath = '/' }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" data-open={isOpen || undefined}>
        <aside className={styles.drawer} data-open={isOpen || undefined} aria-hidden={!isOpen} aria-label="Mobile Menu">
          <div className={styles.header}>
            <span className={styles.brand}>Luma</span>
            <button type="button" onClick={onClose} className={styles.close} aria-label="Close Menu">
              <X size={22} />
            </button>
          </div>

          <nav className={styles.nav}>
            <ul>
              {items.map((item) => {
                const isActive = item.href === '/' ? activePath === '/' : activePath.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <a href={item.href} onClick={onClose} className={styles.link} data-active={isActive || undefined}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
