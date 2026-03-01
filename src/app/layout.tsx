import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'OpenCLAW Hub - Your AI Assistant Gateway',
  description: 'Connect WhatsApp, Telegram, Discord to AI agents. Self-hosted, open-source, powerful.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
