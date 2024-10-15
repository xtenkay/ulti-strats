import { visit } from 'unist-util-visit';

export default function toc() {
  return (tree: any, file: any) => {
    const headings: { depth: number; value: string; id: string }[] = [];

    visit(tree, 'heading', (node) => {
      const textNode = node.children.find((n: any) => n.type === 'text');
      if (textNode) {
        // Assuming your headings might have custom IDs defined, e.g., `### My Heading {#custom-id}`
        const idNode = node.children.find((n: any) => n.type === 'html');
        const id = idNode ? idNode.value.match(/id="(.+?)"/)[1] : textNode.value.toLowerCase().replace(/\s+/g, '-');
        headings.push({
          depth: node.depth,
          value: textNode.value,
          id,
        });
      }
    });

    // Attach TOC data to the VFile data object for access in Astro components
    file.data.toc = headings;
  };
}
