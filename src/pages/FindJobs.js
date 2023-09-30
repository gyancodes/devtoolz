import React from "react";
import FeaturedJobs from "./FeaturedJobs";

const FindJobs = () => {
  return (
    <div className="my-10 py-6 ">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:ital,wght@1,900&family=Martel+Sans:wght@200&family=Poppins&family=Ubuntu:wght@500&display=swap");

        .custom-text {
          font-family: "Dela Gothic One", cursive;
          font-family: "Lato", sans-serif;
          font-family: "Martel Sans", sans-serif;
          font-family: "Poppins", sans-serif;
          font-family: "Ubuntu", sans-serif;
        }

        .infocard {
          color: #fff;
          background-color: #fbab7e;
          background-image: linear-gradient(
            to right,
            rgb(29, 78, 216),
            rgb(30, 64, 175),
            rgb(17, 24, 39)
          );
        }
      `}</style>
      <section>
        <div className="flex justify-center items-center">
          <h1 className="text-5xl text-white custom-text font-semibold">
            Discover your Next{" "}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "}
              Opportunity{" "}
            </span>
          </h1>
        </div>
      </section>
      <FeaturedJobs />

      <>
        {/* Card Section */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Card */}
            <a
              className="group flex flex-col  border shadow-sm rounded-xl hover:shadow-md transition infocard  dark:border-gray-800"
              href="#"
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold  text-white">
                      Web Development
                    </h3>
                    <p className="text-sm text-white">4 job positions</p>
                  </div>
                  <div className="pl-3">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition infocard dark:border-gray-800"
              href="#"
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-white ">
                      Mobile Development
                    </h3>
                    <p className="text-sm text-white">26 job positions</p>
                  </div>
                  <div className="pl-3">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}

            {/* Card */}
            <a
              className="group flex flex-col  border shadow-sm rounded-xl hover:shadow-md transition infocard dark:border-gray-800"
              href="#"
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className=" font-semibold text-white">DevRel</h3>
                    <p className="text-sm text-white">2 job positions</p>
                  </div>
                  <div className="pl-3">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}

            {/* Card */}
            <a
              className="group flex flex-col infocard border shadow-sm rounded-xl hover:shadow-md transition  dark:border-gray-800"
              href="#"
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className=" font-semibold text-white  ">Devops</h3>
                    <p className="text-sm text-white">10 job positions</p>
                  </div>
                  <div className="pl-3">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Section */}
      </>
    </div>
  );
};

export default FindJobs;
