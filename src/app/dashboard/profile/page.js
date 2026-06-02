'use client';

import Link from "next/link";
import {
  LayoutDashboard,
  Mail,
  CreditCard,
  User,
  Settings,
  Shield,
  Bell,
  Camera,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      {/* SIDEBAR */}
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

          <Link href="/dashboard/subscription" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <CreditCard size={18} /> Subscription
          </Link>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <User size={18} /> Profile
          </div>

        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10 overflow-y-auto">
      
       {/* TOP BAR (UPDATED ONLY HERE) */}
       <div className="flex justify-between items-center mb-10">

<h2 className="text-gray-300">/dashboard</h2>

{/* ✅ BACK TO HOME BUTTON */}
<Link
  href="/"
  className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-gray-300"
>
  ← Back To Home
</Link>

</div>
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage your profile, security and preferences
          </p>
        </div>

        {/* PROFILE HERO CARD */}
        <div className="relative bg-black/30 border border-white/10 rounded-3xl p-8 overflow-hidden mb-8">

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

          <div className="flex items-center gap-6 relative z-10">

            {/* AVATAR */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg">
                A
              </div>

              <button className="absolute bottom-0 right-0 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <Camera size={14} />
              </button>
            </div>

            {/* INFO */}
            <div>
              <h2 className="text-2xl font-bold">Alice Smith</h2>
              <p className="text-gray-400">alice.smith@company.com</p>

              <div className="flex gap-3 mt-3">
                <span className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                  Premium User
                </span>
                <span className="px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                  Verified
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Total Emails</p>
            <h2 className="text-3xl font-bold mt-2">324</h2>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Unread</p>
            <h2 className="text-3xl font-bold mt-2">22</h2>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Storage Used</p>
            <h2 className="text-3xl font-bold mt-2">68%</h2>
          </div>

        </div>

        {/* SETTINGS GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* PERSONAL INFO */}
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">

            <div className="flex items-center gap-2 mb-4">
              <User size={18} className="text-cyan-400" />
              <h3 className="font-semibold">Personal Information</h3>
            </div>

            <div className="space-y-4 text-sm">

              <div>
                <p className="text-gray-400">Full Name</p>
                <p>Alice Smith</p>
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <p>alice.smith@company.com</p>
              </div>

              <div>
                <p className="text-gray-400">Role</p>
                <p>Frontend Intern</p>
              </div>

            </div>

          </div>

          {/* SECURITY */}
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">

            <div className="flex items-center gap-2 mb-4">
              <Shield size={18} className="text-purple-400" />
              <h3 className="font-semibold">Security</h3>
            </div>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between items-center">
                <p className="text-gray-400">Password</p>
                <button className="text-cyan-400 hover:underline">Change</button>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-400">2FA</p>
                <span className="text-green-400 text-xs">Enabled</span>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-400">Login Alerts</p>
                <span className="text-yellow-400 text-xs">On</span>
              </div>

            </div>

          </div>

          {/* NOTIFICATIONS */}
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6 md:col-span-2">

            <div className="flex items-center gap-2 mb-4">
              <Bell size={18} className="text-cyan-400" />
              <h3 className="font-semibold">Notifications</h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-300">

              <p>Email Notifications: Enabled</p>
              <p>System Alerts: Enabled</p>
              <p>Marketing Emails: Disabled</p>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}