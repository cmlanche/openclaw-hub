import Link from 'next/link';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'es', label: 'ES' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🦞</span> 
          <span className="hidden sm:inline">OpenCLAW</span>
        </Link>
        <div className="flex gap-2 md:gap-4 items-center text-sm">
          <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
          <Link href="/docs" className="text-gray-400 hover:text-white transition">Docs</Link>
          <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
          <Link href="/videos" className="text-gray-400 hover:text-white transition">Videos</Link>
          <Link href="/community" className="text-gray-400 hover:text-white transition">Community</Link>
          <Link href="/download" className="text-gray-400 hover:text-white transition">Download</Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition">About</Link>
          <div className="flex gap-1 ml-2 border-l border-gray-700 pl-2">
            {languages.map((lang) => (
              <Link key={lang.code} href={`/?lang=${lang.code}`} className="px-2 py-1 text-xs rounded hover:bg-gray-800 transition text-gray-400 hover:text-white">
                {lang.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
