'use client';

import { useState } from "react";
import Link from "next/link";
import { Shield, Folder, Smartphone, Menu, X } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0f19] text-white">

      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-teal-500/30 to-purple-600/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-pink-500/20 blur-[140px] rounded-full" />

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 max-w-7xl mx-auto relative z-10">

        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <span>📬</span> Mail-box
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/how-it-works" className="hover:text-white transition">How It Works</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/login"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-sm font-medium hover:opacity-90 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 rounded-full border border-gray-700 text-sm hover:bg-gray-900 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0b0f19] border-b border-gray-800 z-20 p-6 space-y-4">

          <Link href="/" className="block text-gray-300">Home</Link>
          <Link href="/terms" className="block text-gray-300">Terms</Link>
          <Link href="/how-it-works" className="block text-gray-300">How It Works</Link>
          <Link href="/contact" className="block text-gray-300">Contact</Link>
          <Link href="/privacy" className="block text-gray-300">Privacy</Link>

          <div className="flex gap-3 pt-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-sm"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 rounded-full border border-gray-700 text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* HERO */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16 flex flex-col md:flex-row items-center justify-between">

        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Efficient, Secure, <br />
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Modern Mail-box
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
            Mail-box simplifies your digital communication with secure,
            fast, and beautifully organized mail management for modern users.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 font-medium hover:opacity-90 transition text-center"
            >
              Get Started
            </Link>

            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-900 transition text-center"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* VISUAL */}
        <div className="mt-14 md:mt-0 relative scale-90 md:scale-100">
          <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-3xl bg-gradient-to-br from-teal-500/20 to-purple-600/20 border border-gray-800 backdrop-blur-xl flex items-center justify-center relative">

            <div className="absolute top-10 left-8 w-24 md:w-28 h-16 md:h-20 bg-[#131b30] border border-gray-800 rounded-lg animate-pulse" />
            <div className="absolute top-28 right-6 w-20 md:w-24 h-14 md:h-16 bg-[#131b30] border border-gray-800 rounded-lg" />
            <div className="absolute bottom-10 left-14 w-28 md:w-32 h-16 md:h-18 bg-[#131b30] border border-gray-800 rounded-lg" />

            <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-tr from-teal-400 to-purple-500 blur-sm opacity-70" />
          </div>
        </div>
      </main>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 mt-20 md:mt-24">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center md:text-left">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl bg-[#0e1424] border border-gray-800">
            <Shield className="text-teal-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-400 text-sm">
              End-to-end encrypted secure mail system.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1424] border border-gray-800">
            <Folder className="text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Organization</h3>
            <p className="text-gray-400 text-sm">
              Smart folders and structured inbox management.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1424] border border-gray-800">
            <Smartphone className="text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Responsive UI</h3>
            <p className="text-gray-400 text-sm">
              Fully responsive for mobile, tablet, and desktop.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-sm py-10 mt-10 border-t border-gray-900">
        © 2026 Mail-box. All Rights Reserved
      </footer>

    </div>
  );
}