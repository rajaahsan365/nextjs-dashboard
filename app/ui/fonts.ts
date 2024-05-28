import { Inter, Poppins, Merriweather } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--merriweather-font',
});
