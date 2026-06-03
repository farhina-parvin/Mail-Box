'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Mail,
  CreditCard,
  User,
  LogOut
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

export default function DashboardPage() {
  const [profilePic, setProfilePic] = useState(null);

  const mails = [
    {
      sender: "Google",
      time: "4:12 PM",
      text: "Your account security update.",
    },
    {
      sender: "Amazon",
      time: "3:36 PM",
      text: "Order shipped successfully.",
    },
    {
      sender: "Project Alpha",
      time: "3:30 PM",
      text: "New team message received.",
    },
  ];

  // Chart Data
  const mailActivity = [
    { day: "Mon", received: 20, unread: 5 },
    { day: "Tue", received: 35, unread: 8 },
    { day: "Wed", received: 28, unread: 6 },
    { day: "Thu", received: 40, unread: 10 },
    { day: "Fri", received: 32, unread: 7 },
    { day: "Sat", received: 50, unread: 12 },
    { day: "Sun", received: 45, unread: 9 },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("profilePic");
    if (saved) setProfilePic(saved);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      {/* TOP PROFILE ICON */}
      <div className="fixed top-6 right-6 z-50">
        <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 overflow-hidden flex items-center justify-center">
          {profilePic ? (
            <img src={profilePic} className="w-full h-full object-cover" />
          ) : (
            <User className="text-gray-400" size={20} />
          )}
        </div>
      </div>

      {/* SIDEBAR */}
      <aside className="w-20 md:w-72 bg-black/30 backdrop-blur-xl border-r border-white/10 p-3 md:p-6 flex flex-col justify-between">

        <div>
          <div className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
              <span>📬</span>
              <span className="hidden md:inline">Mail-box</span>
            </div>
          </div>

          <nav className="mt-10 space-y-2">

            <div className="flex items-center justify-center md:justify-start gap-3 px-3 md:px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <User size={18} />
              <span className="hidden md:inline">Dashboard</span>
            </div>

            <Link href="/dashboard/mail" className="flex items-center justify-center md:justify-start gap-3 px-3 md:px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
              <Mail size={18} />
              <span className="hidden md:inline">My Mail</span>
            </Link>

            <Link href="/dashboard/subscription" className="flex items-center justify-center md:justify-start gap-3 px-3 md:px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
              <CreditCard size={18} />
              <span className="hidden md:inline">Subscription</span>
            </Link>

            <Link href="/dashboard/profile" className="flex items-center justify-center md:justify-start gap-3 px-3 md:px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
              <User size={18} />
              <span className="hidden md:inline">Profile</span>
            </Link>

          </nav>
        </div>

        {/* LOGOUT */}
        <div className="mt-auto mb-6 flex justify-center md:justify-start">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 w-full px-3 md:px-4 py-3 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500/10"
          >
            <LogOut size={18} />
            <span className="text-center w-full md:w-auto">Log Out</span>
          </Link>
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8 relative z-10">

        {/* WELCOME */}
        <div className="flex items-center gap-5 mb-10">

          <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
            {profilePic ? (
              <img src={profilePic} className="w-full h-full object-cover" />
            ) : (
              <User className="text-gray-500" size={28} />
            )}
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Welcome To Mail-box !
            </h1>
            <p className="text-gray-400">
              Welcome to your dashboard overview
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">Total Mail</p>
            <h2 className="text-3xl font-bold mt-2">324</h2>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">Unread</p>
            <h2 className="text-3xl font-bold mt-2">22</h2>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">Recent Scans</p>
            <h2 className="text-3xl font-bold mt-2">133</h2>
          </div>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* CHART */}
          <div className="lg:col-span-2 bg-black/30 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-6">Mail Activity</h3>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mailActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0b0f14",
                      border: "1px solid #1f2937",
                      borderRadius: "10px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="received"
                    stroke="#22d3ee"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="unread"
                    stroke="#a855f7"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RECENT MAIL */}
          <div className="bg-black/30 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-6">Recent Mail</h3>

            <div className="space-y-4">
              {mails.map((mail, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex justify-between">
                    <p className="font-semibold">{mail.sender}</p>
                    <span className="text-xs text-gray-400">{mail.time}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{mail.text}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}