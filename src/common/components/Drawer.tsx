import { useContext } from 'react';
import { ProgressContext } from '@/common/hooks';
import { ThemeChanger } from '@/common/components/ThemeChanger';
import Link from 'next/link';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { allTasks, Category } from '@/modules/tasks';
import { TaskProgressIcon } from '@/common/components/TaskProgressIcon';

function TaskList({
  category,
  headlineClasses,
  toggleDrawer,
}: {
  category: Category;
  headlineClasses: string;
  toggleDrawer: () => void;
}) {
  const { getTaskProgress } = useContext(ProgressContext);

  const categoryTasks = allTasks.filter((task) => task.category === category);

  return (
    <>
      <h3
        className={`font-mono text-lg font-bold underline ${headlineClasses} text-base-content mb-3 mt-6`}
      >
        {/*<h3 className="font-mono text-lg font-bold underline decoration-accent text-secondary mb-3 mt-6">*/}
        {category}
      </h3>
      {categoryTasks.map((task) => {
        return (
          <div key={task.uuid} onClick={toggleDrawer}>
            <Link href={`/tasks/${task.uuid}`}>
              <a className="btn btn-sm btn-link py-0 normal-case">
                <TaskProgressIcon
                  taskProgress={getTaskProgress(task.uuid)}
                  className="h-8 w-8 mr-1"
                />
                {task.name}
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
}

// drawer basics: https://codesandbox.io/s/bjbfr
export function Drawer({
  isDrawerOpen,
  toggleDrawer,
}: {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}) {
  return (
    <div
      className={
        `fixed overflow-hidden z-10 bg-base-300/40 inset-0 transform ease-in-out ` +
        (isDrawerOpen
          ? `transition-opacity opacity-100 duration-200 translate-x-0`
          : `transition-all delay-200 opacity-0 translate-x-full`)
      }
    >
      <div
        className={
          ` w-screen max-w-screen-sm right-0 absolute bg-base-100 border-l border-neutral-content/20 h-full duration-200 ease-in-out transition-all transform  ` +
          (isDrawerOpen ? ` translate-x-0 ` : ` translate-x-full delay-100`)
        }
      >
        <div className="relative w-screen max-w-screen-sm pb-10 pt-20 px-4 overflow-y-scroll h-full">
          <div className="sm:hidden mt-2">
            <div className="flex justify-around">
              <div className="w-32">
                <ThemeChanger />
              </div>
              <div onClick={toggleDrawer}>
                <Link href={`/info`}>
                  <a className="btn btn-sm btn-link text-base-content px-1.5 h-full text-left normal-case">
                    <InformationCircleIcon className="w-8 mr-1 text-info" />
                    Story, Mission,
                    <br />
                    Refactorings
                  </a>
                </Link>
              </div>
            </div>
            <div className="divider mb-0"></div>
          </div>

          {/*<h2 className="font-mono text-2xl font-bold tracking-wider underline decoration-primary mx-5 mb-5 mt-6">*/}
          <h2 className="font-mono text-2xl font-bold tracking-wider underline text-secondary decoration-accent mx-5 mb-5 mt-6">
            Kritische Codestellen
          </h2>
          <div className="mx-5 mb-10">
            <TaskList
              category={Category.CentralFlightSystem}
              toggleDrawer={toggleDrawer}
              headlineClasses="decoration-accent"
            />
            <TaskList
              category={Category.VentilationThermalControl}
              toggleDrawer={toggleDrawer}
              headlineClasses="decoration-secondary"
            />
            <TaskList
              category={Category.CrewHealthHypersleep}
              toggleDrawer={toggleDrawer}
              headlineClasses="decoration-success"
            />
            <TaskList
              category={Category.SpaceRadiationProtection}
              toggleDrawer={toggleDrawer}
              headlineClasses="decoration-primary"
            />
          </div>

          <div className="text-center">
            <div className="divider"></div>
            <button className="btn btn-sm btn-outline" onClick={toggleDrawer}>
              Liste schließen
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-screen h-full cursor-pointer"
        onClick={toggleDrawer}
      ></div>
    </div>
  );
}
