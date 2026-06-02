'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Mail,
  CreditCard,
  User,
} from "lucide-react";

const mockEmails = [
  { id: 1, sender: "Google Cloud", subject: "Billing Invoice - May", preview: "Your monthly invoice is ready to view...", body: "Hello Alice, \n\nYour invoice for May 2026 is attached. Total amount: $14.99.", date: "May 25", unread: true },
  { id: 2, sender: "Amazon Logistics", subject: "Delivery Update", preview: "Your package has been delivered...", body: "Delivered at 2:30 PM.", date: "May 24", unread: false },
  { id: 3, sender: "Project Alpha Team", subject: "Meeting Notes", preview: "Here are the notes...", body: "Great work today.", date: "May 22", unread: false },
];

export default function MyMailPage() {
  const [selectedMail, setSelectedMail] = useState(mockEmails[0]);

  return (
    <div className="min-h-screen bg-[#070b14] text-white flex overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />

      {/* SIDEBAR (same style) */}
      <aside className="w-72 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6">

      <div className="text-xl font-bold flex items-center gap-2">
        <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
          <span>📬</span> Mail-box
        </div>
        </div>

        <nav className="mt-10 space-y-2">

          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Mail size={18} />
            My Mail
          </div>

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
      <main className="flex flex-1">

        {/* EMAIL LIST */}
        <div className="w-1/3 border-r border-white/10 bg-[#0b0f19]">
          <div className="p-4 border-b border-white/10 font-bold">Inbox</div>

          {mockEmails.map(mail => (
            <div
              key={mail.id}
              onClick={() => setSelectedMail(mail)}
              className={`p-4 cursor-pointer border-b border-white/10 hover:bg-white/5 ${
                selectedMail.id === mail.id ? "bg-white/5" : ""
              }`}
            >
              <p className="font-semibold text-sm">{mail.sender}</p>
              <p className="text-xs text-gray-400">{mail.subject}</p>
            </div>
          ))}
        </div>

        {/* PREVIEW */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4">{selectedMail.subject}</h2>
          <p className="text-gray-300 whitespace-pre-wrap">{selectedMail.body}</p>
        </div>

      </main>
    </div>
  );
}