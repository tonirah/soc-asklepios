import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === `dark` ? (
        <button
          className="btn btn-sm btn-link px-1.5 text-left h-full normal-case"
          onClick={() => setTheme(`light`)}
        >
          <SunIcon className="w-8 text-base-content mr-1" />
          Helles
          <br />
          Design
        </button>
      ) : (
        <button
          className="btn btn-sm btn-link px-1.5 text-left h-full normal-case"
          onClick={() => setTheme(`dark`)}
        >
          <MoonIcon className="w-8 text-base-content/90" />
          Dunkles
          <br />
          Design
        </button>
      )}
    </>
  );
};
