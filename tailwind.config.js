const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ``;

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        space: `url('${basePath}/images/space.png')`,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        'soc-asklepios-dark': {
          primary: '#fc56c2',
          secondary: '#1cd7fc',
          accent: '#fcf156',
          neutral: '#383f5c',
          'base-100': '#181f3d',

          info: '#8be9fd',
          success: '#11b82c',
          warning: '#fcee23',
          error: '#f7164b',

          'neutral-content': '#c4d0ff',
          'base-content': '#edfcfc',
          'error-content': '#fcdee6',

          '--rounded-box': '0.25rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.25rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.1s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
};
