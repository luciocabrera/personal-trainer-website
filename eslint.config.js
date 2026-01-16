import eslint from '@eslint/js';
import stylex from '@stylexjs/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import perfectionist from 'eslint-plugin-perfectionist';
import reactPlugin from 'eslint-plugin-react';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import security from 'eslint-plugin-security';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import localRules from './eslint-local-rules/build/index.js';

export default defineConfig(
  // 1. Core ESLint
  eslint.configs.recommended,
  // Add security recommended config here (good spot: after core but before styling/sorting)
  security.configs.recommended,
  unicorn.configs.recommended,

  // 2. React Hooks and Refresh
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.recommended,
  // Other configs...
  // Enable lint rules for React
  reactX.configs['recommended-typescript'],
  // Enable lint rules for React DOM
  reactDom.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // 3. Sorting (Perfectionist)
  perfectionist.configs['recommended-natural'],

  // 4. Formatting (Prettier - Must be last to disable conflicts)
  eslintConfigPrettier,

  // 5. React settings - Apply globally for all files
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // 6. JavaScript files configuration (for Node.js server files, etc.)
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },

  // 7. Custom Configuration, Plugins, and Overrides for TypeScript files
  {
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.ts', '**/*.tsx'], // Target specific files for TypeScript-aware rules
    languageOptions: {
      ecmaVersion: 'latest',
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: globals.browser,
      parserOptions: {
        // Enables powerful, type-aware rules across the project
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      // Only declaring local-rules as other plugins are loaded via configs
      '@stylexjs': stylex,
      'local-rules': localRules,
    },
    rules: {
      '@stylexjs/sort-keys': 'warn',

      // StyleX validation rules
      '@stylexjs/valid-styles': 'error',

      // Disable unicorn rules that conflict with our type-first standard
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Enforce type over interface
      '@typescript-eslint/consistent-type-exports': [
        'error',
        { fixMixedExportsWithInlineTypeSpecifier: false },
      ],
      // Stronger TypeScript enforcement
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: true, prefer: 'type-imports' },
      ],
      // Naming convention (excellent)
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          prefix: [
            'is',
            'should',
            'has',
            'can',
            'did',
            'will',
            'was',
            'are',
            'does',
          ],
          selector: [
            'variable',
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'parameter',
          ],
          types: ['boolean'],
        },
        {
          format: ['camelCase', 'PascalCase'], // Allow PascalCase for React component imports
          selector: 'import',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
        },
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'], // Allow PascalCase for React components
          selector: 'function',
        },
        { format: ['PascalCase'], selector: 'typeLike' },
      ],
      '@typescript-eslint/no-explicit-any': 'error', // Ban any completely
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn', // Warn instead of error
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',

      '@typescript-eslint/no-unsafe-member-access': 'error',

      '@typescript-eslint/no-unsafe-return': 'error',

      // '@typescript-eslint/strict-boolean-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
        },
      ],
      // Custom local rules
      'local-rules/destructuring-for-functions': 'warn',
      'local-rules/merge-duplicate-imports': 'error',
      'local-rules/no-inline-type-imports': 'error',

      'local-rules/no-type-definitions-in-components': 'error',
      'local-rules/single-component-export': 'error',
      'local-rules/type-suffix-naming': 'error',
      // General Rules
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Stricter: ban debug logs
      // Conflicts: Ensure core sorting is off for perfectionist
      'sort-imports': 'off',

      'unicorn/filename-case': 'off', // Allow PascalCase for React component files
      // Unicorn Configuration - Disable overly aggressive rules
      'unicorn/prevent-abbreviations': 'off', // Too aggressive, conflicts with common naming patterns
    },
  },

  // 8. Component files override - Disable security false positives for StyleX object property access
  {
    files: ['**/*.component.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          prefix: [
            'is',
            'should',
            'has',
            'can',
            'did',
            'will',
            'was',
            'are',
            'does',
          ],
          selector: ['variable', 'classProperty', 'typeProperty', 'parameter'],
          types: ['boolean'],
        },
        {
          custom: {
            match: true,
            regex: String.raw`^(:|@|>|\+|~|\[|\*|&|\.|#|-|[0-9]+%|[A-Z][a-zA-Z]+|[a-z][a-zA-Z0-9]*)`,
          },
          format: null, // Allow any format for object properties (including keyframe percentages and vendor prefixes)
          selector: 'objectLiteralProperty',
        },
        {
          format: ['camelCase', 'PascalCase'], // Allow PascalCase for React component imports
          selector: 'import',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
        },
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'], // Allow PascalCase for React components
          selector: 'function',
        },
        { format: ['PascalCase'], selector: 'typeLike' },
      ],
      'security/detect-object-injection': 'off',
    },
  },

  // 9. API type files override - Allow snake_case for database/API schema matching
  {
    files: ['**/*.api.ts', '**/services/**/*.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'snake_case'], // Allow snake_case for API/DB fields
          selector: 'typeProperty',
        },
        {
          format: ['PascalCase'],
          prefix: [
            'is',
            'should',
            'has',
            'can',
            'did',
            'will',
            'was',
            'are',
            'does',
          ],
          selector: ['variable', 'classProperty', 'parameter'],
          types: ['boolean'],
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'import',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
        },
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        { format: ['PascalCase'], selector: 'typeLike' },
      ],
    },
  },

  // 10. StyleX files override - Allow CSS pseudo-selectors and other CSS properties
  {
    files: ['**/*.stylex.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          prefix: [
            'is',
            'should',
            'has',
            'can',
            'did',
            'will',
            'was',
            'are',
            'does',
          ],
          selector: ['variable', 'classProperty', 'typeProperty', 'parameter'],
          types: ['boolean'],
        },
        {
          custom: {
            match: true,
            regex: String.raw`^(:|@|>|\+|~|\[|\*|&|\.|#|-|[0-9]+%|[A-Z][a-zA-Z]+|[a-z][a-zA-Z0-9]*)`,
          },
          format: null, // Allow any format for object properties in StyleX files (including keyframe percentages and vendor prefixes)
          selector: 'objectLiteralProperty',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'import',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
        },
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        { format: ['PascalCase'], selector: 'typeLike' },
      ],
      // StyleX dynamic styles require positional parameters (not object destructuring)
      'local-rules/destructuring-for-functions': 'off',

      'perfectionist/sort-object-types': 'off',
      // Disable perfectionist sorting for StyleX files - use StyleX's own sorting
      'perfectionist/sort-objects': 'off',

      // StyleX requires null (not undefined) for optional style values
      'unicorn/no-null': 'off',
    },
  },

  // 11. Vite config override - Allow configuration object properties
  {
    files: ['vite.config.ts', 'vite.config.js'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          prefix: [
            'is',
            'should',
            'has',
            'can',
            'did',
            'will',
            'was',
            'are',
            'does',
          ],
          selector: ['variable', 'classProperty', 'typeProperty', 'parameter'],
          types: ['boolean'],
        },
        {
          format: null, // Allow any format for Vite config objects (like @/, unstable_moduleResolution)
          selector: 'objectLiteralProperty',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'import',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
        },
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        { format: ['PascalCase'], selector: 'typeLike' },
      ],
    },
  },

  // 12. React Router config override - Allow configuration object properties
  {
    files: ['react-router.config.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          prefix: [
            'is',
            'should',
            'has',
            'can',
            'did',
            'will',
            'was',
            'are',
            'does',
          ],
          selector: ['variable', 'classProperty', 'typeProperty', 'parameter'],
          types: ['boolean'],
        },
        {
          format: null, // Allow any format for React Router config objects (like ssr, basename, etc.)
          selector: 'objectLiteralProperty',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'import',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
        },
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        { format: ['PascalCase'], selector: 'typeLike' },
      ],
    },
  },

  // 13. Root and route entry files override - Allow multiple exports for React Router
  {
    files: ['app/root.tsx', 'app/root/**/index.ts', 'app/routes/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },

  // 14. Ignores
  globalIgnores([
    '.react-router/',
    'build/',
    'out/',
    'dist/',
    'node_modules/',
    'eslint-local-rules/',
    'scripts/',
    'public/',
    'server.js',
    'server-express.js',
  ]),

  // 15. ESLint config file override - Allow null for format: null patterns
  {
    files: ['eslint.config.js', 'eslint.config.mjs'],
    rules: {
      'unicorn/no-null': 'off',
    },
  },

  // 16. i18n config file override - Third-party library config has its own property names
  {
    files: ['app/i18n.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },

  // 17. Root.tsx override - Third-party APIs like react-helmet use __html
  {
    files: ['app/root.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
        {
          format: null, // Allow __html and other special properties
          selector: 'objectLiteralProperty',
        },
      ],
    },
  },

  // 18. home.tsx override - Action responses have conventional naming (success)
  {
    files: ['app/routes/home.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
        {
          format: ['camelCase'], // Allow 'success' in type definitions
          selector: 'typeProperty',
        },
        {
          format: ['camelCase'], // Allow 'success' in object literals
          selector: 'objectLiteralProperty',
        },
      ],
      '@typescript-eslint/no-unnecessary-condition': 'off', // Allow actionData?.success
      '@typescript-eslint/no-unnecessary-type-conversion': 'off', // Allow .toString() for safety
    },
  },

  // 19. blog.$postId.tsx override - dangerouslySetInnerHTML requires __html
  {
    files: ['app/routes/blog.$postId.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
        {
          format: null, // Allow __html
          selector: 'objectLiteralProperty',
        },
      ],
      'unicorn/consistent-function-scoping': 'off', // renderMarkdown needs access to blog content
    },
  },

  // 20. Service files override - Database APIs have snake_case columns
  {
    files: ['app/services/**/*.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          selector: 'variable',
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: 'function',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
        {
          format: ['camelCase', 'snake_case'], // Allow snake_case for database columns
          selector: 'objectLiteralProperty',
        },
      ],
    },
  },

  // 21. Utils override - Allow null for database connections and process.exit in setup scripts
  {
    files: ['app/utils/**/*.ts'],
    rules: {
      'unicorn/no-document-cookie': 'off', // Allow document.cookie for language detection
      'unicorn/no-null': 'off', // Database connections can be null
      'unicorn/no-process-exit': 'off', // Allow process.exit in database setup
    },
  }
);
