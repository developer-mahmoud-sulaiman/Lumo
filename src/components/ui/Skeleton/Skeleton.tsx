import type { CSSProperties } from 'react';
import { clsx } from 'clsx';
import styles from './Skeleton.module.css';

type SkeletonVariant = 'text' | 'circle' | 'rect';

export type SkeletonProps = {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
};

export function Skeleton({ variant = 'rect', width, height, className, style }: SkeletonProps) {
  const inlineStyle: CSSProperties = {
    width: width ?? undefined,
    height: height ?? undefined,
    ...style,
  };

  return <span aria-hidden="true" style={inlineStyle} className={clsx(styles.skeleton, styles[variant], className)} />;
}
