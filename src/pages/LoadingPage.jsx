import React from "react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 to-sky-200 dark:from-purple-900 dark:to-indigo-950">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        
        <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
