import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-10">
      <footer className="max-w-6xl mx-auto px-4 text-center space-y-8">
        {/* Logo + Description */}
        <div>
          <Image
            src="/logo-xl.png"
            alt="footer logo"
            width={150}
            height={150}
            className="mx-auto"
          />
          <p className="text-white mt-4 text-sm md:text-base max-w-md mx-auto">
            Your personal shelf of meaningful connections...
          </p>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-white mb-3">Social Links</p>

          <div className="flex justify-center items-center gap-5">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={28}
              height={28}
            />
            <Image src="/twitter.png" alt="twitter" width={28} height={28} />
            <Image src="/facebook.png" alt="facebook" width={28} height={28} />
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#bee1d5]">
          {/* Left */}
          <div className="text-center md:text-left">
            <p>© 2026 Md Tariqul Islam. All rights reserved.</p>
          </div>

          {/* Right */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-[#badcd0]">
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Terms & Condition</p>
            <p className="cursor-pointer hover:underline">Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
