const tailwindColors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        'soc-asklepios-dark': {
          ...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
          success: tailwindColors.green[600],
          error: tailwindColors.red[500],
          '--rounded-btn': '0.25rem',
          '--rounded-box': '0.25rem',
          '--animation-input': '0.1s',
        },
      },
    ],
  },
};
