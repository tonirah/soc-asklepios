// basePath used for GitHub Pages build config
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// process.env only supports string values
const env = {
  LOCAL_STORAGE_KEY: 'soc-progress',
  MIN_CHARACTERS_FOR_COMBOBOX: '2',
  SSR_ENABLED: 'false',
  POINTS_FOR_VISITED: '1',
  POINTS_FOR_SOLVED: '4',
  DELAY_FOR_VISITED: '10',
  CODE_SMELLS_ENABLED: 'false',
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
