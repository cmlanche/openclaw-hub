'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const translations = {
  en: {
    heroTitle: 'OpenCLAW - Your AI Assistant Gateway',
    heroSubtitle: 'Connect WhatsApp, Telegram, Discord to AI agents. Self-hosted, open-source, powerful.',
    cta: 'Get Started',
    ctaSecondary: 'View Docs',
    featuresTitle: 'Why OpenCLAW?',
    quickStart: 'Quick Start',
    install: 'Install OpenCLAW',
  },
  zh: {
    heroTitle: 'OpenCLAW - 你的 AI 助手网关',
    heroSubtitle: '连接 WhatsApp、Telegram、Discord 到 AI 智能体。自托管、开源、强大。',
    cta: '开始使用',
    ctaSecondary: '查看文档',
    featuresTitle: '为什么选择 OpenCLAW？',
    quickStart: '快速开始',
    install: '安装 OpenCLAW',
  },
};

function HomeContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t.heroSubtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://docs.openclaw.ai"
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {t.cta}
            </Link>
            <Link
              href="https://docs.openclaw.ai"
              target="_blank"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-xl">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2">Multi-Channel</h3>
              <p className="text-gray-600">Connect WhatsApp, Telegram, Discord, iMessage simultaneously</p>
            </div>
            <div className="p-6 border rounded-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Self-Hosted</h3>
              <p className="text-gray-600">Your data stays on your machine. Full control.</p>
            </div>
            <div className="p-6 border rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold mb-2">Agent-Native</h3>
              <p className="text-gray-600">Built for coding agents with tool use and memory</p>
            </div>
            <div className="p-6 border rounded-xl">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-lg font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600">MIT licensed, community-driven</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.quickStart}
          </h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
            <pre className="text-sm">
{`# ${t.install}
npm install -g openclaw@latest

# Onboard and start
openclaw onboard --install-daemon

# Connect your chat apps
openclaw channels login
openclaw gateway --port 18789`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <p>© 2026 OpenCLAW Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
