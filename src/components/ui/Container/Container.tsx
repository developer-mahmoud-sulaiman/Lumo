import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './Container.module.css';

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
} & Omit<ComponentPropsWithoutRef<T>, 'children'>;

export function Container<T extends ElementType = 'div'>({ as, children, size = 'lg', className, ...rest }: ContainerProps<T>) {
  const Component = as ?? 'div';
  return (
    <Component className={clsx(styles.container, styles[`size-${size}`], className)} {...rest}>
      {children}
    </Component>
  );
}
