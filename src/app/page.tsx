'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const translations: Record<string, any> = {
  en: {
    heroTitle: 'OpenCLAW',
    heroSubtitle: 'Your personal AI assistant gateway. Connect WhatsApp, Telegram, Discord, and more to powerful AI agents.',
    heroDesc: 'Self-hosted. Open-source. Limitless possibilities.',
    cta: 'Get Started',
    ctaSecondary: 'View Documentation',
    featuresTitle: 'Why OpenCLAW?',
    multiChannel: 'Multi-Channel',
    multiChannelDesc: 'Connect WhatsApp, Telegram, Discord, iMessage simultaneously',
    selfHosted: 'Self-Hosted',
    selfHostedDesc: 'Your data stays on your machine. Full control.',
    agentNative: 'Agent-Native',
    agentNativeDesc: 'Built for coding agents with tool use and memory',
    openSource: 'Open Source',
    openSourceDesc: 'MIT licensed, community-driven',
    stats: 'Trusted by developers worldwide',
    stars: 'GitHub Stars',
    downloads: 'Monthly Downloads',
    community: 'Community Members',
    countries: 'Countries',
    quickStart: 'Quick Start',
    install: 'Install OpenCLAW',
    ready: 'Ready to start?',
    readyDesc: 'Get up and running in minutes with our simple setup guide.',
  },
  zh: {
    heroTitle: 'OpenCLAW',
    heroSubtitle: '你的个人 AI 助手网关。连接 WhatsApp、Telegram、Discord 等到强大的 AI 智能体。',
    heroDesc: '自托管。开源。无限可能。',
    cta: '开始使用',
    ctaSecondary: '查看文档',
    featuresTitle: '为什么选择 OpenCLAW？',
    multiChannel: '多通道',
    multiChannelDesc: '同时连接 WhatsApp、Telegram、Discord、iMessage',
    selfHosted: '自托管',
    selfHostedDesc: '数据留在你的机器上，完全掌控',
    agentNative: '原生智能体',
    agentNativeDesc: '为编程智能体打造，支持工具调用和记忆',
    openSource: '开源',
    openSourceDesc: 'MIT 许可证，社区驱动',
    stats: '受到全球开发者的信赖',
    stars: 'GitHub Stars',
    downloads: '月度下载',
    community: '社区成员',
    countries: '国家',
    quickStart: '快速开始',
    install: '安装 OpenCLAW',
    ready: '准备好了吗？',
    readyDesc: '按照简单的设置指南，几分钟内即可启动运行。',
  },
  ja: {
    heroTitle: 'OpenCLAW',
    heroSubtitle: 'あなたのパーソナルAIアシスタントゲートウェイ。WhatsApp、Telegram、Discordなどを強力なAIエージェントに接続。',
    heroDesc: 'セルフホスト。オープンソース。無限の可能性。',
    cta: '始める',
    ctaSecondary: 'ドキュメントを見る',
    featuresTitle: 'なぜOpenCLAWなのか？',
    multiChannel: 'マルチチャンネル',
    multiChannelDesc: 'WhatsApp、Telegram、Discord、iMessageに同時に接続',
    selfHosted: 'セルフホスト',
    selfHostedDesc: 'データはあなたのマシンに残る。完全なコントロール。',
    agentNative: 'エージェントネイティブ',
    agentNativeDesc: 'ツール使用とメモリを備えたコーディングエージェント用に構築',
    openSource: 'オープンソース',
    openSourceDesc: 'MITライセンス、社区駆動',
    stats: '世界中の開発者に信頼されている',
    stars: 'GitHub Stars',
    downloads: '、月間ダウンロード',
    community: 'コミュニティメンバー',
    countries: 'カ国',
    quickStart: 'クイックスタート',
    install: 'OpenCLAWをインストール',
    ready: '始める準備はできましたか？',
    readyDesc: 'シンプルなセットアップガイドで、数分で起動できます。',
  },
  es: {
    heroTitle: 'OpenCLAW',
    heroSubtitle: 'Tu puerta de entrada personal al asistente de IA. Conecta WhatsApp, Telegram, Discord y más a potentes agentes de IA.',
    heroDesc: 'Autoalojado. Código abierto. Posibilidades infinitas.',
    cta: 'Comenzar',
    ctaSecondary: 'Ver Documentación',
    featuresTitle: '¿Por qué OpenCLAW?',
    multiChannel: 'Multicanal',
    multiChannelDesc: 'Conecta WhatsApp, Telegram, Discord, iMessage simultáneamente',
    selfHosted: 'Autoalojado',
    selfHostedDesc: 'Tus datos permanecen en tu máquina. Control total.',
    agentNative: 'Nativo para Agentes',
    agentNativeDesc: 'Construido para agentes de codificación con uso de herramientas y memoria',
    openSource: 'Código Abierto',
    openSourceDesc: 'Licencia MIT, impulsado por la comunidad',
    stats: 'Desarrolladores de todo el mundo confían en nosotros',
    stars: 'Estrellas en GitHub',
    downloads: 'Descargas Mensuales',
    community: 'Miembros de la Comunidad',
    countries: 'Países',
    quickStart: 'Inicio Rápido',
    install: 'Instalar OpenCLAW',
    ready: '¿Listo para empezar?',
    readyDesc: 'Configúralo en minutos con nuestra guía de configuración simple.',
  },
};

function HomeContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang] || translations.en;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0f] to-[#0a0a0f]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Open Source • MIT License
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t.heroTitle}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
          
          <p className="text-lg text-gray-500 mb-10">{t.heroDesc}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://docs.openclaw.ai" target="_blank" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
              {t.cta}
            </Link>
            <Link href="/docs" className="px-8 py-4 border border-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-800/50 hover:border-gray-600 transition-all">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d0d12] border-y border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-400 mb-8">{t.stats}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2.5K+</div>
              <div className="text-gray-500 text-sm">{t.stars}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-500 text-sm">{t.downloads}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5K+</div>
              <div className="text-gray-500 text-sm">{t.community}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-500 text-sm">{t.countries}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0d0d12]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">{t.featuresTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.multiChannel}</h3>
              <p className="text-gray-400 text-sm">{t.multiChannelDesc}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all group">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.selfHosted}</h3>
              <p className="text-gray-400 text-sm">{t.selfHostedDesc}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.agentNative}</h3>
              <p className="text-gray-400 text-sm">{t.agentNativeDesc}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all group">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.openSource}</h3>
              <p className="text-gray-400 text-sm">{t.openSourceDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">{t.quickStart}</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">{t.readyDesc}</p>
          <div className="bg-gradient-to-br from-gray-900 to-[#0a0a0f] border border-gray-800 rounded-2xl p-8 overflow-x-auto">
            <pre className="text-sm text-gray-300">
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

      <section className="py-24 px-4 bg-gradient-to-b from-[#0d0d12] to-[#0a0a0f]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ready}</h2>
          <p className="text-gray-400 mb-8">{t.heroDesc}</p>
          <Link href="https://docs.openclaw.ai" target="_blank" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
            {t.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <HomeContent />
    </Suspense>
  );
}
