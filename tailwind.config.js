import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-right': {
  '0%': { opacity: 0, transform: 'translateX(60px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
}
,
      },
      animation: {
        carousel: 'carousel 40s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 1.2s ease-out forwards',

      },
    },
  },

  plugins: [forms],
}
