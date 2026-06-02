'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  Mail,
  CreditCard,
  User,
} from "lucide-react";

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />
    

      {/* ✅ FIXED SIDEBAR ONLY (same style + icons consistency) */}
      <aside className="w-72 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6">

      <div className="text-xl font-bold flex items-center gap-2">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <span>📬</span> Mail-box
        </div>
        </div>

        <nav className="mt-10 space-y-2">

          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link href="/dashboard/mail" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <Mail size={18} /> My Mail
          </Link>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <User size={18} /> Subscription
          </div>

          <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <Mail size={18} /> Profile
          </Link>

        </nav>
      </aside>


      {/* 🔥 YOUR ORIGINAL DESIGN (UNCHANGED COMPLETELY) */}
      <main className="flex-grow p-10 relative overflow-y-auto">

        <h1 className="text-3xl font-bold mb-8">Manage Subscription</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Current Plan Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#0e1424] to-[#131b30] p-8 rounded-2xl border border-teal-500/30 shadow-xl shadow-teal-500/5 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full" />

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <p className="text-teal-400 font-bold tracking-wider text-sm mb-1">
                  CURRENT PLAN
                </p>
                <h2 className="text-4xl font-extrabold text-white">
                  ADVANCED
                </h2>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold text-white">$24.99</p>
                <p className="text-gray-500 text-sm">per month</p>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-gray-300 text-sm relative z-10">
              <p>✓ 25GB Secure Storage</p>
              <p>✓ 5 User Seats (3 active)</p>
              <p>✓ Priority Support Access</p>
            </div>

            <div className="flex gap-4 relative z-10">
              <button className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 text-white rounded-lg font-medium transition">
                Upgrade Plan
              </button>

              <button className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 rounded-lg font-medium transition">
                Cancel Subscription
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-[#0e1424] p-8 rounded-2xl border border-gray-800 flex flex-col justify-between">

            <div>
              <h3 className="text-lg font-bold text-white mb-6">
                Payment Method
              </h3>

              <div className="flex items-center gap-4 p-4 bg-[#131b30] border border-gray-700 rounded-xl mb-4">

                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs font-bold border border-gray-600">
                  VISA
                </div>

                <div>
                  <p className="text-white text-sm font-medium">
                    •••• •••• •••• 4242
                  </p>
                  <p className="text-gray-500 text-xs">
                    Expires 12/28
                  </p>
                </div>

              </div>
            </div>

            <button className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition">
              Update Payment Info
            </button>

          </div>
        </div>

        {/* Billing History */}
        <div className="mt-8 bg-[#0e1424] rounded-2xl border border-gray-800 overflow-hidden">

          <div className="px-8 py-5 border-b border-gray-800">
            <h3 className="text-lg font-bold text-white">
              Billing History (Mock Data)
            </h3>
          </div>

          <table className="w-full text-left text-sm text-gray-400">

            <thead className="bg-[#131b30] text-gray-500">
              <tr>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Description</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">

              <tr className="hover:bg-[#131b30]/50 transition">
                <td className="px-8 py-4">May 01, 2026</td>
                <td className="px-8 py-4">Advanced Plan</td>
                <td className="px-8 py-4 text-white">$24.99</td>
                <td className="px-8 py-4">
                  <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs">
                    Paid
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#131b30]/50 transition">
                <td className="px-8 py-4">Apr 01, 2026</td>
                <td className="px-8 py-4">Advanced Plan</td>
                <td className="px-8 py-4 text-white">$24.99</td>
                <td className="px-8 py-4">
                  <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs">
                    Paid
                  </span>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </main>
    </div>
  );
}