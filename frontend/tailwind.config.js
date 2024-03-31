module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js'
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1240px',
        '2xl': '1440px'
      },
      colors: {
        brand: '#2FA84F',
        yellow: '#F3AA18',
        green: '#2FA84F',
        orange: '#FA5D50',
        red: '#FA5050',
        blue: '#367BF5'
      },
      boxShadow: {
        primary: '0px 4px 4px 4px rgba(236, 33, 38, 0.05)',
        secondary: '0px 2px 4px 4px rgba(236, 33, 38, 0.05)'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-sherif']
      },
      fontSize: {
        exs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '96px'
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      },
      lineHeight: {
        none: 1,
        shorter: 1.25,
        short: 1.375,
        normal: 1.5,
        tall: 1.625,
        taller: 2
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        'tight-md': '-0.015em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      }
    }
  }
};
