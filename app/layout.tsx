import '@/app/ui/global.css';
import { inter, merriweather } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${merriweather.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
