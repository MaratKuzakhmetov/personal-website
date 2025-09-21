import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './NavLink.module.css';

import { makeClassName } from '@/utils/makeClassName';

export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={makeClassName([
        [styles.link, true],
        [styles.active, isActive],
      ])}
    >
      {children}
    </Link>
  );
};
