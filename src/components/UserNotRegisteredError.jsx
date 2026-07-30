import React from 'react';
import { Link } from 'react-router-dom';

export default function UserNotRegisteredError() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white p-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-[#005020]">
          Not Registered
        </h1>
        <p className="mt-3 text-[15px] text-[#555]">
          You are not registered for this app. Please contact an administrator.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-[#0096ff] px-6 py-3 text-sm font-semibold text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}