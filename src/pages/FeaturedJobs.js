import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedJobs = () => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:ital,wght@1,900&family=Martel+Sans:wght@200&family=Poppins&family=Ubuntu:wght@500&display=swap");

        .featured-text {
          font-family: "Dela Gothic One", cursive;
          font-family: "Lato", sans-serif;
          font-family: "Martel Sans", sans-serif;
          font-family: "Poppins", sans-serif;
          font-family: "Ubuntu", sans-serif;
          background-color: #fbab7e;
          background-image: linear-gradient(
            to right,
            rgb(29, 78, 216),
            rgb(30, 64, 175),
            rgb(17, 24, 39)
          );
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>

      <div className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20">
        <h2 className="my-10 text-xl font-bold md:text-3xl featured-text">
          Featured Startup
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400">
            <header className="flex items-center justify-between p-4">
              <div className="flex">
                <img
                  alt="Ivella"
                  className="mr-4 h-12 w-12 rounded-md"
                  src="https://assets.website-files.com/642540755241b4641efa9b04/64328a8b11af0deaf0a41de0_nav-logo.svg"
                />
                <div>
                  <Link href="/components/companies/Ivella">
                    <h3 className="text-white">Ivella</h3>
                  </Link>
                  <span className="text-xs text-white">4 Employees</span>
                </div>
              </div>
            </header>
            <section className="px-4">
              <span className="text-white text-sm">
                Banking designed for couples, no matter where you are in your
                relationship
              </span>
              <ul className="flex flex-row justify-start  flex-wrap gap-2 mb-4 mt-4 ">
                <li className="flex flex-row items-center text-black bg-green-500 py-1 px-2 rounded-xl font-bold text-sm">
                  <div className="flex font-bold mr-2">
                    <div className="bg-green-900 w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                      <svg
                        viewBox="0 0 16 16"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="styles_checkmark__qEPVA w-2"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  Actively Hiring
                </li>
              </ul>
            </section>
          </div>

          <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400">
            <header className="flex items-center justify-between p-4">
              <div className="flex">
                <img
                  alt="Spheron"
                  className="mr-4 h-12 w-12 rounded-md"
                  src="https://spheron.network/_next/static/media/spheron-logo.d4383cb0.svg?imwidth=128"
                />
                <div>
                  <a href="www.google.com">
                    <h3 className="text-white">Spheron</h3>
                  </a>
                  <span className="text-xs text-white">40 Employees</span>
                </div>
              </div>
            </header>
            <section className="px-4">
              <span className="text-white text-sm">
                Developed by and for developers, our efficient and secure
                Platform-as-a-Service (PaaS) empowers teams to build and deploy
                applications faster with total control and peace of mind
              </span>
              <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                <li className="flex flex-row items-center text-black bg-green-500 py-1 px-2 rounded-xl font-bold text-sm">
                  <div className="flex font-bold mr-2">
                    <div className="bg-green-900 w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                      <svg
                        viewBox="0 0 16 16"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="styles_checkmark__qEPVA w-2"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  Actively Hiring
                </li>
              </ul>
            </section>
          </div>

          <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
            <header className="flex items-center justify-between p-4">
              <div className="flex">
                <img
                  alt="Ivella"
                  className="mr-4 h-12 w-12 rounded-md"
                  src="https://media.licdn.com/dms/image/C4D0BAQFr8rR19fo6iw/company-logo_200_200/0/1646755622345/inflectionai_logo?e=1704326400&v=beta&t=fiDVcjRyApscblqRG7fbLHIyLm5Ci51uXBl8z-4gWTw"
                />
                <div>
                  <a href="www.google.com">
                    <h3 className="text-white">Inflection Ai</h3>
                  </a>
                  <span className="text-xs text-white">4 Employees</span>
                </div>
              </div>
            </header>
            <section className="px-4">
              <span className="text-white text-sm">
                Banking designed for couples, no matter where you are in your
                relationship
              </span>
              <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                <li className="flex flex-row items-center text-black bg-green-500 py-1 px-2 rounded-xl font-bold text-sm">
                  <div className="flex font-bold mr-2">
                    <div className="bg-green-900 w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                      <svg
                        viewBox="0 0 16 16"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="styles_checkmark__qEPVA w-2"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  Actively Hiring
                </li>
              </ul>
            </section>
          </div>

          <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400">
            <header className="flex items-center justify-between p-4">
              <div className="flex">
                <img
                  alt="Scattr"
                  className="mr-4 h-12 w-12 rounded-md"
                  src="https://media.licdn.com/dms/image/D560BAQEjcAKE5F4yBQ/company-logo_200_200/0/1665466698646?e=1704326400&v=beta&t=UHnukQ_XsAQHEauWgqFVWTDexeMJwlFVevk6Iah-MYo"
                />
                <div>
                  <a href="www.google.com">
                    <h3 className="text-white">Scattr</h3>
                  </a>
                  <span className="text-xs text-white">11 Employees</span>
                </div>
              </div>
            </header>
            <section className="px-4">
              <span className="text-white text-sm">
                The Easiest Way to Spread Your Writing Across the Web
              </span>
              <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                <li className="flex flex-row items-center text-black bg-green-500 py-1 px-2 rounded-xl font-bold text-sm">
                  <div className="flex font-bold mr-2">
                    <div className="bg-green-900 w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                      <svg
                        viewBox="0 0 16 16"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="styles_checkmark__qEPVA w-2"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  Actively Hiring
                </li>
              </ul>
            </section>
          </div>

          <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400">
            <header className="flex items-center justify-between p-4">
              <div className="flex">
                <img
                  alt="Cal.com"
                  className="mr-4 h-12 w-12 rounded-md"
                  src="https://3620107743-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpmUOqZjfGqNkiPmqgnMv%2Fuploads%2F9Qaq1hlaTcqKfrc9k4OG%2Fimage.png?alt=media&token=1ffe8530-19ff-4aea-b020-a99cdc224ce1"
                />
                <div>
                  <a href="www.google.com">
                    <h3 className="text-white">Cal.com</h3>
                  </a>
                  <span className="text-xs text-white">30 Employees</span>
                </div>
              </div>
            </header>
            <section className="px-4">
              <span className="text-white text-sm">
                Scheduling infrastructure for absolutely everyone.
              </span>
              <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                <li className="flex flex-row items-center text-black bg-green-500 py-1 px-2 rounded-xl font-bold text-sm">
                  <div className="flex font-bold mr-2">
                    <div className="bg-green-900 w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                      <svg
                        viewBox="0 0 16 16"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="styles_checkmark__qEPVA w-2"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.91 10.496L3.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.493-.09l7-8a1 1 0 10-1.572-1.235L5.91 10.496z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  Actively Hiring
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
