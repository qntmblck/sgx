import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import scrollbarHide from 'tailwind-scrollbar-hide'

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
        // Reemplazamos 'Figtree' por 'Segoe UI'
        sans: ['"Segoe UI"', ...defaultTheme.fontFamily.sans],
      },

      // Agregamos la imagen de fondo del Hero como utilería de Tailwind
      backgroundImage: {
        'hero-cover': "url('/img/hero.webp?v=2')",
      },

      // Permite animar gradientes y escalarlos al doble de tamaño
      backgroundSize: {
        '200%': '200% 200%',
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
        },
        // Nuevo keyframe para desplazar el gradiente horizontalmente
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        carousel: 'carousel 40s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 1.2s ease-out forwards',
        // Nueva animación de gradiente
        'gradient-x': 'gradient-x 10s ease infinite',
      },
      transformOrigin: {
        center: 'center',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },

  plugins: [
    forms,
    scrollbarHide,
  ],
}
