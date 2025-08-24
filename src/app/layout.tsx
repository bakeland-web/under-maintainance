import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

export const upheavalTT = localFont({
  src: '../../public/fonts/UpheavalTT.ttf',
  variable: '--font-upheaval-tt',
});

export const pixellari = localFont({
  src: '../../public/fonts/Pixellari.ttf',
  variable: '--font-pixellari',
});

export const metadata: Metadata = {
  title: 'Bakeland',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${upheavalTT.variable} ${pixellari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
