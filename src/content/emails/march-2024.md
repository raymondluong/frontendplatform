---
title: '📖 March 2024: Storybook 8, Interaction to Next Paint, Rolldown, JSR'
description: 'March edition of Front End Platform Monthly, featuring Storybook 8, Interaction to Next Paint, Rolldown, JSR, and more.'
pubDate: 'Mar 30, 2024'
---

Hey everyone!

Hope March was awesome for you, and the leap forward for daylight savings time wasn't too disruptive. On my end this month, I officially launched the [frontendplatform.dev](http://frontendplatform.dev) website and kicked off the blog, starting with two new posts: [What is Front End Platform Engineering?](https://frontendplatform.dev/blog/overview/) and [Front End Platform Engineering Specializations](https://frontendplatform.dev/blog/specializations/). Eager for your thoughts, so dive in when you have a moment!

Now, let's rewind and chat about the cool stuff that went down in March.

## March Highlights

- [**Storybook 8 is finally here!**](https://storybook.js.org/blog/storybook-8/) The next major version comes with a bunch of new features, most notably the [new Visual Tests add-on](https://www.chromatic.com/blog/visual-tests-addon/). This new workflow accelerates your development feedback cycle by removing the need to wait for CI. Instead, you can run visual tests locally. Version 8 also includes improved controls autogeneration (docgen), rearchitected Vite support, and faster test builds.
- There’s a new core web vital in town: [**Interaction to Next Paint (INP)**](https://web.dev/blog/inp-cwv-launch). INP is the successor to First Input Delay (FID). Both assess responsiveness, but FID only measures the _first_ interaction on a page while INP considers _all_ page interactions. In other words, FID is for load responsiveness whereas INP is for overall responsiveness. [Learn more about INP here.](https://web.dev/articles/inp)
- We’re officially in the era of X but written in Rust. The latest development is <a target="_blank" rel="noopener noreferrer" class="notion-link-token notion-focusable-token notion-enable-hover" href="https://twitter.com/rolldown_rs/status/1766013359932297275?s=20"><strong>Rolldown</strong></a>, a lightning fast JavaScript bundler that is compatible with the Rollup API. <a target="_blank" rel="noopener noreferrer" class="notion-link-token notion-focusable-token notion-enable-hover" href="https://twitter.com/jpschroeder/status/1766115866859446477">This tweet from Justin Schroeder</a> explains the significance of Rolldown. Vite fans, build tool nerds, and front end infra engineers pay attention 👀
- From the team at Deno comes [**JSR - the JavaScript Registry**](https://deno.com/blog/jsr_open_beta), a new package registry that aims to address the growing gaps with npm and modern web development practices. JSR is made for TypeScript + ESModules and works with any runtime.

## Tooling Roundup

- 🥳 [Happy 3rd birthday Astro](https://twitter.com/astrodotbuild/status/1768646279230279849)! Astro had a busy month, releasing [version 4.5,](https://astro.build/blog/astro-450/) [Astro DB](https://astro.build/blog/astro-db/), and an [updated developer portal](https://astro.build/blog/dev-portal/).
- [Tailwind 4 enters the alpha stage](https://tailwindcss.com/blog/tailwindcss-v4-alpha) with a new engine that’s optimized for speed and an integration with Lightning CSS.
- [TypeScript 5.4 is here](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/), with smarter control-flow analysis in closures, the `NoInfer` utility type, types for `Object.groupBy` and `Map.groupBy`, and more.
- [Shadcn launches Blocks](https://ui.shadcn.com/blocks), ready-made layouts and page components that are fully responsive, accessible, and composable.
- [Biome 1.6](https://biomejs.dev/blog/biome-v1-6/) is shipped, including new lint rules, partial support for Astro, Svelte, and Vue files, support for `biome.jsonc` as a configuration file, an easier migration path from Prettier, and more.

## Articles and Guides

### Design Systems, CSS, and Accessibility

- [On popover accessibility: what the browser does and doesn’t do](https://hidde.blog/popover-accessibility/)
- [Some little ways I’m using CSS :has() in the real world](https://piccalil.li/blog/some-little-ways-im-using-css-has-in-the-real-world/)
- [On disabled and aria-disabled attributes](https://kittygiraudel.com/2024/03/29/on-disabled-and-aria-disabled-attributes/)
- [What’s next for a global design system?](https://bradfrost.com/blog/post/whats-next-for-a-global-design-system/)

### Frameworks

- [Navigating the future of frontend](https://frontendmastery.com/posts/navigating-the-future-of-frontend/)
- [Comparing JavaScript Frameworks part 1: templates](https://www.maartenhus.nl/blog/comparing-javascript-frameworks-part-1-templates/)

### Infrastructure, Performance, and Testing

- [What's the difference between JavaScript engines and JavaScript runtimes?](https://humanwhocodes.com/blog/2024/03/javascript-engines-runtimes/)
- [How web bloat impacts users with slow devices](https://danluu.com/slow-device/)
- [Optimizing JavaScript for fun and for profit](https://romgrk.com/posts/optimizing-javascript)
- [Best practices for writing tests with React Testing Library](https://claritydev.net/blog/improving-react-testing-library-tests)

### Careers

- [The quiet, pervasive devaluation of frontend](https://joshcollinsworth.com/blog/devaluing-frontend)
- [A collection of Design Engineers](https://maggieappleton.com/design-engineers)

### In the News

- [Marking the Web’s 35th Birthday: An Open Letter](https://webfoundation.org/2024/03/marking-the-webs-35th-birthday-an-open-letter/)
- [Apple says iOS 17.4 won’t remove Home Screen web apps in the EU after all](https://9to5mac.com/2024/03/01/apple-home-screen-web-apps-ios-17-eu/)
- [The Browser Company raises $50M at a $550M valuation](https://techcrunch.com/2024/03/21/the-browser-company-raises-50-million-at-550-million-valuation/)

## Miscellaneous

- [Tailwind is hiring a Design Engineer and a Staff Engineer.](https://tailwindcss.com/blog/hiring-a-design-engineer-and-staff-engineer) Excited by the opportunity to accelerate the buzziest CSS framework? Consider applying.
- [ReactConf is back in 2024!](https://conf.react.dev/) Happening May 15-16 in Nevada. The ticket lottery is closed, but you can still register to get access to the free livestream.
- [Devin, an autonomous AI software engineer, has arrived.](https://www.cognition-labs.com/introducing-devin) [Gergely Orosz, from The Pragmatic Engineer](https://blog.pragmaticengineer.com/the-ai-developer/), thinks it’s largely media-driven hype necessitated by Microsoft’s dominance in the space. [Ryan Peterman from The Developing Dev](https://www.developing.dev/p/how-ai-will-affect-your-career) recommends focusing on learning higher-level behaviors instead of what can easily be automated.. What do you think? Does this make you worry about job security?
