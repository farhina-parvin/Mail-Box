import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] overflow-hidden flex flex-col justify-between">
      {/* Background Gradient Mix */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-teal-500/20 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-teal-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full z-10">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <span>📬</span> Mail-box
        </div>
        <div className="flex gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/signup" className="px-5 py-2 rounded-full border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-sm transition">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10 my-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Efficient, Secure, <br />
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Modern Mail-box
          </span>
        </h1>
        <p className="text-gray-400 max-w-lg text-lg mb-8">
          Mail-box streamlines your digital mail updates, custom layouts, and business delivery notifications cleanly.
        </p>
        <Link href="/dashboard" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-purple-600 hover:opacity-90 rounded-xl font-medium transition shadow-lg shadow-teal-500/20">
          Go to Dashboard (Mock)
        </Link>
      </main>

      <footer className="text-center py-6 text-gray-600 text-sm border-t border-gray-900 z-10">
        © 2026 Mail-box Intern Project. All rights reserved.
      </footer>
    </div>
  );
}