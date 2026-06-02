'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  Mail,
  CreditCard,
  User,
  Upload,
  Trash2,
} from "lucide-react";

export default function DashboardPage() {
  const fileInputRef = useRef(null);

  const [profilePic, setProfilePic] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const saved = localStorage.getItem("profilePic");
    if (saved) setProfilePic(saved);
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = reader.result;
      setProfilePic(img);
      localStorage.setItem("profilePic", img);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    setProfilePic(null);
    localStorage.removeItem("profilePic");
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      {/* PROFILE ICON */}
      <div className="fixed top-6 right-6 z-50">
        <div className="relative">

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-full border border-white/20 cursor-pointer flex items-center justify-center bg-white/5 overflow-hidden"
          >
            {profilePic ? (
              <img src={profilePic} className="w-full h-full object-cover" />
            ) : (
              <User className="text-gray-400" size={20} />
            )}
          </div>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-black/80 border border-white/10 rounded-xl backdrop-blur-xl overflow-hidden">

              <button
                onClick={() => fileInputRef.current.click()}
                className="flex items-center gap-2 w-full px-4 py-3 hover:bg-white/10 text-sm"
              >
                <Upload size={16} /> Upload
              </button>

              <button
                onClick={handleDelete}
                className="flex items-center gap-2 w-full px-4 py-3 hover:bg-white/10 text-sm text-red-400"
              >
                <Trash2 size={16} /> Delete
              </button>

            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      </div>

      {/* SIDEBAR */}
      <aside className="w-72 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6 relative z-10">

      <div className="text-xl font-bold flex items-center gap-2">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <span>📬</span> Mail-box
        </div>
        </div>

        <nav className="mt-10 space-y-2">

          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link href="/dashboard/mail" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <Mail size={18} />
            My Mail
          </Link>

          <Link href="/dashboard/subscription" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <CreditCard size={18} />
            Subscription
          </Link>

          <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <User size={18} />
            Profile
          </Link>

        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8 relative z-10">

        {/* TOP BAR (UPDATED ONLY HERE) */}
   <div className="flex justify-between items-center mb-10 pr-20">

<h2 className="text-gray-300"></h2>

{/* BACK TO HOME BUTTON */}
<Link
  href="/"
  className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-gray-300"
>
  ← Back To Home
</Link>

</div>

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
              Welcome To The Mail-box !
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

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-black/30 border border-white/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-6">Mail Activity</h3>

            <div className="h-[320px] flex items-center justify-center text-gray-500 border border-dashed border-white/10 rounded-2xl">
              Chart Area (Add Recharts here later)
            </div>
          </div>

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