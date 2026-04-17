"use client";

import Link from "next/link";
import NavLink from "../NavLink";
import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="navbar">
          
          {/* LEFT: Logo */}
          <div className="flex-1">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
            </Link>
          </div>

          {/* RIGHT: Mobile Menu */}
          <div className="flex-none md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost text-xl">
                ☰
              </label>

              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink href="/">
                    <FaHouse /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/timeline">
                    <RiTimeLine /> Timeline
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/stats">
                    <ImStatsDots /> Stats
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Desktop Menu */}
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink href="/">
                  <FaHouse /> Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/timeline">
                  <RiTimeLine /> Timeline
                </NavLink>
              </li>
              <li>
                <NavLink href="/stats">
                  <ImStatsDots /> Stats
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;