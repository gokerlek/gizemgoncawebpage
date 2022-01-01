module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        layout: ['Catamaran', 'sans - serif', 'Open Sans'],
      },
      boxShadow: {
        menu: '0px 0px 96px rgba(0, 0, 0, 0.07), 0px 0px 12.0207px rgba(0, 0, 0, 0.035)',
        gallery:
          '0px 18px 80px rgba(0, 0, 0, 0.07),0px 2.31775px 10.0172px rgba(0, 0, 0, 0.035)',
      },
      gridTemplateRows: {
        layout: 'minmax(calc(100vh - 80px), max-content) minmax(330px, max-content)',
      },
      spacing: {
        '80px': '80px',
        top1: '85vh',
        right1: '5vw',
        menu: '900px',
      },
      colors: {
        ggz: '#009FB7',
        base: '#F5F5F5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
