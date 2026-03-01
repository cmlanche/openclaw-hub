'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const translations = {
  en: {
    title: 'Videos',
    subtitle: 'Watch tutorials and guides about OpenCLAW',
    comingSoon: 'Coming Soon',
    comingSoonDesc: 'Video content is being prepared. Stay tuned!',
    subscribe: 'Subscribe to our channel',
    tutorials: 'Tutorials',
    demos: 'Demos',
    webinars: 'Webinars',
  },
  zh: {
    title: '视频',
    subtitle: '观看关于 OpenCLAW 的教程和指南',
    comingSoon: '即将推出',
    comingSoonDesc: '视频内容正在准备中，敬请期待！',
    subscribe: '订阅我们的频道',
    tutorials: '教程',
    demos: '演示',
    webinars: '网络研讨会',
  },
  ja: {
    title: '動画',
    subtitle: 'OpenCLAWに関するチュートリアルやガイドを見る',
    comingSoon: '近日公開',
    comingSoonDesc: '動画コンテンツ準備中です。お楽しみに！',
    subscribe: 'チャンネルを登録',
    tutorials: 'チュートリアル',
    demos: 'デモ',
    webinars: 'ウェビナー',
  },
  es: {
    title: 'Videos',
    subtitle: 'Mira tutoriales y guías sobre OpenCLAW',
    comingSoon: 'Próximamente',
    comingSoonDesc: 'El contenido de video está siendo preparado. ¡Mantente atento!',
    subscribe: 'Suscríbete a nuestro canal',
    tutorials: 'Tutoriales',
    demos: 'Demos',
    webinars: 'Seminarios',
  },
};

function VideosContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        <div className="text-center py-20">
          <div className="text-6xl mb-6">🎬</div>
          <h2 className="text-2xl font-semibold text-white mb-4">{t.comingSoon}</h2>
          <p className="text-gray-400 mb-8">{t.comingSoonDesc}</p>
          <a href="https://youtube.com/@openclaw" target="_blank" className="inline-block px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-500 transition">
            {t.subscribe} 🔴
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]"></div>}>
      <VideosContent />
    </Suspense>
  );
}
