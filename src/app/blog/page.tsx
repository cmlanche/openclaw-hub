'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const translations: Record<string, any> = {
  en: {
    title: 'Blog',
    subtitle: 'Latest news, tutorials and updates about OpenCLAW',
    readMore: 'Read more',
    minRead: 'min read',
    featured: 'Featured',
    allPosts: 'All Posts',
  },
  zh: {
    title: '博客',
    subtitle: '关于 OpenCLAW 的最新新闻、教程和更新',
    readMore: '阅读更多',
    minRead: '分钟阅读',
    featured: '精选',
    allPosts: '所有文章',
  },
  ja: {
    title: 'ブログ',
    subtitle: 'OpenCLAWに関する最新のニュース、チュートリアル、更新情報',
    readMore: '続きを読む',
    minRead: '分で読了',
    featured: '注目',
    allPosts: 'すべての記事',
  },
  es: {
    title: 'Blog',
    subtitle: 'Últimas noticias, tutoriales y actualizaciones sobre OpenCLAW',
    readMore: 'Leer más',
    minRead: 'min de lectura',
    featured: 'Destacado',
    allPosts: 'Todas las publicaciones',
  },
};

const posts: Record<string, any> = {
  en: [
    {
      slug: 'what-is-openclaw',
      title: 'What is OpenCLAW? A Complete Guide',
      excerpt: 'Learn about OpenCLAW, the self-hosted AI gateway that connects your favorite chat apps to AI agents. This comprehensive guide covers everything you need to know about this powerful tool.',
      date: '2026-03-01',
      readTime: 8,
      category: 'Introduction',
      featured: true,
    },
    {
      slug: 'quick-start-guide',
      title: 'Quick Start Guide: Get OpenCLAW Running in 5 Minutes',
      excerpt: 'A step-by-step tutorial to get OpenCLAW up and running in just 5 minutes. From installation to your first AI-powered message. Perfect for beginners!',
      date: '2026-03-01',
      readTime: 6,
      category: 'Tutorial',
      featured: true,
    },
    {
      slug: 'whatsapp-setup',
      title: 'How to Connect WhatsApp to OpenCLAW',
      excerpt: 'Complete guide to connecting your WhatsApp account to OpenCLAW. Start using AI assistants through WhatsApp today with this detailed tutorial.',
      date: '2026-02-28',
      readTime: 10,
      category: 'Tutorial',
    },
    {
      slug: 'telegram-bot',
      title: 'Create a Telegram Bot with OpenCLAW',
      excerpt: 'Learn how to create a powerful Telegram bot powered by AI using OpenCLAW. Full step-by-step instructions included for developers.',
      date: '2026-02-27',
      readTime: 12,
      category: 'Tutorial',
    },
    {
      slug: 'discord-integration',
      title: 'OpenCLAW Discord Integration Guide',
      excerpt: 'Add AI capabilities to your Discord server with OpenCLAW. Create your own AI-powered Discord bot in minutes with this comprehensive guide.',
      date: '2026-02-26',
      readTime: 15,
      category: 'Tutorial',
    },
    {
      slug: 'self-hosted-ai',
      title: 'Why Self-Hosted AI is the Future',
      excerpt: 'Explore the benefits of self-hosted AI solutions like OpenCLAW. Privacy, control, and customization explained in detail.',
      date: '2026-02-25',
      readTime: 10,
      category: 'Opinion',
    },
    {
      slug: 'openclaw-vs-other-bots',
      title: 'OpenCLAW vs Other AI Bots: Which is Better?',
      excerpt: 'A detailed comparison between OpenCLAW and other popular AI bots. Find out why self-hosted solutions are gaining popularity.',
      date: '2026-02-24',
      readTime: 12,
      category: 'Comparison',
    },
    {
      slug: 'security-best-practices',
      title: 'OpenCLAW Security Best Practices',
      excerpt: 'Learn how to secure your OpenCLAW installation with these essential security tips and best practices for self-hosted AI.',
      date: '2026-02-23',
      readTime: 8,
      category: 'Security',
    },
  ],
  zh: [
    {
      slug: 'what-is-openclaw',
      title: '什么是 OpenCLAW？完整指南',
      excerpt: '了解 OpenCLAW，连接你喜欢的聊天应用到 AI 智能体的自托管 AI 网关。本综合指南涵盖了你需要知道的一切。',
      date: '2026-03-01',
      readTime: 8,
      category: '入门',
      featured: true,
    },
    {
      slug: 'quick-start-guide',
      title: '快速开始指南：5 分钟运行 OpenCLAW',
      excerpt: '分步教程，让你在 5 分钟内启动运行 OpenCLAW。从安装到发送第一条 AI 驱动的消息。',
      date: '2026-03-01',
      readTime: 6,
      category: '教程',
      featured: true,
    },
    {
      slug: 'whatsapp-setup',
      title: '如何连接 WhatsApp 到 OpenCLAW',
      excerpt: '将你的 WhatsApp 账户连接到 OpenCLAW 的完整指南。今天就开始通过 WhatsApp 使用 AI 助手吧。',
      date: '2026-02-28',
      readTime: 10,
      category: '教程',
    },
    {
      slug: 'telegram-bot',
      title: '使用 OpenCLAW 创建 Telegram 机器人',
      excerpt: '了解如何使用 OpenCLAW 创建由 AI 驱动的强大 Telegram 机器人。包含完整的分步说明。',
      date: '2026-02-27',
      readTime: 12,
      category: '教程',
    },
    {
      slug: 'discord-integration',
      title: 'OpenCLAW Discord 集成指南',
      excerpt: '使用 OpenCLAW 为你的 Discord 服务器添加 AI 功能。几分钟内创建你自己的 AI 驱动的 Discord 机器人。',
      date: '2026-02-26',
      readTime: 15,
      category: '教程',
    },
    {
      slug: 'self-hosted-ai',
      title: '为什么自托管 AI 是未来',
      excerpt: '探索像 OpenCLAW 这样的自托管 AI 解决方案的好处。隐私、控制和定制化详解。',
      date: '2026-02-25',
      readTime: 10,
      category: '观点',
    },
  ],
  ja: [
    {
      slug: 'what-is-openclaw',
      title: 'OpenCLAWとは？完全ガイド',
      excerpt: 'お気に入りのチャットアプリをAIエージェントに接続するセルフホスト型AIゲートウェイ、OpenCLAWについて学びましょう。',
      date: '2026-03-01',
      readTime: 8,
      category: 'はじめに',
      featured: true,
    },
    {
      slug: 'quick-start-guide',
      title: 'クイックスタート：5分でOpenCLAWを実行',
      excerpt: '5分でOpenCLAWを起動するステップバイステップチュートリアル。インストールから最初のAIメッセージまで。',
      date: '2026-03-01',
      readTime: 6,
      category: 'チュートリアル',
      featured: true,
    },
  ],
  es: [
    {
      slug: 'what-is-openclaw',
      title: '¿Qué es OpenCLAW? Guía Completa',
      excerpt: 'Aprende sobre OpenCLAW, la puerta de enlace de IA autoalojada que conecta tus aplicaciones de chat favoritas con agentes de IA.',
      date: '2026-03-01',
      readTime: 8,
      category: 'Introducción',
      featured: true,
    },
    {
      slug: 'quick-start-guide',
      title: 'Guía de Inicio Rápido: Ejecuta OpenCLAW en 5 Minutos',
      excerpt: 'Un tutorial paso a paso para poner en marcha OpenCLAW en solo 5 minutos. Desde la instalación hasta tu primer mensaje con IA.',
      date: '2026-03-01',
      readTime: 6,
      category: 'Tutorial',
      featured: true,
    },
  ],
};

function BlogContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = translations[lang] || translations.en;
  const blogPosts = posts[lang] || posts.en;
  const featuredPosts: any[] = blogPosts.filter((p: any) => p.featured);
  const regularPosts: any[] = blogPosts.filter((p: any) => !p.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-400 mb-6">{t.featured}</h2>
            <div className="space-y-6">
              {featuredPosts.map((post: any) => (
                <article key={post.slug} className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl hover:border-blue-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-500 text-sm">• {post.readTime} {t.minRead}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition">{t.readMore} →</Link>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          {regularPosts.map((post: any) => (
            <article key={post.slug} className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300">{post.category}</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">• {post.readTime} {t.minRead}</span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Link href="#" className="text-blue-400 hover:text-blue-300 transition">{t.readMore} →</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f]"></div>}>
      <BlogContent />
    </Suspense>
  );
}
