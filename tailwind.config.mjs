/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        discord: {
          blurple: '#5865F2',
          green: '#57F287',
          bg: '#313338',
          secondary: '#2B2D31',
          tertiary: '#1E1F22',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: '#e2e8f0',
              backgroundColor: '#1E1F22',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1E1F22',
              color: '#e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}