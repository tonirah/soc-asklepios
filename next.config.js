// basePath used for GitHub Pages build config
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// process.env only supports string values
const env = {
  LOCAL_STORAGE_KEY: 'soc-progress', // key to store progress in localStorage
  MIN_CHARACTERS_FOR_COMBOBOX: '2', // minimal number of characters to show input options
  DELAY_FOR_VISITED: '10', // seconds to view task for status 'visited'
  POINTS_FOR_VISITED: '1', // points given for task visit
  POINTS_FOR_SOLVED: '4', // points given for solved task
  CODE_SMELLS_ENABLED: 'false', // activate asking for code smells in some tasks
  SSR_ENABLED: 'false', // SSR deactivated for frontend only application
};

module.exports = {
  env,
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: `${basePath}`,
  images: {
    loader: 'custom',
    unoptimized: true,
  },
};
