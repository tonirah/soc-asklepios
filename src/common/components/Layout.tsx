import { ReactNode, useContext } from 'react';
import { ProgressContext } from '@/common/hooks';
import { useTheme } from 'next-themes';
import classNames from 'classnames';

export function Layout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const { getProgressPercentage } = useContext(ProgressContext);
  const isWin = getProgressPercentage() === 100;

  return (
    <>
      <div
        className={classNames(`min-h-screen bg-fixed`, {
          [`bg-yagni-dark bg-cover`]: isWin === true && theme === `dark`,
          [`bg-yagni-light bg-cover`]: isWin === true && theme === `light`,
          [`bg-space bg-repeat`]: isWin === false,
        })}
      >
        {children}
      </div>
    </>
  );
}
