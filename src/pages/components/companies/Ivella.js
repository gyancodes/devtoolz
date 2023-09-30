import React from "react";

const Ivella = () => {
  return (
    <div>
      <section className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20">
        <div className="">
          <img
            alt="Ivella"
            className="mr-4 h-36 w-36 rounded-md"
            src="https://assets.website-files.com/642540755241b4641efa9b04/64328a8b11af0deaf0a41de0_nav-logo.svg"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-white text-4xl  ">Jobs</h2>
          <section className="flex py-10">
            <div>
              <h3 className="text-white text-2xl">Software Engineer</h3>
              <span className="text-white text-sm">Full Time</span>
            </div>
            
          </section>
        </div>
      </section>
    </div>
  );
};

export default Ivella;
