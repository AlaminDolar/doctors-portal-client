import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex items-center justify-center ">
        <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
