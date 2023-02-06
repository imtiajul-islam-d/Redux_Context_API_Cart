import React from "react";

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 h-screen bg-white w-screen z-20 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-dashed border-black rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  );
};

export default Loading;
