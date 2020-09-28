const plugin = require('tailwindcss/plugin');
const selectorParser = require('postcss-selector-parser');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      }
    }
  },
  variants: {
    textColor: ['dark', 'responsive', 'hover', 'focus'],
    backgroundColor: ['dark', 'responsive', 'hover', 'focus']
  },
  plugins: [
    plugin(function ({ addVariant, prefix }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser(selectors => {
            selectors.walkClasses(sel => {
              sel.value = `dark${separator}${sel.value}`;
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync(prefix('.scheme-dark '))
              );
            });
          }).processSync(selector);
        });
      });
    })
  ]
};
