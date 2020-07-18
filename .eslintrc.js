module.exports = {
  extends: './node_modules/kcd-scripts/eslint.js',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-no-literals': ['error', { noStrings: true }],
  },
  settings: {
    'import/no-unresolved': 2,
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
      'babel-module': {
        root: ['./src'],
        alias: {
          src: './src',
          components: 'src/components',
          constants: 'src/constants',
          hooks: 'src/hooks',
          images: 'src/images',
          modules: 'src/modules',
          pages: 'src/pages',
          schemas: 'src/schemas',
          services: 'src/services',
          styles: 'src/styles'
        },
      },
    },
  },
}
