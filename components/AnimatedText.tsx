import React from "react";

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="relative inline-block cursor-pointer group">
      <span>{text}</span>
      <span className="absolute left-0 -bottom-1 h-[2px]  w-0 bg-current transition-all duration-300 group-hover:w-[70%]" />
    </div>
  );
};

export default AnimatedText;
