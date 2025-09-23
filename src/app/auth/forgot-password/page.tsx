"use client";
import React from "react";
import Link from "next/link";

const ForgotPasswordpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-pink-600 font-semibold hover:underline"
          >
            Go Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordpage;
