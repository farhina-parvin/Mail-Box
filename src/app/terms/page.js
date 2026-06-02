import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] px-6 py-12">

      {/* Top Bar */}
      <div className="max-w-3xl mx-auto flex justify-between items-center mb-8">
        <div></div>

        <Link
          href="/"
          className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-gray-300"
        >
          ← Back To Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-8">
          Terms of Service
        </h1>

        <div className="text-gray-400 space-y-6 leading-relaxed">
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