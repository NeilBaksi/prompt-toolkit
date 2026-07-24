import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial palette (OKLCH-derived, neutrals tinted toward the gold hue)
        paper: '#F5F2EC', // warm off-white background
        'paper-2': '#EFEBE2', // slightly deeper surface
        ink: '#0E0C0A', // near-black text (never pure)
        'ink-soft': '#2A2620', // secondary heading ink
        muted: '#6E675B', // muted body / captions
        gold: '#C8900A', // accent — used sparingly
        'gold-deep': '#8A6308', // AA-contrast gold for small text on paper (>=4.5:1)
        rule: '#D6D0C4', // hairline dividers / borders
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Epilogue', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // fluid display sizes
        'display-xl': ['clamp(2.6rem, 8vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.9rem, 5vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.16,1,.3,1)',
      },
    },
  },
  plugins: [],
} satisfies Config
