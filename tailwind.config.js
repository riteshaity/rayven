/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* SAP-blue inspired palette */
        sap: {
          50:  '#e5f6fd',
          100: '#b0e3f9',
          200: '#5ec8f2',
          300: '#00b1eb',   /* SAP gradient start */
          400: '#009ad9',
          500: '#007fc4',
          600: '#006eb8',
          700: '#0069b4',   /* SAP gradient end   */
          800: '#005a9e',
          900: '#004280',
        },
        /* Dark backgrounds */
        ink: {
          50:  '#1e3352',
          100: '#152840',
          200: '#0e1e30',
          300: '#091628',
          400: '#060f1e',
          500: '#040c19',
          600: '#030914',
          700: '#02070f',
          800: '#01050b',
          900: '#010408',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sap-gradient': 'linear-gradient(135deg, #00b1eb 0%, #009ad9 21% , #007fc4 52%, #006eb8 79%, #0069b4 100%)',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,177,235,0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
