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
      },
      screens: {
        dark: { raw: '(prefers-color-schema: dark)' }
      }
    }
  },
  variants: {},
  plugins: []
};
