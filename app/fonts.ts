import { Inter, Outfit, Caveat } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-welcome',
  display: 'swap',
});
