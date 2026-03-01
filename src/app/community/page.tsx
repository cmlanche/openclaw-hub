'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const translations: Record<string, any> = {
  en: {
    title: 'Community',
    subtitle: 'Join the OpenCLAW community',
    discord: 'Discord',
    discordDesc: 'Chat with other users and get help',
    github: 'GitHub',
    githubDesc: 'Report issues and contribute',
    twitter: 'Twitter',
    twitterDesc: 'Follow updates and news',
    discordLink: 'https://discord.com/invite/clawd',
    githubLink: 'https://github.com/openclaw/openclaw',
    twitterLink: 'https://twitter.com/openclaw',
  },
  zh: {
    title: '社区',
    subtitle: '加入 OpenCLAW 社区',
    discord: 'Discord',
    discordDesc: '与其他用户聊天并获得帮助',
    github: 'GitHub',
    githubDesc: '报告问题并贡献代码',
    twitter: 'Twitter',
    twitterDesc: '关注更新和新闻',
    discordLink: 'https://discord.com/invite/clawd',
    githubLink: 'https://github.com/openclaw/openclaw',
    twitterLink: 'https://twitter.com/openclaw',
  },
  ja: {
    title: 'コミュニティ',
    subtitle: 'OpenCLAWコミュニティに参加',
    discord: 'Discord',
    discordDesc: '他のユーザーとチャットしてヘルプを受ける',
    github: 'GitHub',
    githubDesc: '問題を報告して貢献する',
    twitter: 'Twitter',
    twitterDesc: '更新とニュースをフォロー',
    discordLink: 'https://discord.com/invite/clawd',
    githubLink: 'https://github.com/openclaw/openclaw',
    twitterLink: 'https://twitter.com/openclaw',
  },
  es: {
    title: 'Comunidad',
    subtitle: 'Únete a la comunidad de OpenCLAW',
    discord: 'Discord',
    discordDesc: 'Chatea con otros usuarios y obtén ayuda',
    github: 'GitHub',
    githubDesc: 'Reporta problemas y contribuye',
    twitter: 'Twitter',
    twitterDesc: 'Sigue actualizaciones y noticias',
    discordLink: 'https://discord.com/invite/clawd',
    githubLink: 'https://github.com/openclaw/openclaw',
    twitterLink: 'https://twitter.com/openclaw',
  },
};

function CommunityContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang] || translations.en;

  const communities = [
    { key: 'discord', icon: '💬', link: t.discordLink },
    { key: 'github', icon: '🐙', link: t.githubLink },
    { key: 'twitter', icon: '🐦', link: t.twitterLink },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {communities.map((community) => (
            <a key={community.key} href={community.link} target="_blank" className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all group text-center">
              <div className="text-5xl mb-4">{community.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t[community.key]}</h3>
              <p className="text-gray-400 text-sm">{t[community.key + 'Desc']}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]"></div>}>
      <CommunityContent />
    </Suspense>
  );
}
