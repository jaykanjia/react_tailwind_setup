module.exports = {
  plugins: {
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
