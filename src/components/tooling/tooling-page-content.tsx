import { useState } from 'react';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { tools as toolsData } from './tools';

type Tool = {
  name: string;
  description: string;
  url: string;
  tags: ToolTag[];
  authorFavorite?: boolean;
};

const toolTagValues = [
  'Bundler',
  'Compiler',
  'CSS',
  'Design System',
  'Formatter',
  'Framework',
  'Headless UI',
  'Language',
  'Linter',
  'Package Manager',
  'Runtime',
  'Rust',
  'Testing',
] as const;

export type ToolTag = (typeof toolTagValues)[number];

const tools = toolsData as Tool[];
const sortedTools = tools.sort((a, b) => {
  if (a.authorFavorite && !b.authorFavorite) {
    return -1;
  }
  if (!a.authorFavorite && b.authorFavorite) {
    return 1;
  }
  return a.name.localeCompare(b.name);
});

export const ToolingPageContent = () => {
  const [search, setSearch] = useState('');
  const filteredTools = sortedTools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="space-y-5 mt-5">
      <div className="flex items-center gap-5">
        <Input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <ToolingCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
};

type ToolingCardProps = {
  tool: Tool;
};
const ToolingCard = (props: ToolingCardProps) => {
  const { name, description, url, tags, authorFavorite } = props.tool;
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
          {tags.map((tag) => (
            <Badge
              key={tag}
              radius="md"
              variant="default"
              className="capitalize"
            >
              {tag}
            </Badge>
          ))}
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
