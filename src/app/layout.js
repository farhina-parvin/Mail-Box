import './globals.css';

export const metadata = {
  title: 'Mail-box | Modern Mail Management',
  description: 'Effortless, secure, and modern mailbox interface.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The body tag wraps all your pages and applies the global dark background */}
      <body className="bg-[#0b0f19] text-gray-200 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}