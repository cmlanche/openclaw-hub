'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const translations = {
  en: {
    title: 'About',
    subtitle: 'Learn more about OpenCLAW',
    whatIs: 'What is OpenCLAW?',
    whatIsDesc: 'OpenCLAW is a self-hosted gateway that connects your favorite chat applications—WhatsApp, Telegram, Discord, iMessage, and more—to AI coding agents. It allows you to interact with AI assistants directly from your preferred messaging platform.',
    mission: 'Our Mission',
    missionDesc: 'To make AI assistants accessible to everyone through the chat platforms they already use, while maintaining full control over their data and privacy.',
    why: 'Why OpenCLAW?',
    whyDesc: 'Most AI assistants require you to use their specific apps or web interfaces. OpenCLAW brings AI to your existing conversations, making it feel natural and integrated.',
    features: 'Key Features',
    feature1: 'Multi-channel support',
    feature1Desc: 'Connect multiple chat platforms simultaneously',
    feature2: 'Self-hosted',
    feature2Desc: 'Your data stays on your machine',
    feature3: 'Open source',
    feature3Desc: 'MIT licensed, community-driven',
    feature4: 'Agent-native',
    feature4Desc: 'Built for coding agents with tool use',
  },
  zh: {
    title: '关于',
    subtitle: '了解更多关于 OpenCLAW',
    whatIs: '什么是 OpenCLAW？',
    whatIsDesc: 'OpenCLAW 是一个自托管网关，将你喜欢的聊天应用程序——WhatsApp、Telegram Discord、iMessage 等——连接到 AI 编程智能体。它允许你通过你首选的消息平台直接与 AI 助手交互。',
    mission: '我们的使命',
    missionDesc: '通过你已经使用的聊天平台让每个人都能使用 AI 助手，同时保持对其数据和隐私的完全控制。',
    why: '为什么选择 OpenCLAW？',
    whyDesc: '大多数 AI 助手要求你使用它们特定的应用程序或网页界面。OpenCLAW 将 AI 带到你现有的对话中，使其感觉自然和集成。',
    features: '主要功能',
    feature1: '多通道支持',
    feature1Desc: '同时连接多个聊天平台',
    feature2: '自托管',
    feature2Desc: '你的数据留在你的机器上',
    feature3: '开源',
    feature3Desc: 'MIT 许可证，社区驱动',
    feature4: '原生智能体',
    feature4Desc: '为编程智能体打造，支持工具调用',
  },
};

function AboutContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang as keyof typeof translations];

  const features = [
    { key: 'feature1', icon: '💬' },
    { key: 'feature2', icon: '🏠' },
    { key: 'feature3', icon: '🔓' },
    { key: 'feature4', icon: '🤖' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        <div className="space-y-8">
          <section className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">{t.whatIs}</h2>
            <p className="text-gray-300 leading-relaxed">{t.whatIsDesc}</p>
          </section>

          <section className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">{t.mission}</h2>
            <p className="text-gray-300 leading-relaxed">{t.missionDesc}</p>
          </section>

          <section className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">{t.why}</h2>
            <p className="text-gray-300 leading-relaxed">{t.whyDesc}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">{t.features}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.key} className="p-4 bg-gray-900 border border-gray-800 rounded-xl">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{t[f.key as keyof typeof t]}</h3>
                  <p className="text-gray-400 text-sm">{t[f.key + 'Desc' as keyof typeof t]}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]"></div>}>
      <AboutContent />
    </Suspense>
  );
}
