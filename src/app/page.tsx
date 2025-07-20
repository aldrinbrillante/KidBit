'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span role="img" aria-label="wave">👋</span>{' '}
          <span className="text-blue-700">Welcome to</span>{' '}
          <span className="text-pink-600">KidBit</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          Helping parents and educators stay in sync — updates, photos, messages, and more.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/login">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition">
              Log In to Your Dashboard
            </button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-pink-600 hover:underline font-medium">
            Sign up here
          </Link>
        </p>
      </div>
    </main>
  );
}
