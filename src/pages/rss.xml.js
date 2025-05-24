import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  return rss({
    title: 'Christo Languages Blog',
    description: 'Language learning tips, strategies, and insights from a polyglot coach. Cut the clutter and master a language.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        // Optional: include updated date if available
        ...(post.data.updatedDate && { 
          customData: `<updated>${post.data.updatedDate.toISOString()}</updated>` 
        }),
      })),
    customData: `<language>en-us</language>`,
  });
} 