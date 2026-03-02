"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="bg-white max-w-md w-full rounded-3xl shadow-xl border border-red-50 p-8 text-center relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />

        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={40} className="text-red-500" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">Something went wrong!</h2>
        <p className="text-slate-600 mb-8">
          We apologize for the inconvenience. Our team has been notified.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-3 px-6 bg-primary text-white font-medium rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCcw size={18} /> Try again
          </button>
          <Link
            href="/"
            className="w-full py-3 px-6 bg-slate-50 text-slate-700 font-medium rounded-xl hover:bg-slate-100 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
