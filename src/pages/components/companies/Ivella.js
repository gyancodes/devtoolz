import React from "react";

const Ivella = () => {
  return (
    <div>
      <style jsx global>{`
        .typeText {
          color: #fff;
          background-image: linear-gradient(to bottom right, #ff5722, #f50057);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.8rem;
        }
      `}</style>

      <section className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20 border-solid my-20 p-4 h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <div className="flex flex-col">
          <h2 className="text-blue-700 text-4xl font-extrabold   ">Jobs</h2>
          <section className="flex py-10">
            <div className="flex gap-4 justify-around">
              <h3 className="font-semibold font-mono text-teal-500 text text-2xl">
                Open application
              </h3>
              <span className="text-white typeText text-sm ">Full Time</span>
              <div>
                <button className="bg-purple-800 text-white px-4 py-2 rounded-md">
                  Apply
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Ivella;
