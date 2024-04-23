import { useState } from 'react';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  frameworks,
  buildTools,
  lintersAndFormatters,
  testing,
  styling,
  runtimes,
  packageManagers,
  designSystems,
} from './tools';
import { Button } from '../ui/button';

const categories = [
  'Framework',
  'Build Tool',
  'Design System',
  'Testing',
  'Styling',
  'Linter/formatter',
  'Package Manager',
  'Runtime',
] as const;

const categoryTitles = {
  'Build Tool': 'Build Tools',
  'Design System': 'Design Systems',
  Framework: 'Frameworks',
  'Linter/formatter': 'Linters & Formatters',
  'Package Manager': 'Package Managers',
  Runtime: 'Runtimes',
  Testing: 'Testing',
  Styling: 'Styling',
};

const categoryDescriptions = {
  Framework:
    'Frameworks offer structured environments for building web applications, equipped with pre-built components and tools to simplify development. The right framework for a project depends on the specific needs of the application, such as interactivity level, content volume, and performance requirements. For interactive applications, choose a framework with robust features and a strong ecosystem. For simpler, static sites, a lighter framework that optimizes for quick loading and ease of use may be more suitable. When selecting a framework, consider factors like project requirements, developer experience, and community support to ensure efficient development and maintenance.',
  'Build Tool':
    'Build tools automate the process of turning source code into production-ready scripts and stylesheets by handling tasks such as bundling, minification, and transpilation. They help optimize development workflows and ensure that applications perform efficiently on the web.',
  'Design System':
    'Design systems consist of reusable components and standards for design and code. These systems enable teams to build consistent, scalable, and high-quality user interfaces across products.',
  Testing:
    'Testing tools help ensure the quality and functionality of web applications by automating the testing process. These tools can simulate user interactions, check code for errors, and verify that components behave as expected under various conditions.',
  Styling:
    'Styling tools assist developers in designing and managing the look and feel of web applications. They range from CSS frameworks that provide ready-to-use stylesheets to preprocessors and libraries that offer advanced features like variables and mixins.',
  'Linter/formatter':
    'Linters and formatters are tools that analyze code for potential errors, style inconsistencies, and enforce coding standards. They help maintain code quality, enhance readability, and reduce bugs in development.',
  'Package Manager':
    'Package managers simplify the process of managing project dependencies and libraries. They automate the installation, upgrading, and configuration of packages, making it easy to manage complex projects.',
  Runtime:
    'Runtimes are environments where JavaScript code executes. They provide the necessary infrastructure to run JavaScript code outside of browsers, such as on servers or in other computing environments.',
};

const categoryItems = {
  Framework: frameworks,
  'Build Tool': buildTools,
  'Design System': designSystems,
  Testing: testing,
  Styling: styling,
  Runtime: runtimes,
  'Package Manager': packageManagers,
  'Linter/formatter': lintersAndFormatters,
};

type Category = (typeof categories)[number];

type Tool = {
  name: string;
  description: string;
  url: string;
  category: Category;
  tags?: string[];
  authorFavorite?: boolean;
};

const tools = [
  ...frameworks,
  ...buildTools,
  ...lintersAndFormatters,
  ...testing,
  ...styling,
  ...runtimes,
  ...packageManagers,
  ...designSystems,
] as Tool[];

export const ToolingPageContent = () => {
  const [search, setSearch] = useState('');
  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()),
  );
  const isSearching = search.length > 0;
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5">
        <Input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2"
        />
        <div className="flex gap-2 items-center flex-wrap">
          <span className="text-sm text-muted-foreground">Jump to:</span>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                document.getElementById(category)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              variant="secondary"
              size="sm"
            >
              {categoryTitles[category]}
            </Button>
          ))}
        </div>
      </div>
      {isSearching ? (
        <>
          <p className="text-sm text-muted-foreground my-5">
            Showing {filteredTools.length}{' '}
            {filteredTools.length === 1 ? 'tool' : 'tools'} matching your search
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolingCard key={tool.name} tool={tool} showCategory />
            ))}
          </div>
        </>
      ) : (
        categories.map((category) => {
          const title = categoryTitles[category];
          const items = categoryItems[category] as Tool[];
          items.sort((a, b) => {
            // Put author favorite first then sort by name
            if (a.authorFavorite && !b.authorFavorite) return -1;
            if (!a.authorFavorite && b.authorFavorite) return 1;
            return a.name.localeCompare(b.name);
          });
          return (
            <section
              key={category}
              id={category}
              className="space-y-5 my-10 sm:scroll-mt-20"
            >
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="text-muted-foreground">
                {categoryDescriptions[category]}
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tool) => (
                  <ToolingCard
                    key={tool.name}
                    tool={tool}
                  />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};

type ToolingCardProps = {
  tool: Tool;
  showCategory?: boolean;
};
const ToolingCard = ({ tool, showCategory }: ToolingCardProps) => {
  const { name, description, url, category, authorFavorite } = tool;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-rows-subgrid group-hover:text-primary block p-6 group relative rounded-lg border shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h2 className="font-heading text-2xl">{name}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {showCategory && (
            <Badge radius="md" variant="default" className="capitalize">
              {category}
            </Badge>
          )}
          {authorFavorite && (
            <Badge radius="md" variant="outline">
              ⭐ Author Favorite
            </Badge>
          )}
        </div>
      </div>
    </a>
  );
};
