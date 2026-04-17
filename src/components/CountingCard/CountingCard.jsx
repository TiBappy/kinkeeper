import React from "react";

const CountingCard = () => {
  return (
    <div className="bg-green-50">
      <div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-10 text-center rounded-lg">
            <h1 className="text-2xl text-[#244D3F] font-semibold">10</h1>
            <p>Total Friends</p>
          </div>
          <div className="bg-white p-10 text-center rounded-lg">
            <h1 className="text-2xl text-[#244D3F] font-semibold">3</h1>
            <p>On Track</p>
          </div>
          <div className="bg-white p-10 text-center rounded-lg">
            <h1  className="text-2xl text-[#244D3F] font-semibold">6</h1>
            <p>Need Attention</p>
          </div>
          <div className="bg-white p-10 text-center rounded-lg">
            <h1  className="text-2xl text-[#244D3F] font-semibold">12</h1>
            <p>Interactions This Month</p>
          </div>
        </div>
      </div>
      <div className="divider max-w-6xl mx-auto"></div>
    </div>
  );
};

export default CountingCard;
