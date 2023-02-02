import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export function Layout({children}: PropsWithChildren) {
  return (
    <div className={clsx('pt-36 pb-20', 'lg:pb-28 lg:pt-52')}>{children}</div>
  )
}
