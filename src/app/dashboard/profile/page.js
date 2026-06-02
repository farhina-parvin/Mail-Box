'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  Mail,
  CreditCard,
  User,
  Shield,
  Bell,
  Camera,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState(null);

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
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex flex-col md:flex-row overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      {/* SIDEBAR */}
      <aside className="w-full md:w-72 bg-black/30 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/10 p-4 md:p-6 flex flex-col">

        <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <span>📬</span> Mail-box
        </div>

        <nav className="mt-6 md:mt-10 space-y-2 flex-1">

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

        {/* LOGOUT */}
        <div className="mt-auto mb-6 flex justify-center md:justify-start">
          <Link href="/" className="flex items-center justify-center gap-3 w-full px-3 md:px-4 py-3 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500/10">
            <LogOut size={18} />
            <span className="text-center w-full md:w-auto">Log Out</span>
          </Link>
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-4 md:p-10 relative z-10">

        {/* PROFILE CARD */}
        <div className="bg-black/30 border border-white/10 rounded-3xl p-6 md:p-8 mb-8">

          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* AVATAR */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center">
                {profilePic ? (
                  <img src={profilePic} className="w-full h-full object-cover" />
                ) : (
                  <User size={32} />
                )}
              </div>

              {/* CAMERA UPLOAD */}
              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-0 right-0 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center"
              >
                <Camera size={14} />
              </button>

              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleUpload}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold">Farhina Parvin</h2>
              <p className="text-gray-400">farhina288@gmail.com</p>

              <button
                onClick={handleDelete}
                className="mt-3 text-sm text-red-400 hover:text-red-300"
              >
                Remove Profile Picture
              </button>

              <div className="flex gap-2 mt-3">
                <span className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full">
                  Premium User
                </span>
                <span className="px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full">
                  Verified
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">Total Emails</p>
            <h2 className="text-3xl font-bold mt-2">324</h2>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">Unread</p>
            <h2 className="text-3xl font-bold mt-2">22</h2>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">Storage Used</p>
            <h2 className="text-3xl font-bold mt-2">68%</h2>
          </div>
        </div>

      </main>
    </div>
  );
}