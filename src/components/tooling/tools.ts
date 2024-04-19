export const tools = [
  {
    name: 'React',
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    url: 'https://reactjs.org/',
    tags: ['Framework'],
  },
  {
    name: 'Vue',
    description:
      ' An approachable, performant and versatile framework for building web user interfaces.',
    url: 'https://vuejs.org/',
    tags: ['Framework'],
  },
  {
    name: 'Angular',
    description:
      'Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.',
    url: 'https://angular.io/',
    tags: ['Framework'],
  },
  {
    name: 'Svelte',
    description:
      "Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.",
    url: 'https://svelte.dev/',
    tags: ['Framework'],
  },
  {
    name: 'Vite',
    description:
      'A build tool that aims to provide a faster and leaner development experience for modern web projects.',
    url: 'https://vitejs.dev/',
    tags: ['Bundler'],
    authorFavorite: true,
  },
  {
    name: 'Webpack',
    description:
      'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.',
    url: 'https://webpack.js.org/',
    tags: ['Bundler'],
  },
  {
    name: 'Rollup',
    description:
      'Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.',
    url: 'https://rollupjs.org/',
    tags: ['Bundler'],
  },
  {
    name: 'Snowpack',
    description:
      "Snowpack is a lightning-fast frontend build tool, designed to leverage JavaScript's native module system (known as ESM).",
    url: 'https://www.snowpack.dev/',
    tags: ['Bundler'],
  },
  {
    name: 'Turbopack',
    description:
      'Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust.',
    url: 'https://turbo.build/pack',
    tags: ['Bundler', 'Rust'],
  },
  {
    name: 'ESBuild',
    description: 'An extremely fast bundler for the web',
    url: 'https://esbuild.github.io/',
    tags: ['Bundler'],
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    url: 'https://www.typescriptlang.org/',
    tags: ['Language'],
  },
  {
    name: 'Babel',
    description:
      "Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.",
    url: 'https://babeljs.io/',
    tags: ['Compiler'],
  },
  {
    name: 'SWC',
    description:
      'SWC is an extensible Rust-based platform for the next generation of fast developer tools. SWC can be used for both compilation and bundling.',
    url: 'https://swc.rs/',
    tags: ['Compiler', 'Rust'],
  },
  {
    name: 'ESLint',
    description:
      'ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.',
    url: 'https://eslint.org/',
    tags: ['Linter'],
    authorFavorite: true,
  },
  {
    name: 'Prettier',
    description: 'An opinionated code formatter',
    url: 'https://prettier.io/',
    tags: ['Formatter'],
  },
  {
    name: 'TypeScript ESLint',
    description:
      'The tooling that enables ESLint and Prettier to support TypeScript',
    url: 'https://typescript-eslint.io/',
    tags: ['Linter', 'Formatter'],
  },
  {
    name: 'Biome',
    description:
      'A toolchain for web projects, aimed to provide functionalities to maintain them. Biome offers formatter and linter, usable via CLI and LSP.',
    url: 'https://biomejs.dev/',
    tags: ['Linter', 'Formatter', 'Rust'],
  },
  {
    name: 'Jest',
    description:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
    url: 'https://jestjs.io/',
    tags: ['Testing'],
  },
  {
    name: 'Cypress',
    description:
      'With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.',
    url: 'https://www.cypress.io/',
    tags: ['Testing'],
  },
  {
    name: 'Vitest',
    description: 'Next generation testing framework powered by Vite.',
    url: 'https://vitest.dev/',
    tags: ['Testing'],
  },
  {
    name: 'Storybook',
    description:
      'Storybook is a frontend workshop for building UI components and pages in isolation.',
    url: 'https://storybook.js.org/',
    tags: ['Testing'],
    authorFavorite: true,
  },
  {
    name: 'Chromatic',
    description:
      'Chromatic is a visual testing & review tool that scans every possible UI state across browsers to catch visual and functional bugs.',
    url: 'https://www.chromatic.com/',
    tags: ['Testing'],
  },
  {
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces.',
    url: 'https://tailwindcss.com/',
    tags: ['CSS'],
  },
  {
    name: 'PostCSS',
    description: 'A tool for transforming CSS with JavaScript plugins',
    url: 'https://postcss.org/',
    tags: ['CSS'],
  },
  {
    name: 'Deno',
    description:
      'Deno is the open-source JavaScript runtime for the modern web. Built on web standards with zero-config TypeScript, unmatched security, and a complete built-in toolchain, Deno is the easiest, most productive way to JavaScript.',
    url: 'https://deno.land/',
    tags: ['Runtime'],
  },
  {
    name: 'Node.js',
    description:
      'Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.',
    url: 'https://nodejs.org/',
    tags: ['Runtime'],
  },
  {
    name: 'Bun',
    description:
      'Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one.',
    url: 'https://bun.sh/',
    tags: ['Runtime'],
  },
  {
    name: 'npm',
    description:
      'npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.',
    url: 'https://www.npmjs.com/',
    tags: ['Package Manager'],
  },
  {
    name: 'Yarn',
    description:
      'Yarn is a package manager that doubles down as project manager.',
    url: 'https://yarnpkg.com/',
    tags: ['Package Manager'],
  },
  {
    name: 'pnpm',
    description: 'Fast, disk space efficient package manager',
    url: 'https://pnpm.io/',
    tags: ['Package Manager'],
  },
  {
    name: 'JSR',
    description:
      'The open-source package registry for modern JavaScript and TypeScript.',
    url: 'https://jsr.io/',
    tags: ['Package Manager', 'Rust'],
  },
  {
    name: 'Radix UI',
    description:
      'An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.',
    url: 'https://www.radix-ui.com/',
    tags: ['Design System', 'Headless UI'],
  },
  {
    name: 'shadcn',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    url: 'https://ui.shadcn.com/',
    tags: ['Design System'],
  },
  {
    name: 'React Aria',
    description:
      'Craft world-class accessible components with custom styles. Over 40 components with built-in behavior, adaptive interactions, top-tier accessibility, and internationalization out of the box, ready for your styles.',
    url: 'https://react-spectrum.adobe.com/react-aria/',
    tags: ['Design System', 'Headless UI'],
  },
  {
    name: 'Material UI',
    description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
    url: 'https://mui.com/material-ui/',
    tags: ['Design System'],
  }
];
