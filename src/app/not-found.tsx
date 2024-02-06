import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div className="text-center h-[80vh] w-full flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600">
          Sorry, the page you're looking for could not be found.
        </p>
        <p className="text-lg text-gray-600">
          Go back to{" "}
          <Link href="/" className="text-blue-500 font-bold hover:underline">
            home
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default notfound;
