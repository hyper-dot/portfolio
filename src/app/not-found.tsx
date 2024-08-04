import React from "react";

export default function NotFound() {
  return (
    <div className="background-div flex flex-1 flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-8 text-2xl text-gray-600">
          Oops! Are you looking for something?
        </p>
        <a
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-lg text-white transition duration-300 hover:bg-primary/80"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
