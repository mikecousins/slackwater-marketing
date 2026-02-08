/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/styles/tailwind.css',
}
