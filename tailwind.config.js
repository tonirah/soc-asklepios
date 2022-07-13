const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ``;

const darkBlue = '#181f3d';
const roundedBox = '0.25rem'; // border radius rounded-box utility class, used in card and other large boxes
const roundedBtn = '0.25rem'; // border radius rounded-btn utility class, used in buttons and similar element
const roundedBadge = '1.9rem'; // border radius rounded-badge utility class, used in badges and similar
const animationBtn = '0.25s'; // duration of animation when you click on button
const animationInput = '0.1s'; // duration of animation for inputs like checkbox, toggle, radio, etc
const btnTextCase = 'uppercase'; // set default text transform for buttons
const btnFocusScale = '0.95'; // scale transform of button when you focus on it
const borderBtn = '1px'; // border width of buttons
const tabBorder = '1px'; // border width of tabs
const tabRadius = '0.5rem'; // border radius of tabs

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        space: `url('${basePath}/images/space.png')`,
        'yagni-dark': `url('${basePath}/images/yagni-dark.png')`,
        'yagni-light': `url('${basePath}/images/yagni-light.png')`,
      },
      colors: {
        'dark-blue': darkBlue,
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(4px)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
        fly: {
          '0%, 100%': {
            transform: 'translateY(5px) translateX(-3px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'bounce-slow': 'bounceSlow 2s infinite',
        fly: 'fly 5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#fc56c2',
          secondary: '#1cd7fc',
          accent: '#fcf156',
          neutral: '#383f5c',
          'base-100': darkBlue,

          info: '#8be9fd',
          success: '#11b82c',
          warning: '#fcee23',
          error: '#f7164b',

          'neutral-focus': '#3f4866',

          'neutral-content': '#c4d0ff',
          'base-content': '#edfcfc',
          'error-content': '#fcdee6',

          '--rounded-box': roundedBox,
          '--rounded-btn': roundedBtn,
          '--rounded-badge': roundedBadge,
          '--animation-btn': animationBtn,
          '--animation-input': animationInput,
          '--btn-text-case': btnTextCase,
          '--btn-focus-scale': btnFocusScale,
          '--border-btn': borderBtn,
          '--tab-border': tabBorder,
          '--tab-radius': tabRadius,
        },
        light: {
          primary: '#f252ba',
          secondary: '#17b0cf',
          accent: '#bc6c25',
          neutral: '#ebebeb',
          'base-100': '#ffffff',
          'base-300': '#f2f2f2',
          info: '#3abff8',
          success: '#11b82c',
          error: '#f7164b',
          warning: '#f2b200',

          'neutral-focus': '#f5f5f5',

          'primary-content': '#ffffff',
          'neutral-content': '#181a2a',
          'base-content': '#39393d',
          'error-content': '#fcdee6',

          '--rounded-box': roundedBox,
          '--rounded-btn': roundedBtn,
          '--rounded-badge': roundedBadge,
          '--animation-btn': animationBtn,
          '--animation-input': animationInput,
          '--btn-text-case': btnTextCase,
          '--btn-focus-scale': btnFocusScale,
          '--border-btn': borderBtn,
          '--tab-border': tabBorder,
          '--tab-radius': tabRadius,
        },
      },
    ],
  },
};
