const js = require('@eslint/js');
const tseslint = require('typescript-eslint');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended,

  // TypeScript setup
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // 🔥 Disable base rule
      'no-unused-vars': 'off',

      // ✅ Enable TS version
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
  // CommonJS config files
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
  },

  {
    ignores: ['dist'],
  },
];
