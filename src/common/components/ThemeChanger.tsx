import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === `dark` ? (
        <button
          className="btn btn-sm btn-link text-xs"
          onClick={() => setTheme(`light`)}
        >
          <SunIcon className="w-8 mr-1" /> Helles
          <br />
          Design
        </button>
      ) : (
        <button
          className="btn btn-sm btn-link text-xs"
          onClick={() => setTheme(`dark`)}
        >
          <MoonIcon className="w-8" /> Dunkles
          <br />
          Design
        </button>
      )}
    </>
  );
};
