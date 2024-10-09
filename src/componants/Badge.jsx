import React from "react";

const Badge = ({className,text}) => {
  return (
    <div>
      <div className={`text-sm font-bold font-dm bg-black text-white w-28 py-3 text-center  ${className}`}>{text}</div>
    </div>
  );
};

export default Badge;
