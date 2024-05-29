module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser

  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 6,
    project: './tsconfig.json',
  },
  settings: {
    // If js files are not created in the same directory as ts files. To avoid "Unable to resolve path to module" ESLint error
    'import/resolver': {
      node: {
        paths: ['dist'], // js files directory
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': ['warn', { overrides: { constructors: 'no-public' } }],
    '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
    'class-methods-use-this': ['off'],
    'no-plusplus': ['off'],
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': ['warn'],
    'no-await-in-loop': ['warn'],
    'import/prefer-default-export': ['off'],
    'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],
    '@typescript-eslint/no-parameter-properties': ['off'],
    'no-empty-function': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'no-unused-expressions': ['off'],
    'no-return-assign': ['error', 'except-parens'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': ['warn'],
    'no-use-before-define': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': ['warn'],
    'react/no-unused-prop-types': ['warn'],
    'react/no-unknown-property': ['warn'],
    'react/destructuring-assignment': ['warn'],
    'prefer-arrow-callback': 'off',
    'jsx-a11y/media-has-caption': [
      0,
      {
        audio: ['Audio'],
      },
    ],
  },
};
