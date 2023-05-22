/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/*/.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/*/.{js,ts,jsx,tsx}',
    './components/*/.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/*/.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '8px',
      sm: '12px',
      md: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
      '4xl': '26px',
      '5xl': '32px',
      '6xl': '48px',
    },
    colors: {
      black: '#000',
      white: '#ffffff',
      'purple-900': '#171033',
      'purple-800': '#150A3E',
      'purple-700': '#2E235C',
      'purple-500': '#4D3B94',
      'purple-400': '#6448BD',
      'purple-300': '#7C55E6',
      'purple-100': '#F65CDB',
      'red-dark': '#B34946',
      red: '#FD6763',
      orange: '#FC9B59',
      yellow: '#FBFA80',
      green: '#75C540',
      'neutral-100': '#FFFFFF',
      'neutral-300': '#E8EEFA',
      'neutral-500': '#D0CBE2',
      'neutral-700': '#A6A1BC',
      'neutral-900': '#9993AF',
      gradient: 'linear-gradient(180deg, #E8EEFA 0%, #ffffff 100%)',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['omnes-georgian'],
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      spacing: {
        '3p': '3px',
        30: '124px',
        29: '118px',
      },
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      width: {
        'full-120': '120%',
        'full-140': '140%',
      },
      fontWeight: {
        normal: 500,
        semibold: 600,
        bold: 700,
        bolder: 900,
      },
      dropShadow: {
        '2xl-purple-300': '5px 5px 20px #4d3b94',
        text: '0px 3px 0px #2E235C',
      },
      borderRadius: {
        '8px': '8px',
        '4xl': '48px',
        '5xl': '60px',
      },
      backgroundImage: {
        spikes:
          'linear-gradient(-30deg, transparent 70%, #171033 75%), linear-gradient(30deg, transparent 70%, #171033 75%)',
        'gradient-000': 'linear-gradient(180deg, #ffffff 0%, #E8EEFA 100%)',
        'gradient-100': 'linear-gradient(90deg, #fd6763 0%, #fbfa80 50%, #ffffff 100%)',
        'gradient-300': 'linear-gradient(90deg, #00C8C8 0%, #8BD857 49%, #fbfa80 100%)',
        'gradient-500':
          'linear-gradient(90deg, #7c55e6 0%, #F65CDB 34%, #fd6763 65%, #fbfa80 100%)',
        'gradient-700': 'linear-gradient(180deg, #2E235C 70%, #4D3B94 100%)',
        'gradient-799': 'linear-gradient(173deg, #4D3B94 0%, #4D3B94 44%, #7C55E6 100%)',
        'gradient-800':
          'linear-gradient(197deg, #7C55E6 0%, #F65CDB 35%, #FD6763 63%, #FBFA80 100%)',
        'gradient-900':
          'linear-gradient(90deg, #2e235c 0%, #4d3b94 34%, #7c55e6 62%, #F65CDB 100%)',
        'gradient-999':
          'linear-gradient(180deg, #F65CDB -20%, #7c55e6 10%, #4d3b94 40%, #2e235c 50%, #2e235c 100%)',
      },
      backgroundSize: {
        small: '20px 10px',
      },
      content: {
        empty: ' ',
      },
      rotate: {
        15: '15deg',
        20: '20deg',
        30: '30deg',
      },
      screens: {
        '2sm': { max: '414px' },
        '3sm': { max: '375px' },
        xs: '320px',
        sm: '376px',
        md: '400px',
      },
      animation: {
        flip: 'flip 1s ease-in-out',
        spin: 'spin 1s linear infinite',
      },
      transitionProperty: {
        height: 'height',
      },
      keyframes: () => ({
        flip: {
          '0%': { transform: 'rotateY(0deg)', opacity: 0 },
          '100%': { transform: 'rotateY(720deg)', opacity: 1 },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }),
      clipPath: {
        zigzag: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
      },
      maxWidth: {
        '12char': '114px',
      },
      aspectRatio: {
        '1-1.15': '1 / 1.15',
        'collection-card': '2 / 1',
      },
      letterSpacing: {
        1.2: '1.2px',
      },
      grayscale: {
        50: '50%',
      },
    },
  },
};