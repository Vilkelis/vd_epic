const internalPackages =
  '__mocks__|api|assets|components|constants|contexts|domain|hooks|i18n|store|utils'

const extendsList = {
  airbnb: ['airbnb/hooks', 'airbnb-typescript'],
  base: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  prettier: [
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier',
  ],
  react: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
}

const styleExtensions = '\\.style$|\\.s?css$'

const rules = {
  '@typescript-eslint/ban-ts-comment': 'off',

  // <condition> && <expression>:
  '@typescript-eslint/no-unused-expressions': 'off',

  '@typescript-eslint/no-unused-vars': ['error'],
  'hooks/sort': [
    2,
    {
      groups: [
        'useSelector',
        'useContext',
        'useState',
        'useDispatch',
        'useCallback',
      ],
    },
  ],

  // TODO - turn on 'import/no-cycle' after refactoring:
  'import/no-cycle': 'off',

  'import/no-unresolved': 'error',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'jsx-a11y/label-has-associated-control': 'off',
  'no-param-reassign': 'off', // - for redux-toolkit slice
  'no-redeclare': 'off', // - for typescript fn-overloading
  'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  'react/jsx-props-no-spreading': 'off',
  'react/no-unused-prop-types': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // External `react` packages come first.
        ['^react', `^(?!${internalPackages}|\\./|\\.\\./|\\u0000)`],

        // Imports w/o from.
        ['^\\u0000'],

        // Internal packages.
        [
          `^(${internalPackages})(?!${styleExtensions})`,

          // Parent imports. Put `..` last.
          '^\\.\\.(?!/?$)',
          '^\\.\\./?$',

          // Other relative imports. Put same-folder imports and `.` last.
          '^\\./(?=.*/)(?!/?$)',
          '^\\.(?!/?$)',
          '^\\./?$',
        ],

        // Style imports.
        [`^.+${styleExtensions}`],
      ],
    },
  ],
  'sort-imports': 'off',
  'sort-keys-fix/sort-keys-fix': 'warn',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    // react as first:
    ...extendsList.react,
    ...extendsList.base,
    // prettier at last:
    ...extendsList.prettier,
  ],
  // <required for airbnb-plugin>
  overrides: [
    {
      extends: [
        // react as first:
        ...extendsList.react,
        ...extendsList.airbnb,
        ...extendsList.base,
        // prettier at last:
        ...extendsList.prettier,
      ],
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        project: ['./tsconfig.json'],
      },
      rules: {
        ...rules,

        // remove 'JSX is not defined':
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*.js?(x)'],
      parser: 'babel-eslint',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        ...rules,

        // for require(...):
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // </required for airbnb-plugin>
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'sort-keys-fix',
    'simple-import-sort',
    'hooks',
    'import',
    'jest-dom',
    'prettier',
  ],
  root: true,
  rules,
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
