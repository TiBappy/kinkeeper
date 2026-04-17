"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // normalize paths (remove trailing slash)
  const normalize = (path) => path.replace(/\/$/, "") || "/";

  const currentPath = normalize(pathname);
  const targetPath = normalize(href);

  // active logic
  const isActive =
    targetPath === "/"
      ? currentPath === "/"
      : currentPath === targetPath ||
        currentPath.startsWith(targetPath + "/");

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 transition-all duration-200 ${
        isActive
          ? "text-white font-semibold bg-[#244D3F]"
          : "text-gray-600 hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;