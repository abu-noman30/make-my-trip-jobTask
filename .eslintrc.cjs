module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ecmaVersion: 2020,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        requirePragma: false,
        endOfLine: 'lf',
      },
    ],
  },
};
