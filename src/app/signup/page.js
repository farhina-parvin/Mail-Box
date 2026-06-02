'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setFormError("");
    setSuccessMessage("");

    let isValid = true;

    // Name validation
    if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters.");
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      isValid = false;
    }

    if (!isValid) {
      setFormError("Signup failed. Please fix the errors below.");
      return;
    }

    // Success
    setSuccessMessage(
      "Account created successfully! Redirecting to login..."
    );

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-[#0e1424] p-8 rounded-2xl border border-gray-800 shadow-2xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent mb-2"
          >
            Mail-box
          </Link>

          <h2 className="text-2xl font-bold text-white">
            Create an Account
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Start managing your mail efficiently.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {formError && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {formError}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSignup}>
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition"
            />

            {nameError && (
              <p className="text-red-400 text-xs mt-1">
                {nameError}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Business Email
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#131b30] border border-gray-700 rounded-lg px-4 py-3 pr-16 text-white focus:outline-none focus:border-teal-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 8 characters.
            </p>

            {passwordError && (
              <p className="text-red-400 text-xs mt-1">
                {passwordError}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 rounded-lg text-white font-medium transition shadow-lg shadow-teal-500/25"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-teal-400 hover:text-teal-300 font-medium"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}