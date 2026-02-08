import { getCollection } from 'astro:content'
import { Feed } from 'feed'

export async function GET() {
  let siteUrl = 'https://foos.ca'

  let feed = new Feed({
    title: 'The Foos Blog',
    description:
      'Stay informed with product updates, company news, and insights on how to sell smarter at your company.',
    author: {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
    },
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/blog/feed.xml`,
    },
  })

  let posts = await getCollection('blog')

  posts
    .sort(
      (a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
    )
    .forEach((post) => {
      feed.addItem({
        title: post.data.title,
        id: post.slug,
        link: `${siteUrl}/blog/${post.slug}`,
        content: post.data.excerpt,
        image: post.data.mainImage
          ? `${siteUrl}${post.data.mainImage.src}`
          : undefined,
        author: [{ name: post.data.author.name }],
        contributor: [{ name: post.data.author.name }],
        date: new Date(post.data.publishedAt),
      })
    })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
