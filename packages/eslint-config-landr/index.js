module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['import'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        eqeqeq: 'error',
        'array-callback-return': 'error',
        'new-cap': [
            'error',
            {
                capIsNewExceptions: [
                    'Selector', // Imported from testcafe
                    'WhenUserReady', // Decorator
                ],
            },
        ],
        strict: ['error', 'global'],
        'no-undef': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
        curly: 'error',
        'eol-last': 'error',
        'guard-for-in': 'error',
        'no-labels': 'error',
        'no-caller': 'error',
        'no-bitwise': 'error',
        'no-console': ['error', { allow: ['debug', 'info', 'time', 'timeEnd', 'trace'] }],
        'no-new-wrappers': 'error',
        'no-debugger': 'error',
        'no-eval': 'error',
        'no-redeclare': 'error',
        'no-fallthrough': 'error',
        'no-return-await': 'error',
        'no-trailing-spaces': 'error',
        'no-var': 'error',
        'brace-style': 'error',
        'prefer-template': 'error',
        radix: 'error',
        'space-before-blocks': 'error',
        'prefer-destructuring': [
            'error',
            {
                array: false,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'import/order': ['error', { 'newlines-between': 'never' }],
        'prettier/prettier': 'warn',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier',
            ],
            plugins: ['@typescript-eslint'],
            rules: {
                'no-undef': 'off', // this rule returns false-positives with typescript files
                '@typescript-eslint/naming-convention': [
                    'warn',
                    {
                        selector: 'default',
                        format: ['camelCase'],
                    },
                    {
                        selector: 'property',
                        format: ['camelCase', 'UPPER_CASE'],
                        filter: {
                            regex: '^(utm_campaign|utm_content|utm_medium|utm_source|utm_term|utm_invalid|content_name|content_category|api_plan)$',
                            match: false,
                        },
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow',
                    },
                    {
                        selector: 'memberLike',
                        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                        leadingUnderscore: 'allow',
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                ],
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                // you must disable the base rule no-unused-vars as it can report incorrect errors
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'none',
                        ignoreRestSiblings: true,
                    },
                ],
            },
        },
    ],
};
