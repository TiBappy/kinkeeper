"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded ${
        isActive
          ? "bg-[#244D3F] text-white"
          : "text-gray-600 hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;