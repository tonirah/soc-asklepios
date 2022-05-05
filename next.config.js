// process.env only supports string values
const env = {
  LOCAL_STORAGE_KEY: 'soc-progress',
  MIN_CHARACTERS_FOR_COMBOBOX: '2',
  SSR_ENABLED: 'false',
};

module.exports = {
  env,
  reactStrictMode: true,
  trailingSlash: true,
};
