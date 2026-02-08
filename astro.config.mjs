import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://foos.ca',
  output: 'static',
  integrations: [react(), mdx(), sitemap()],
})
