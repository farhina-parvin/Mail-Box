import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] px-6 py-12">
        
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full z-10">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">📬 Mail-box</Link>
        <Link href="/" className="inline-flex items-center px-4 py-2 text-sm rounded-lg bg-[#0e1424] border border-gray-800 hover:border-teal-500 hover:text-teal-400 transition"> ← Back to Home</Link>
      </nav>
      <div className="max-w-4xl mx-auto">
    
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
        <div className="text-gray-400 space-y-6 leading-relaxed">
          <p>Your privacy is paramount at Mail-box. We collect only the data necessary to provide you with seamless mail management.</p>
          <h2 className="text-xl font-bold text-white">Data Collection</h2>
          <p>We store your name, email, and metadata related to your mailbox activity. We do not sell your personal information to third parties.</p>
          <h2 className="text-xl font-bold text-white">Security</h2>
          <p>All data is encrypted in transit and at rest using industry-standard protocols to ensure your digital communication remains confidential.</p>
        </div>
      </div>
    </div>
  );
}