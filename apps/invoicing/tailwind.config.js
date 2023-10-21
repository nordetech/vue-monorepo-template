import baseConfig from '@norde/ui/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [...baseConfig.content, '../../packages/ui/src/**/*.{vue,ts,tsx}'],
}
