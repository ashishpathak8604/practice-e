import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            animation: {
              marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
              marquee: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
            },
          },
        },
      },
    }),
  ],
})
