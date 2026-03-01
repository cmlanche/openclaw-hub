'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const translations: Record<string, any> = {
  en: {
    title: 'Download',
    subtitle: 'Get OpenCLAW for your device',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    comingSoon: 'Coming Soon',
    npm: 'Install via npm',
    npmDesc: 'The easiest way to install OpenCLAW globally:',
  },
  zh: {
    title: '下载',
    subtitle: '在您的设备上获取 OpenCLAW',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    comingSoon: '即将推出',
    npm: '通过 npm 安装',
    npmDesc: '全局安装 OpenCLAW 的最简单方法：',
  },
  ja: {
    title: 'ダウンロード',
    subtitle: 'デバイスでOpenCLAWをダウンロード',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    comingSoon: '近日公開',
    npm: 'npmでインストール',
    npmDesc: 'OpenCLAWをグローバルにインストールする最も簡単な方法：',
  },
  es: {
    title: 'Descargar',
    subtitle: 'Obtén OpenCLAW para tu dispositivo',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    comingSoon: 'Próximamente',
    npm: 'Instalar vía npm',
    npmDesc: 'La forma más fácil de instalar OpenCLAW globalmente:',
  },
};

function DownloadContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang] || translations.en;

  const platforms = [
    { key: 'windows', icon: '🪟' },
    { key: 'macos', icon: '🍎' },
    { key: 'linux', icon: '🐧' },
    { key: 'android', icon: '🤖' },
    { key: 'ios', icon: '📱' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform) => (
            <div key={platform.key} className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl">
              <div className="text-5xl mb-4">{platform.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t[platform.key]}</h3>
              <p className="text-gray-400 text-sm">{t.comingSoon}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-2">📦 {t.npm}</h3>
          <p className="text-gray-400 mb-4">{t.npmDesc}</p>
          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
            <code className="text-blue-400">npm install -g openclaw@latest</code>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-900 border border-gray-800 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-4">Requirements</h3>
          <ul className="text-gray-400 space-y-2">
            <li>• Node.js 22+</li>
            <li>• npm, pnpm, or yarn</li>
            <li>• AI API key (Anthropic recommended)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Download() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]"></div>}>
      <DownloadContent />
    </Suspense>
  );
}
