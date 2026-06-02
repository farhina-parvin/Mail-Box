import mockData from './mockData.json';

export default function DashboardPage() {
  const { user, recentMail } = mockData;

  return (
    <div className="flex min-h-screen bg-[#0b0f19]">
      {/* Sidebar UI Component */}
      <aside className="w-64 bg-[#080c14] border-r border-gray-900 p-6 flex flex-col justify-between">
        <div>
          <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent mb-10">
            📬 Mail-box
          </div>
          <nav className="space-y-4">
            <div className="px-4 py-2.5 bg-gradient-to-r from-teal-500/10 to-purple-500/10 border-l-2 border-teal-400 text-teal-400 rounded-r-md font-medium cursor-pointer">
              📊 Dashboard
            </div>
            <div className="px-4 py-2.5 text-gray-400 hover:text-white hover:bg-gray-900 rounded-md transition cursor-pointer">
              ✉️ My Mail
            </div>
            <div className="px-4 py-2.5 text-gray-400 hover:text-white hover:bg-gray-900 rounded-md transition cursor-pointer">
              💳 Subscription
            </div>
          </nav>
        </div>
        <div className="text-xs text-gray-600">Logged in as {user.name}</div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-10 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 blur-[100px] pointer-events-none rounded-full" />
        
        {/* Profile / Greeting Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome Back, {user.name}!</h1>
            <p className="text-sm text-gray-400">Welcome to your dummy data overview layer.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-teal-400" />
        </div>

        {/* Overview Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0e1424] p-6 rounded-xl border border-gray-900">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Total Mail</p>
            <p className="text-3xl font-bold text-white">{user.totalMail}</p>
          </div>
          <div className="bg-[#0e1424] p-6 rounded-xl border border-gray-900">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Unread Messages</p>
            <p className="text-3xl font-bold text-teal-400">{user.unreadCount}</p>
          </div>
          <div className="bg-[#0e1424] p-6 rounded-xl border border-gray-900">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Recent Scans</p>
            <p className="text-3xl font-bold text-purple-400">{user.recentScans}</p>
          </div>
        </div>

        {/* Interactive Layout Mockup Area */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-[#0e1424] p-6 rounded-xl border border-gray-900 min-h-[250px] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-200">Mail Volume Activity</h3>
              <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">Mock API Chart</span>
            </div>
            {/* Visualizer container for styling consistency */}
            <div className="h-32 w-full bg-gradient-to-t from-purple-500/10 to-teal-500/5 rounded-lg border border-dashed border-gray-800 flex items-center justify-center text-gray-500 text-sm">
              [Activity Sparkline Graph Implementation Area]
            </div>
          </div>

          {/* Quick Mail Panel (Task List item representation) */}
          <div className="bg-[#0e1424] p-6 rounded-xl border border-gray-900">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-200">Recent Mail</h3>
              <span className="text-xs bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded font-mono">JSON</span>
            </div>
            <div className="space-y-3">
              {recentMail.map((mail) => (
                <div key={mail.id} className="p-3 bg-[#131b30] rounded-lg border border-gray-900 hover:border-gray-800 transition cursor-pointer">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold text-teal-300">{mail.sender}</span>
                    <span className="text-gray-500">{mail.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{mail.snippet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}