import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link href={"/"}>Go Home</Link>
    </div>
  );
}

export default NotFound;
