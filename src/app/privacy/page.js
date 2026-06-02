import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-8">
            Privacy Policy
          </h1>
    
          <div className="bg-[#0e1424] border border-gray-800 rounded-2xl p-8 space-y-6">
    
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Information Collection
              </h2>
              <p className="text-gray-400">
                Mail-box collects only the information required to provide
                services and improve user experience.
              </p>
            </section>
    
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Data Usage
              </h2>
              <p className="text-gray-400">
                User data is used to improve functionality, security, and
                communication within the platform.
              </p>
            </section>
    
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Data Security
              </h2>
              <p className="text-gray-400">
                We implement industry-standard security measures to protect
                user information from unauthorized access.
              </p>
            </section>
    
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Third-Party Services
              </h2>
              <p className="text-gray-400">
                Certain features may rely on third-party providers. Their
                privacy policies may apply when using those services.
              </p>
            </section>
    
          </div>
        </div>
      );
    }
    