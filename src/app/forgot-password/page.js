'use client';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-[#0e1424] p-8 rounded-2xl border border-gray-800 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
          <p className="text-gray-400 text-sm mt-1">Enter your email and we'll send you a recovery link.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
            <input type="email" placeholder="john@company.com" className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition" />
          </div>
          <button className="w-full py-3 mt-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-white font-medium transition">
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-6">
          <Link href="/login" className="text-sm text-gray-400 hover:text-white transition">← Back to Log In</Link>
        </div>
      </div>
    </div>
  );
}