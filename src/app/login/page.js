'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setLoginError("");

    let isValid = true;

    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    if (!isValid) {
      setLoginError("Login failed. Please fix the errors below.");
      return;
    }

    if (email === "admin@gmail.com" && password === "password123") {
      router.push("/dashboard");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-[#0e1424] p-8 rounded-2xl border border-gray-800 shadow-2xl relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent mb-2"
          >
            📬 Mail-box
          </Link>
          <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-1">
            Log in to manage your digital mail.
          </p>
        </div>

        {/* LOGIN ERROR */}
        {loginError && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {loginError}
          </p>
        )}

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleLogin}>
          
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition"
            />

            {emailError && (
              <p className="text-red-400 text-xs mt-1">
                {emailError}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-400">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs text-teal-400 hover:text-teal-300"
              >
                Forgot?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-3 pr-20 text-white focus:outline-none focus:border-teal-500 transition"
              />

              {/* SHOW/HIDE BUTTON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {passwordError && (
              <p className="text-red-400 text-xs mt-1">
                {passwordError}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 rounded-lg text-white font-medium transition shadow-lg shadow-teal-500/25"
          >
            Log In
          </button>
        </form>

        {/* SIGNUP */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}