import React from "react";

const FeaturedOpenSourceProjects = () => {
  return (
    <div className="my-10 py-10">
      <div className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20">
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:ital,wght@1,900&family=Martel+Sans:wght@200&family=Poppins&family=Ubuntu:wght@500&display=swap");

          .custom-text {
            font-family: "Dela Gothic One", cursive;
            font-family: "Lato", sans-serif;
            font-family: "Martel Sans", sans-serif;
            font-family: "Poppins", sans-serif;
            font-family: "Ubuntu", sans-serif;
          }
        `}</style>
        <section>
          <div className="flex justify-center items-center">
            <h1 className="text-5xl text-white custom-text font-semibold">
              Explore{" "}
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                {" "}
                Open Source Projects{" "}
              </span>
            </h1>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default FeaturedOpenSourceProjects;
