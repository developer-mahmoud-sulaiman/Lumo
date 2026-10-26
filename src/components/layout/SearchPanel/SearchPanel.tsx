import { useEffect, useRef } from 'react';
import styles from './SearchPanel.module.css';
import { Input } from '@/components/ui';
import { Search, X } from 'lucide-react';

export type SearchPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onSearch?: (query: string) => void;
};

export function SearchPanel({ isOpen, onClose, onSearch }: SearchPanelProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <div className={styles.panel} data-open={isOpen || undefined} aria-hidden={!isOpen} id="search-panel">
      <div className={styles.inner}>
        <div className={styles.field}>
          <Input
            ref={inputRef}
            leftIcon={<Search size={18} />}
            placeholder="Search Products..."
            size="lg"
            fullWidth
            onChange={(e) => onSearch?.(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const value = (e.target as HTMLInputElement).value;
                onSearch?.(value);
              }
            }}
          />
        </div>

        <button type="button" onClick={onClose} className={styles.closeButton} aria-label="Close Search">
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
