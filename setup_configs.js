const fs = require('fs');

// package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts = {
  dev: 'next dev',
  build: 'next build',
  start: 'next start',
  lint: 'next lint'
};
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

// tsconfig.json
const tsconfig = {
  compilerOptions: {
    target: 'ES2022',
    lib: ['dom', 'dom.iterable', 'esnext'],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    noEmit: true,
    esModuleInterop: true,
    module: 'esnext',
    moduleResolution: 'bundler',
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: 'preserve',
    incremental: true,
    plugins: [{ name: 'next' }],
    paths: {
      '@/*': ['./src/*']
    }
  },
  include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
  exclude: ['node_modules']
};
fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));

// next.config.mjs
const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};
export default nextConfig;
`;
fs.writeFileSync('next.config.mjs', nextConfig);

// postcss.config.mjs
const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
`;
fs.writeFileSync('postcss.config.mjs', postcssConfig);

// tailwind.config.ts
const tailwindConfig = `import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'on-error-container': '#93000a',
        'error-container': '#ffdad6',
        'background': '#f8f9ff',
        'on-tertiary-fixed-variant': '#3f465c',
        'surface-container-high': '#dce9ff',
        'on-secondary-container': '#693a00',
        'on-surface-variant': '#454650',
        'on-primary-fixed-variant': '#314283',
        'on-secondary-fixed-variant': '#6b3b00',
        'inverse-primary': '#b7c4ff',
        'surface': '#f8f9ff',
        'inverse-surface': '#213145',
        'on-tertiary-fixed': '#131b2e',
        'on-tertiary-container': '#9ea5be',
        'error': '#ba1a1a',
        'tertiary-fixed-dim': '#bec6e0',
        'secondary': '#8d4f00',
        'secondary-accent': '#f39222',
        'surface-container-low': '#eff4ff',
        'surface-container-lowest': '#ffffff',
        'on-background': '#0b1c30',
        'primary-container': '#253777',
        'tertiary-fixed': '#dae2fd',
        'outline': '#757681',
        'surface-dim': '#cbdbf5',
        'on-primary': '#ffffff',
        'surface-variant': '#d3e4fe',
        'secondary-container': '#ff9c2d',
        'surface-bright': '#f8f9ff',
        'secondary-fixed': '#ffdcc0',
        'surface-container-highest': '#d3e4fe',
        'outline-variant': '#c5c5d2',
        'tertiary-container': '#333b50',
        'primary-fixed': '#dce1ff',
        'surface-container': '#e5eeff',
        'on-tertiary': '#ffffff',
        'inverse-on-surface': '#eaf1ff',
        'on-surface': '#0b1c30',
        'primary-fixed-dim': '#b7c4ff',
        'tertiary': '#1e2539',
        'primary': '#0a2060',
        'surface-tint': '#495b9c',
        'secondary-fixed-dim': '#ffb875',
        'on-secondary-fixed': '#2d1600',
        'on-primary-fixed': '#001552',
        'on-error': '#ffffff',
        'on-secondary': '#ffffff',
        'on-primary-container': '#92a3ea'
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '9999px'
      },
      spacing: {
        'space-xl': '3rem',
        'space-md': '1rem',
        'space-lg': '1.75rem',
        'space-sm': '0.5rem',
        'space-xs': '0.25rem',
        'gutter': '2rem',
        'margin-mobile': '1.25rem',
        'gutter-mobile': '1rem',
        'margin': '4rem'
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'display-hero': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'headline-lg': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'headline-md': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'headline-sm': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'body-lg': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'body-md': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'body-sm': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'label-caps': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        'label-md': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '30px', letterSpacing: '0em', fontWeight: '400' }],
        'headline-md': ['28px', { lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.005em', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-hero': ['56px', { lineHeight: '68px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-lg': ['40px', { lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-sm': ['13px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '24px', letterSpacing: '0em', fontWeight: '400' }],
        'label-caps': ['11px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '700' }],
        'display-hero-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }]
      }
    },
  },
  plugins: [],
};
export default config;
`;
fs.writeFileSync('tailwind.config.ts', tailwindConfig);

console.log('Project configuration written successfully.');
