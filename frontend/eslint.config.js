import eslint from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

export default [
  eslint.configs.recommended,
  reactRecommended,
  reactJsxRuntime,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactRecommended.plugins.react,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      indent: ['warn', 2],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
