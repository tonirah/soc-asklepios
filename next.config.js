// process.env only supports string values
const env = {
  LOCAL_STORAGE_KEY: 'soc-progress',
  MIN_CHARACTERS_FOR_COMBOBOX: '2',
  SSR_ENABLED: 'false',
  POINTS_FOR_VISITED: '1',
  POINTS_FOR_SOLVED: '4',
};

module.exports = {
  env,
  reactStrictMode: true,
  trailingSlash: true,
};
