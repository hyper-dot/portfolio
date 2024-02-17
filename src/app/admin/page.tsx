import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <Link href="/admin/blogs">Blogs</Link>
    </div>
  );
};

export default page;
