import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold text-[#244D3F] block">
        404: Not Found
      </h1>
        
      <Link
        href="/"
        className="btn bg-[#244D3F] text-white px-4 py-2 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
