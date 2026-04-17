import Link from "next/link";
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
              <Image src="/logo.png" alt="logo" width={80} height={80} />
            </Link>
          </div>

          {/* RIGHT: Mobile Hamburger */}
          <div className="flex-none md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost text-xl">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/">
                    <FaHouse /> Home
                  </Link>
                </li>
                <li>
                  <Link href="/timeline">
                    <RiTimeLine /> Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/stats">
                    <ImStatsDots /> Stats
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Desktop Menu */}
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">
                  <FaHouse /> Home
                </Link>
              </li>
              <li>
                <Link href="/timeline">
                  <RiTimeLine /> Timeline
                </Link>
              </li>
              <li>
                <Link href="/stats">
                  <ImStatsDots /> Stats
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
