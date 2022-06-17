import { TaskProgress } from '@/common/hooks';
import { BadgeCheckIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { FireIcon, SearchCircleIcon } from '@heroicons/react/outline';

export function TaskProgressIcon({
  className,
  taskProgress,
}: {
  className: string;
  taskProgress?: TaskProgress;
}) {
  if (taskProgress === TaskProgress.Solved) {
    return <BadgeCheckIcon className={classNames(`text-success`, className)} />;
  }
  if (taskProgress === TaskProgress.Visited) {
    return (
      <SearchCircleIcon className={classNames(`text-accent`, className)} />
    );
  }
  return <FireIcon className={classNames(`text-error`, className)} />;
}
