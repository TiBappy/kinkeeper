import React from "react";

const Banner = () => {
  return (
    <div className="bg-green-50">
      <div className="min-h-60vh max-w-6xl mx-auto py-7 space-y-4">
        <h1 className="text-[#244D3F] text-4xl font-bold text-center">Friends to keep close in your life</h1>
        <p  className="text-[#244D3F] text-xs text-center max-w-110 mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <div className="text-center">
          <button className="btn bg-[#244D3F] text-white font-normal"> + Add a Friend</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
