import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

export const upheavalTT = localFont({
  src: '../../public/fonts/UpheavalTT.ttf',
  variable: '--font-upheaval-tt',
});

export const pixellari = localFont({
  src: '../../public/fonts/Pixellari.ttf',
  variable: '--font-pixellari',
});

export const pixelGothic = localFont({
  src: '../../public/fonts/PixelGothic.ttf',
  variable: '--font-pixel-gothic',
});

export const metadata: Metadata = {
  title: 'Bakeland - 2D MMORPG',
  description:
    'Explore a vast world where players must join competing factions to secure limited resources. Farm outlawed crops, raid enemy bases & discover the absurd lore behind Bakeland.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Bakeland - 2D MMORPG',
    description:
      'Explore a vast world where players must join competing factions to secure limited resources. Farm outlawed crops, raid enemy bases & discover the absurd lore behind Bakeland.',
    type: 'website',
    siteName: 'Bakeland',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bakeland - 2D MMORPG',
    description:
      'Explore a vast world where players must join competing factions to secure limited resources. Farm outlawed crops, raid enemy bases & discover the absurd lore behind Bakeland.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${upheavalTT.variable} ${pixellari.variable} ${pixelGothic.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
