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
  metadataBase: new URL('https://bakeland.xyz'),

  title: 'Bakeland - 2D MMORPG',
  description:
    'Explore a vast world where players must join competing factions to secure limited resources. Farm outlawed crops, raid enemy bases & discover the absurd lore behind Bakeland.',

  applicationName: 'Bakeland',

  keywords: ['Bakeland', 'MMORPG', '2D MMORPG', 'gaming', 'factions', 'farming', 'raiding'],
  authors: [{ name: '8 Bit Studio Ltd' }],
  creator: '8 Bit Studio Ltd',
  publisher: '8 Bit Studio Ltd',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://bakeland.xyz/',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },

  openGraph: {
    title: 'Bakeland - 2D MMORPG',
    description:
      'Explore a vast world where players must join competing factions to secure limited resources. Farm outlawed crops, raid enemy bases & discover the absurd lore behind Bakeland.',
    type: 'website',
    siteName: 'Bakeland',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bakeland - 2D MMORPG',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bakeland - 2D MMORPG',
    description:
      'Explore a vast world where players must join competing factions to secure limited resources. Farm outlawed crops, raid enemy bases & discover the absurd lore behind Bakeland.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Bakeland - 2D MMORPG',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
