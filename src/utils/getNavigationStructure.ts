import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const pagesDirectory = join(process.cwd(), 'src', 'pages');

interface NavigationItem {
  slug: string;
  title: string;
  nav_order?: number;
  children?: NavigationItem[];
}

function getTitleFromFrontmatter(file: string): string {
  const { data } = matter.read(file);
  return data.title;
}

function getFiles(directory: string, parentSlug = ''): NavigationItem[] {
  let items: NavigationItem[] = [];
  const entries = readdirSync(directory);

  entries.forEach((entry) => {
    const fullPath = join(directory, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      const children = getFiles(fullPath, `${parentSlug}/${entry}`);
      let directoryTitle = entry;
      // Try to find an index file to use its title
      const indexPath = join(fullPath, 'index.mdx');
      if (statSync(indexPath).isFile()) {
        directoryTitle = getTitleFromFrontmatter(indexPath) || entry;
      }
      if (children.length > 0) {
        items.push({
          slug: `${parentSlug}/${entry}`,
          title: directoryTitle,
          children,
        });
      }
    } else if (entry.endsWith('.mdx')) {
      const slug = `${parentSlug}/${entry.replace(/\.mdx$/, '')}`;
      if (slug !== `${parentSlug}/index`) { // Still process index files for their titles but don't list separately
        let title = entry.replace(/\.mdx$/, '').replace(/-/g, ' ').replace(/^\d+-/, ''); // Default title from filename
        // Extract title from frontmatter if available
        try {
          const frontmatterTitle = getTitleFromFrontmatter(fullPath);
          if (frontmatterTitle) {
            title = frontmatterTitle;
          }
        } catch (error) {
          console.error(`Error reading frontmatter from ${fullPath}: ${error}`);
        }
        items.push({
          slug,
          title,
          children: [],
        });
      }
    }
  });

  return items.filter(item => !item.slug.endsWith('/index')); // Exclude index itself from being listed
}

export function getNavigationStructure(): NavigationItem[] {
  return getFiles(pagesDirectory);
}
