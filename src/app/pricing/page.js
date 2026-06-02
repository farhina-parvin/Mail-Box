import Link from 'next/link';

export default function PricingPage() {
  const pricingPlans = [
    { name: "BASIC", price: "$9.99", storage: "5GB", seats: "1 User seat", description: "Perfect for individuals starting out." },
    { name: "ADVANCED", price: "$24.99", storage: "25GB", seats: "5 User seats", description: "Ideal for small teams and growing businesses.", recommended: true },
    { name: "PRO", price: "$49.99", storage: "100GB", seats: "Unlimited seats", description: "For enterprises needing maximum capacity." }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] relative overflow-hidden flex flex-col">
      {/* Background Gradients */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 to-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Navbar (Simplified for this page) */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full z-10">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
          📬 Mail-box
        </Link>
        <Link href="/" className="text-gray-400 hover:text-white transition">Back to Home</Link>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Perfect Plan</h1>
          <p className="text-gray-400 text-lg">Transparent pricing for modern mail management.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`relative p-8 rounded-2xl border ${plan.recommended ? 'border-teal-500 bg-[#0e1424] shadow-2xl shadow-teal-500/10' : 'border-gray-800 bg-[#0b0f19]'} flex flex-col`}>
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
              <div className="text-4xl font-extrabold text-white mb-6">{plan.price}<span className="text-lg text-gray-500 font-medium">/mo</span></div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-300 text-sm">
                  <span className="text-teal-400 mr-2">✓</span> {plan.storage} Secure Storage
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <span className="text-teal-400 mr-2">✓</span> {plan.seats}
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <span className="text-teal-400 mr-2">✓</span> API Access
                </li>
              </ul>
              
              <Link href="/signup" className={`w-full py-3 rounded-lg font-medium text-center transition ${plan.recommended ? 'bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}