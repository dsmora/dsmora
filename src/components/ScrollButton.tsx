'use client';

import { scrollTo } from '@/utils';

type ScrollButtonProps = {
  target: string;
  children: React.ReactNode;
  className?: string;
};

export function ScrollButton({ target, children, className }: ScrollButtonProps) {
  return (
    <button onClick={() => scrollTo(target)} className={className}>
      {children}
    </button>
  );
}
