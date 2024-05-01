---
title: '🌸 April 2024: ESLint 9, React 19 and TS 5.5 Betas, Signals'
description: 'April edition of Front End Platform Monthly, featuring ESLint 9, React 19 and TypeScript 5.5 Betas, JavaScript Signals, and more.'
pubDate: 'Apr 31, 2024'
---
Hey front end platform fam!

Hope you all had a lovely April. I’m definitely noticing myself getting happier as the days get longer. On the front end platform side of things, I worked on a tooling overview page for the site. You can get a sense of the current ecosystem and browse by category. [Check it out here](https://frontendplatform.dev/tooling/).

Now let’s review what happened this past month.

## April Highlights

- [The next major version of ESLint is here.](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/) ESLint v9 makes the new flat config the default. Check out the [migration guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0) for the full list of breaking changes.
- The React team released [the Beta for React 19](https://react.dev/blog/2024/04/25/react-19). There’s several new hooks and APIs, such as `use`, `useOptimistic`, `useActionState`, as well as support for Server Components. React 19 also improves existing APIs, e.g. simplifying `forwardRef` and context providers. Check out the [React 19 Beta upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) as well as [the `types-react-codemod` repo](https://github.com/eps1lon/types-react-codemod/) for codemods. The React team recommends [upgrading to 18.3](https://github.com/facebook/react/blob/main/CHANGELOG.md#1830-april-25-2024) as an intermediate step, which adds warnings for deprecated APIs.
- April was a big month for Betas. On top of the React 19 Beta, we also have the [TypeScript 5.5 Beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/) which brings us the much awaited [Inferred Type Predicates](https://github.com/microsoft/TypeScript/pull/57465) feature ([deep dive on the making of this feature](https://effectivetypescript.com/2024/04/16/inferring-a-type-predicate/)). 5.5 also disables a number of options that were marked as [deprecated in 5.0](https://github.com/microsoft/TypeScript/issues/51909). They will do nothing starting 5.5 and [be removed entirely in 6.0](https://github.com/microsoft/TypeScript/issues/51000).
- There’s a new [TC39 proposal for JavaScript Signals](https://github.com/tc39/proposal-signals) that aims to provide infrastructure for managing reactive application state. Give it a try in this [JS playground](https://jsbin.com/safoqap/6/edit?html,output).

## Tooling Roundup

- [Biome 1.7](https://biomejs.dev/blog/biome-v1-7/) adds the ability to easily migrate from ESLint in a single command.
- [Bun 1.1](https://bun.sh/blog/bun-v1.1) brings support for Windows.
- [Astro 4.7](https://astro.build/blog/astro-470/) brings improvements to the Dev Toolbar API and makes it easier to keep your project up-to-date.
- [TC39 advanced several proposals](https://twitter.com/robpalmer2/status/1778836605341446634).
- Node released [version 22](https://nodejs.org/en/blog/announcements/v22-release-announce) as well as [security updates for 18, 20, and 21](https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2).
- Cypress adds new [accessibility features](https://www.cypress.io/blog/2024/02/16/introducing-cypress-accessibility).
- [Shadcn adds Lift Mode to Blocks](https://ui.shadcn.com/docs/changelog), which makes it easy to lift smaller components from blocks to copy and paste.
- [pnpm 9.0](https://twitter.com/pnpmjs/status/1780193331592486973) improves the lockfile format and resolution of peer dependencies.
- [There’s an open conversation on changes to configurations](https://github.com/typescript-eslint/typescript-eslint/discussions/8914) for the next major version of typescript-eslint.
- [Vitest 1.5](https://github.com/vitest-dev/vitest/releases/tag/v1.5.0) is released as well as [a new official Vitest VS Code extension.](https://twitter.com/vitest_dev/status/1779835912517533744)
- [Stylelint 16.4](https://stylelint.io/changelog/#1640) adds `no-unknown-custom-media` and updates/fixes several existing rules.
- [React Native 0.74](https://reactnative.dev/blog/2024/04/22/release-0.74) adds Yoga 3.0, batched `onLayout` updates (New Architecture), and Yarn 3 as the default package manager for new projects.
- The [Tailwind playground](https://play.tailwindcss.com/cV1tZ4T9Ko?file=css) now has support for v4.
- [Deno 1.43](https://deno.com/blog/v1.43) improves language server performance.

## Articles and Guides

### HTML, Accessibility, and Design Systems

- [HTML `popover` Attribute](https://davidwalsh.name/html-popover-attribute)
- [HTML attributes vs DOM properties](https://jakearchibald.com/2024/attributes-vs-properties/)
- [Don’t use the maxlength attribute to stop users from exceeding the limit](https://adamsilver.io/blog/dont-use-the-maxlength-attribute-to-stop-users-from-exceeding-the-limit/)
- [Managing User Focus with `:focus-visible`](https://css-tricks.com/managing-user-focus-with-focus-visible/)
- [Demystifying Screen Readers: Accessible Forms & Best Practices](https://css-tricks.com/demystifying-screen-readers-accessible-forms-best-practices/)
- [Don’t put crap in the design system](https://bradfrost.com/blog/post/dont-put-crap-in-the-design-system/)

### CSS and Styling

- [An Interactive Guide to CSS Container Queries](https://ishadeed.com/article/css-container-query-guide/)
- [The Unreasonable Effectiveness of Inlining CSS](https://strikingloo.github.io/inlining-css)
- [Hardest Problem in Computer Science: Centering Things](https://tonsky.me/blog/centering/)
- [Cool queries](https://www.csscade.com/cool-queries)
- [Help Webkit invent CSS Grid Level 3, aka “Masonry” layout](https://webkit.org/blog/15269/help-us-invent-masonry-layouts-for-css-grid-level-3/) and [An alternative proposal for CSS masonry](https://developer.chrome.com/blog/masonry)
- [The Two-Tree Problem with Styling on the Web](https://danielnagy.me/posts/Post_jt4adn0o5bnr)
- [A primer on the cascade and specificity](https://piccalil.li/blog/a-primer-on-the-cascade-and-specificity/)
- [CSS Button Styles You Might Not Know](https://dbushell.com/2024/03/10/css-button-styles-you-might-not-know/)
- [Detect JavaScript Support in CSS](https://ryanmulligan.dev/blog/detect-js-support-in-css/)

### Performance and Testing

- [Deep Dive into Rspack and Webpack Tree Shaking](https://github.com/orgs/web-infra-dev/discussions/17)
- [Profile Node.js performance with the Performance panel](https://developer.chrome.com/docs/devtools/performance/nodejs)
- [Faster Connectivity !== Faster Websites](https://blog.jim-nielsen.com/2024/faster-bandwidth-and-websites/)
- [Improving our Jest execution time by 300%](https://www.camggould.com/posts/Jest-With-RTL-Is-Slow/)
- [Optimizing WebKit & Safari for Speedometer 3.0](https://webkit.org/blog/15249/optimizing-webkit-safari-for-speedometer-3-0/)

### Infrastructure and Architecture

- [The Least Worst Architecture](https://frontendatscale.com/issues/20/)
- [Deno: How we built JSR](https://deno.com/blog/how-we-built-jsr)
- [Fantastic Rewrites and How to Avoid Them](https://frontendatscale.com/issues/19/)
- [From the 80's to 2024 - how CI tests were invented and optimized](https://graphite.dev/blog/invention-of-modern-ci)

### Tooling

- [Trip report: Node.js collaboration summit (2024 London)](https://nodejs.org/en/blog/events/collab-summit-2024-london)
- [An intro to TSConfig for JavaScript Developers](https://deno.com/blog/intro-to-tsconfig)
- [How to write a code formatter](https://yorickpeterse.com/articles/how-to-write-a-code-formatter/)
- [The Cost of a Lint Rule](https://www.joshuakgoldberg.com/blog/the-cost-of-a-lint-rule/)
- [Upgrading jQuery: Working Towards a Healthy Web](https://blog.jquery.com/2024/04/17/upgrading-jquery-working-towards-a-healthy-web/)
- [What is Vite (and why is it so popular)?](https://blog.stackblitz.com/posts/what-is-vite-introduction/)
- [How we migrated the massive DefinitelyTyped repository from using a linter for formatting to the dprint formatter](https://www.joshuakgoldberg.com/blog/definitelyformatted/)
- [JSR is Not Another Package Manager](https://deno.com/blog/jsr-is-not-another-package-manager)
- [GitHub Actions: UI Improvements](https://github.blog/changelog/2024-04-30-github-actions-ui-improvements/)

### React

- [React Compiler & React 19](https://www.developerway.com/posts/react-compiler-soon)
- [CSS in React Server Components](https://www.joshwcomeau.com/react/css-in-rsc/)
- [How does useOptimistic work internally in React?](https://jser.dev/2024-03-20-how-does-useoptimisticwork-internally-in-react)

### Productivity and Documentation

- [Using GitHub Copilot in your IDE: Tips, tricks, and best practices](https://github.blog/2024-03-25-how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/)
- [Healthy Documentation](https://vadimkravcenko.com/shorts/proper-documentation/)
- [Open Source Security (OpenSSF) and OpenJS Foundations Issue Alert for Social Engineering Takeovers of Open Source Projects](https://openjsf.org/blog/openssf-openjs-alert-social-engineering-takeovers)

## Miscellaneous

- [Guest Writing for CSS-Tricks](https://css-tricks.com/guest-writing-for-css-tricks/)
- [Share your thoughts on the future of Node.js](https://twitter.com/nodejs/status/1783226404609327160)
- [Vite San Francisco Meetup on May 9](https://lu.ma/vite)
- [StackBlitz San Francisco Meetup on May 13](https://lu.ma/stackblitz-at-github)
