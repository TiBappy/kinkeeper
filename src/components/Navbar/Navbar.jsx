import Link from "next/link";
import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="navbar">
          <div className="flex-1">
           <Link href="/"> <Image src="/logo.png" alt="Profile" width={100} height={100} /></Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">
                  <FaHouse />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/timeline">
                  <RiTimeLine />
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/stats">
                  <ImStatsDots />
                  Stats
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
