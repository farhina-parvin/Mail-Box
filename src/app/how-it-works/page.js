import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full z-10">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">📬 Mail-box</Link>
        <Link href="/" className="inline-flex items-center px-4 py-2 text-sm rounded-lg bg-[#0e1424] border border-gray-800 hover:border-teal-500 hover:text-teal-400 transition"> ← Back to Home</Link>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          How Mail-box Works
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          A modern virtual mailbox system designed to help users manage,
          organize, and track digital mail efficiently.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-[#0e1424] border border-gray-800 rounded-2xl p-8">
          <div className="text-4xl font-bold text-teal-400 mb-4">
            01
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Receive Mail
          </h3>

          <p className="text-gray-400">
            Users receive notifications and digital copies of incoming
            mail through their dashboard.
          </p>
        </div>

        <div className="bg-[#0e1424] border border-gray-800 rounded-2xl p-8">
          <div className="text-4xl font-bold text-purple-400 mb-4">
            02
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Organize Content
          </h3>

          <p className="text-gray-400">
            Categorize, search, and manage documents using an intuitive
            and modern interface.
          </p>
        </div>

        <div className="bg-[#0e1424] border border-gray-800 rounded-2xl p-8">
          <div className="text-4xl font-bold text-blue-400 mb-4">
            03
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Access Anywhere
          </h3>

          <p className="text-gray-400">
            Access your mailbox securely from desktop, tablet, and mobile
            devices anytime.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          href="/signup"
          className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl font-medium hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>

    </div>
  );
}