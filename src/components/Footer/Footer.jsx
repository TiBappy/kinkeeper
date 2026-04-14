import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-10">
      <footer className="text-center space-y-6">
        <div>
          <Image
            src="/logo-xl.png"
            alt="footer logo"
            width={200}
            height={200}
            className="mx-auto border"
          />
          <p className="text-white mt-4">
            Your personal shelf of meaningful connections...
          </p>
        </div>

        <div>
          <p className="text-white mb-2">Social Links</p>

          <div className="flex justify-center items-center gap-4">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={30}
              height={30}
            />
            <Image src="/twitter.png" alt="twitter" width={30} height={30} />
            <Image src="/facebook.png" alt="facebook" width={30} height={30} />
          </div>
        </div>
        <div className="divider max-w-6xl mx-auto"></div>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-xs text-[#bee1d5]">
            <p>© 2026 Md Tariqul Islam. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#badcd0]">
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
