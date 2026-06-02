'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] relative flex flex-col">
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full z-10">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">📬 Mail-box</Link>
        <Link href="/" className="inline-flex items-center px-4 py-2 text-sm rounded-lg bg-[#0e1424] border border-gray-800 hover:border-teal-500 hover:text-teal-400 transition"> ← Back to Home</Link>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 z-10">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Get in touch</h1>
            <p className="text-gray-400 mb-8 leading-relaxed">Have questions about our pricing, API, or just want to say hi? Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-4 text-gray-300">

              <p>✉️ support@mail-box-mock.com</p>
            </div>
          </div>

          <div className="bg-[#0e1424] p-8 rounded-2xl border border-gray-800 shadow-xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input type="text" className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows="4" className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition resize-none"></textarea>
              </div>
              <button className="w-full py-3 mt-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 rounded-lg text-white font-medium transition">Send Message</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}