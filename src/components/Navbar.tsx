import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <span>🦞</span> OpenCLAW
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="https://docs.openclaw.ai" target="_blank" className="text-gray-600 hover:text-blue-600">
            Docs
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600">
            Blog
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="/?lang=en" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
            EN
          </Link>
          <Link href="/?lang=zh" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
            中文
          </Link>
        </div>
      </div>
    </nav>
  );
}
