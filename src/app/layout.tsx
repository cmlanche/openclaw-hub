import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: {
    default: 'OpenCLAW Hub - Your AI Assistant Gateway',
    template: '%s | OpenCLAW Hub',
  },
  description: 'OpenCLAW is a self-hosted gateway that connects WhatsApp, Telegram, Discord, iMessage to AI coding agents. Open source, MIT license. Build your own AI assistant today.',
  keywords: ['OpenCLAW', 'AI assistant', 'WhatsApp AI', 'Telegram bot', 'Discord bot', 'self-hosted AI', 'open source AI', 'AI gateway', 'personal AI assistant'],
  authors: [{ name: 'OpenCLAW' }],
  creator: 'OpenCLAW',
  publisher: 'OpenCLAW',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://openclaw-hub-chi.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    url: 'https://openclaw-hub-chi.vercel.app',
    siteName: 'OpenCLAW Hub',
    title: 'OpenCLAW Hub - Your AI Assistant Gateway',
    description: 'Connect WhatsApp, Telegram, Discord to AI agents. Self-hosted, open-source.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenCLAW - AI Assistant Gateway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenCLAW Hub - Your AI Assistant Gateway',
    description: 'Connect WhatsApp, Telegram, Discord to AI agents. Self-hosted, open-source.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace G-XXXXXXXXXX with your tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
