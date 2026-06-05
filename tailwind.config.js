/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        canvas: {
          DEFAULT: '#F5F7FB', // bright near-white
          soft: '#EBEEF4',    // alt sections, clearly distinct
          panel: '#FFFFFF',
        },
        fg: {
          DEFAULT: '#14161C', // near-black primary text
          soft: '#4A4F5C',    // secondary
          faint: '#878D9C',   // tertiary / meta
        },
        accent: {
          DEFAULT: '#2563EB', // electric blue
          bright: '#1D4ED8',  // deeper, for emphasis on light
          deep: '#1E3A8A',
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
        marquee: 'marquee 32s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
