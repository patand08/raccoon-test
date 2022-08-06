import React from "react";

export default () => {
  return (
    <div className="flex items-center justify-left h-screen bg-scroll  bg-center bg-cover outside-img">
      <div className="fixed right-0 top-0 left-0 bottom-0 bg-black/40 z-[2]" />
      <div className="p-5 ml-5 sm:ml-10 md:ml-20 mt-[-10rem] text-white z-[3]">
        <h2 className="text-5xl font-bold">Lorem Ipsum</h2>
        <p className="text-xl py-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          euismod mauris in justo pretium sodales. Donec eu ornare nulla, at.{" "}
        </p>
        <button
          type="button"
          className="inline-flex w-1/3 md:w-1/4 justify-center rounded-sm bg-main px-3 lg:px-5 py-2 text-md font-bold text-white hover:bg-[#0274B7]"
        >
          Foo
        </button>
      </div>
    </div>
  );
};
