import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] px-6 py-12">

<nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full z-10">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">📬 Mail-box</Link>
        <Link href="/" className="inline-flex items-center px-4 py-2 text-sm rounded-lg bg-[#0e1424] border border-gray-800 hover:border-teal-500 hover:text-teal-400 transition"> ← Back to Home</Link>
      </nav>

      <div className="max-w-6xl mx-auto">

       <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Terms of Service
        </h1>

        <div className="text-gray-400 space-y-6 leading-relaxed ">
          <p>Last updated: June 2026</p>

          <h2 className="text-xl font-bold text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Mail-box platform, you agree to be bound
            by these Terms of Service. If you do not agree, please discontinue
            use immediately.
          </p>

          <h2 className="text-xl font-bold text-white">
            2. Usage Rights
          </h2>
          <p>
            We grant you a limited, non-exclusive license to use our mail
            management tools for personal or business purposes, provided you
            maintain your subscription status.
          </p>

          <h2 className="text-xl font-bold text-white">
            3. Liability
          </h2>
          <p>
            Mail-box is provided "as is." We are not responsible for any data
            loss, delivery delays, or service interruptions beyond our control.
          </p>
        </div>

      </div>
    </div>
  );
}