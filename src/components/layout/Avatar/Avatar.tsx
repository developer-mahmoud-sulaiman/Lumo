import clsx from 'clsx';
import styles from './Avatar.module.css';

type AvatarSize = 'sm' | 'md' | 'lg';

export type AvatarProps = {
  name: string;
  src?: string;
  size?: AvatarSize;
  className?: string;
};

export function Avatar({ name, src, size = 'md', className }: AvatarProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return (
    <span className={clsx(styles.avatar, styles[size], className)} aria-label={`Signed in as ${name}`} role="img">
      {src ? (
        <img src={src} alt="" className={styles.image} loading="lazy" />
      ) : (
        <span className={styles.initials} aria-hidden="true">
          {initials}
        </span>
      )}
    </span>
  );
}
