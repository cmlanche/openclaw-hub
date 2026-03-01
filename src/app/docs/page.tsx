'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const translations: Record<string, any> = {
  en: {
    title: 'Documentation',
    subtitle: 'Everything you need to know about OpenCLAW',
    quickStart: 'Quick Start',
    quickStartDesc: 'Get up and running in 5 minutes',
    installation: 'Installation',
    installationDesc: 'npm install and basic setup',
    configuration: 'Configuration',
    configurationDesc: 'Customize your gateway',
    channels: 'Channels',
    channelsDesc: 'WhatsApp, Telegram, Discord and more',
    security: 'Security',
    securityDesc: 'Keep your data safe',
    api: 'API Reference',
    apiDesc: 'Developer documentation',
    nodes: 'Mobile Nodes',
    nodesDesc: 'iOS and Android pairings',
    concepts: 'Concepts',
    conceptsDesc: 'Core concepts and architecture',
  },
  zh: {
    title: '文档',
    subtitle: '关于 OpenCLAW 的一切',
    quickStart: '快速开始',
    quickStartDesc: '5 分钟内启动运行',
    installation: '安装',
    installationDesc: 'npm 安装和基础配置',
    configuration: '配置',
    configurationDesc: '自定义你的网关',
    channels: '通道',
    channelsDesc: 'WhatsApp、Telegram、Discord 等',
    security: '安全',
    securityDesc: '保护你的数据安全',
    api: 'API 参考',
    apiDesc: '开发者文档',
    nodes: '移动节点',
    nodesDesc: 'iOS 和 Android 配对',
    concepts: '概念',
    conceptsDesc: '核心概念和架构',
  },
  ja: {
    title: 'ドキュメント',
    subtitle: 'OpenCLAWについて知るべきすべてのこと',
    quickStart: 'クイックスタート',
    quickStartDesc: '5分で起動',
    installation: 'インストール',
    installationDesc: 'npmインストールと基本設定',
    configuration: '設定',
    configurationDesc: 'ゲートウェイのカスタマイズ',
    channels: 'チャンネル',
    channelsDesc: 'WhatsApp、Telegram、Discordなど',
    security: 'セキュリティ',
    securityDesc: 'データを安全に保つ',
    api: 'APIリファレンス',
    apiDesc: '開発者向けドキュメント',
    nodes: 'モバイルノード',
    nodesDesc: 'iOSとAndroidのペアリング',
    concepts: 'コンセプト',
    conceptsDesc: 'コアコンセプトとアーキテクチャ',
  },
  es: {
    title: 'Documentación',
    subtitle: 'Todo lo que necesitas saber sobre OpenCLAW',
    quickStart: 'Inicio Rápido',
    quickStartDesc: 'Ejecuta en 5 minutos',
    installation: 'Instalación',
    installationDesc: 'npm install y configuración básica',
    configuration: 'Configuración',
    configurationDesc: 'Personaliza tu gateway',
    channels: 'Canales',
    channelsDesc: 'WhatsApp, Telegram, Discord y más',
    security: 'Seguridad',
    securityDesc: 'Mantén tus datos seguros',
    api: 'Referencia API',
    apiDesc: 'Documentación para desarrolladores',
    nodes: 'Nodos Móviles',
    nodesDesc: 'Emparejamiento de iOS y Android',
    concepts: 'Conceptos',
    conceptsDesc: 'Conceptos centrales y arquitectura',
  },
};

function DocsContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang] || translations.en;

  const sections = [
    { key: 'quickStart', icon: '🚀', link: 'https://docs.openclaw.ai/start/quickstart' },
    { key: 'installation', icon: '📦', link: 'https://docs.openclaw.ai/start/getting-started' },
    { key: 'configuration', icon: '⚙️', link: 'https://docs.openclaw.ai/gateway/configuration' },
    { key: 'channels', icon: '💬', link: 'https://docs.openclaw.ai/channels/telegram' },
    { key: 'security', icon: '🔒', link: 'https://docs.openclaw.ai/gateway/security' },
    { key: 'nodes', icon: '📱', link: 'https://docs.openclaw.ai/nodes' },
    { key: 'concepts', icon: '💡', link: 'https://docs.openclaw.ai/concepts/features' },
    { key: 'api', icon: '📚', link: 'https://docs.openclaw.ai/reference' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <a key={section.key} href={section.link} target="_blank" className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t[section.key]}</h3>
              <p className="text-gray-400 text-sm">{t[section.key + 'Desc']}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Docs() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]"></div>}>
      <DocsContent />
    </Suspense>
  );
}
