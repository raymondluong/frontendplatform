export const frameworks = [
  {
    name: 'React',
    description:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    url: 'https://reactjs.org/',
    category: 'Framework',
  },
  {
    name: 'Vue',
    description:
      ' An approachable, performant and versatile framework for building web user interfaces.',
    url: 'https://vuejs.org/',
    category: 'Framework',
  },
  {
    name: 'Angular',
    description:
      'Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.',
    url: 'https://angular.io/',
    category: 'Framework',
  },
  {
    name: 'Svelte',
    description:
      "Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.",
    url: 'https://svelte.dev/',
    category: 'Framework',
  },
  {
    name: 'Astro',
    description:
      "The web framework for content-driven websites. Astro powers the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between.",
    url: 'https://astro.build/',
    category: 'Framework',
    authorFavorite: true,
  },
  {
    name: 'Solid',
    description:
      'Solid is a declarative JavaScript library for creating user interfaces. Instead of using a Virtual DOM, it compiles its templates to real DOM nodes and updates them with fine-grained reactions.',
    url: 'https://www.solidjs.com/',
    category: 'Framework',
  },
  {
    name: 'Next',
    description:
      "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    url: 'https://nextjs.org/',
    category: 'Framework',
  },
  {
    name: 'Nuxt',
    description:
      "The Intuitive Vue Framework. Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.",
    url: 'https://nuxt.com/',
    category: 'Framework',
  },
];

export const buildTools = [
  {
    name: 'Vite',
    description:
      'A build tool that aims to provide a faster and leaner development experience for modern web projects.',
    url: 'https://vitejs.dev/',
    category: 'Build Tool',
    authorFavorite: true,
  },
  {
    name: 'Webpack',
    description:
      'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.',
    url: 'https://webpack.js.org/',
    category: 'Build Tool',
  },
  {
    name: 'Rollup',
    description:
      'Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.',
    url: 'https://rollupjs.org/',
    category: 'Build Tool',
  },
  {
    name: 'Rolldown (in development)',
    description:
      'Rolldown is a JavaScript bundler written in Rust intended to serve as the future bundler used in Vite. It provides Rollup-compatible APIs and plugin interface, but will be more similar to esbuild in scope.',
    url: 'https://rolldown.rs/',
    category: 'Build Tool',
  },
  {
    name: 'Snowpack',
    description:
      "Snowpack is a lightning-fast frontend build tool, designed to leverage JavaScript's native module system (known as ESM).",
    url: 'https://www.snowpack.dev/',
    category: 'Build Tool',
  },
  {
    name: 'Turbopack',
    description:
      'Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust.',
    url: 'https://turbo.build/pack',
    category: 'Build Tool',
    tags: ['Rust'],
  },
  {
    name: 'ESBuild',
    description: 'An extremely fast bundler for the web',
    url: 'https://esbuild.github.io/',
    category: 'Build Tool',
  },
  {
    name: 'Babel',
    description:
      "Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.",
    url: 'https://babeljs.io/',
    category: 'Build Tool',
  },
  {
    name: 'SWC',
    description:
      'SWC is an extensible Rust-based platform for the next generation of fast developer tools. SWC can be used for both compilation and bundling.',
    url: 'https://swc.rs/',
    category: 'Build Tool',
    tags: ['Rust'],
  },
  {
    name: 'Parcel',
    description:
      'Parcel is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.',
    url: 'https://parceljs.org/',
    category: 'Build Tool',
  }
];

export const lintersAndFormatters = [
  {
    name: 'ESLint',
    description:
      'ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.',
    url: 'https://eslint.org/',
    category: 'Linter/formatter',
    authorFavorite: true,
  },
  {
    name: 'Prettier',
    description: 'Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.',
    url: 'https://prettier.io/',
    category: 'Linter/formatter',
  },
  {
    name: 'TypeScript ESLint',
    description:
      'The tooling that enables ESLint and Prettier to support TypeScript.',
    url: 'https://typescript-eslint.io/',
    category: 'Linter/formatter',
  },
  {
    name: 'Stylelint',
    description:
      'A mighty CSS linter that helps you avoid errors and enforce conventions.',
    url: 'https://stylelint.io/',
    category: 'Linter/formatter',
  },
  {
    name: 'Biome',
    description:
      'A toolchain for web projects, aimed to provide functionalities to maintain them. Biome offers formatter and linter, usable via CLI and LSP.',
    url: 'https://biomejs.dev/',
    category: 'Linter/formatter',
    tags: ['Rust'],
  },
];

export const testing = [
  {
    name: 'Jest',
    description:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
    url: 'https://jestjs.io/',
    category: 'Testing',
  },
  {
    name: 'Cypress',
    description:
      'With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.',
    url: 'https://www.cypress.io/',
    category: 'Testing',
  },
  {
    name: 'Vitest',
    description: 'Next generation testing framework powered by Vite.',
    url: 'https://vitest.dev/',
    category: 'Testing',
  },
  {
    name: 'Storybook',
    description:
      'Storybook is a frontend workshop for building UI components and pages in isolation.',
    url: 'https://storybook.js.org/',
    category: 'Testing',
    authorFavorite: true,
  },
  {
    name: 'Chromatic',
    description:
      'Chromatic is a visual testing & review tool that scans every possible UI state across browsers to catch visual and functional bugs.',
    url: 'https://www.chromatic.com/',
    category: 'Testing',
  },
];

export const styling = [
  {
    name: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces.',
    url: 'https://tailwindcss.com/',
    category: 'Styling',
  },
  {
    name: 'PostCSS',
    description: 'A tool for transforming CSS with JavaScript plugins.',
    url: 'https://postcss.org/',
    category: 'Styling',
  },
  {
    name: 'Vanilla Extract',
    description:
      "Zero-runtime Stylesheets in TypeScript. Use TypeScript as your preprocessor. Write type‑safe, locally scoped classes, variables and themes, then generate static CSS files at build time.",
    url: 'https://vanilla-extract.style/',
    category: 'Styling',
  },
  {
    name: 'Lightning CSS',
    description:
      'An extremely fast CSS parser, transformer, and minifier written in Rust. Use it with Parcel, as a standalone library or CLI, or via a plugin with any other tool.',
    url: 'https://lightningcss.dev/',
    category: 'Styling',
  }
];

export const runtimes = [
  {
    name: 'Deno',
    description:
      'Deno is the open-source JavaScript runtime for the modern web. Built on web standards with zero-config TypeScript, unmatched security, and a complete built-in toolchain, Deno is the easiest, most productive way to JavaScript.',
    url: 'https://deno.land/',
    category: 'Runtime',
  },
  {
    name: 'Node.js',
    description:
      'Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.',
    url: 'https://nodejs.org/',
    category: 'Runtime',
  },
  {
    name: 'Bun',
    description:
      'Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one.',
    url: 'https://bun.sh/',
    category: 'Runtime',
  },
];

export const packageManagers = [
  {
    name: 'npm',
    description:
      'npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.',
    url: 'https://www.npmjs.com/',
    category: 'Package Manager',
  },
  {
    name: 'Yarn',
    description:
      'Yarn is a package manager that doubles down as project manager.',
    url: 'https://yarnpkg.com/',
    category: 'Package Manager',
  },
  {
    name: 'pnpm',
    description: 'Fast, disk space efficient package manager',
    url: 'https://pnpm.io/',
    category: 'Package Manager',
  },
  {
    name: 'JSR',
    description:
      'The open-source package registry for modern JavaScript and TypeScript.',
    url: 'https://jsr.io/',
    category: 'Package Manager',
    tags: ['Rust'],
  },
];

export const designSystems = [
  {
    name: 'Radix UI',
    description:
      'An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.',
    url: 'https://www.radix-ui.com/',
    category: 'Design System',
    tags: ['Headless UI'],
  },
  {
    name: 'shadcn',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    url: 'https://ui.shadcn.com/',
    category: 'Design System',
  },
  {
    name: 'React Aria',
    description:
      'Craft world-class accessible components with custom styles. Over 40 components with built-in behavior, adaptive interactions, top-tier accessibility, and internationalization out of the box, ready for your styles.',
    url: 'https://react-spectrum.adobe.com/react-aria/',
    category: 'Design System',
    tags: ['Headless UI'],
  },
  {
    name: 'Material UI',
    description:
      "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
    url: 'https://mui.com/material-ui/',
    category: 'Design System',
  },
  {
    name: 'Mantine',
    description: 'Build fully functional accessible web applications faster than ever – Mantine includes more than 100 customizable components and 50 hooks to cover you in any situation.',
    url: 'https://mantine.dev/',
    category: 'Design System',
  }
];
