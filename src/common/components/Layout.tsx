import { ReactNode, useContext } from 'react';
import { ProgressContext } from '@/common/hooks';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import { Navbar, Footer } from '@/common/components';

export function Layout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const { isWin } = useContext(ProgressContext);

  return (
    <>
      <div
        className={classNames(`min-h-screen bg-fixed`, {
          [`bg-space bg-repeat`]: isWin === false,
          [`bg-yagni-dark bg-cover`]: isWin === true && theme === `dark`,
          [`bg-yagni-light bg-cover`]: isWin === true && theme === `light`,
        })}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
