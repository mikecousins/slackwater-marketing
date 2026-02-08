import { getCollection } from 'astro:content'

export async function getPosts(
  startIndex: number,
  endIndex: number,
  category?: string,
) {
  let posts = await getCollection('blog')

  if (category) {
    posts = posts.filter((post) => post.data.category?.slug === category)
  }

  return posts
    .sort(
      (a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
    )
    .slice(startIndex, endIndex)
}

export async function getFeaturedPosts(quantity: number) {
  const posts = await getCollection('blog')
  return posts
    .filter((post) => post.data.featured)
    .sort(
      (a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
    )
    .slice(0, quantity)
}

export async function getPost(slug: string) {
  const posts = await getCollection('blog')
  return posts.find((post) => post.slug === slug)
}

export async function getCategories() {
  const posts = await getCollection('blog')
  const categoryMap = new Map<
    string,
    { title: string; slug: string; count: number }
  >()

  for (const post of posts) {
    if (post.data.category) {
      const existing = categoryMap.get(post.data.category.slug)
      if (existing) {
        existing.count++
      } else {
        categoryMap.set(post.data.category.slug, {
          title: post.data.category.title,
          slug: post.data.category.slug,
          count: 1,
        })
      }
    }
  }

  return Array.from(categoryMap.values())
}

export async function getPostsCount(category?: string) {
  const posts = await getCollection('blog')
  if (category) {
    return posts.filter((post) => post.data.category?.slug === category)
      .length
  }
  return posts.length
}
