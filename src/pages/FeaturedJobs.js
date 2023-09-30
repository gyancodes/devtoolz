import Image from "next/image";
import React from "react";

const FeaturedJobs = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20">
      <h2 className="my-8 text-xl font-bold md:text-2xl">Featured</h2>
      <div className="mb-16 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400">
          <header className="flex items-center justify-between p-4">
            <div className="flex">
              <Image
                alt="Ivella"
                className="mr-4 h-12 w-12 rounded-md"
                width={200}
                height={200}
                src="https://assets.website-files.com/642540755241b4641efa9b04/64328a8b11af0deaf0a41de0_nav-logo.svg"
              />
              <div>
                <h3></h3>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
