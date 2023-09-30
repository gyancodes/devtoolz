import Link from "next/link";
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

        <section className="py-20">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="Ivella"
                    className="mr-4 h-12 w-12 rounded-md"
                    src="https://3620107743-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpmUOqZjfGqNkiPmqgnMv%2Fuploads%2F9Qaq1hlaTcqKfrc9k4OG%2Fimage.png?alt=media&token=1ffe8530-19ff-4aea-b020-a99cdc224ce1"
                  />
                  <div>
                    <a href="www.google.com">
                      <h3 className="text-white">Cal.com</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  Scheduling infrastructure for absolutely everyone.
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/calcom/cal.com"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="Rig.dev"
                    className="mr-4 w-10 rounded-md"
                    src="https://docs.rig.dev/img/logo-dark.png"
                  />
                  <div>
                    <a href="www.google.com">
                      <h3 className="text-white">Rig.dev</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  Rig.dev is a developer-centric application platform for
                  Kubernetes ⛵
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/rigdev/rig"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="Meshery"
                    className="mr-4 h-12 w-12 rounded-md"
                    src="https://meshery.io/assets/images/logos/meshery-logo.png"
                  />
                  <div>
                    <a href="www.google.com">
                      <h3 className="text-white">Meshery</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  Meshery, the cloud native manager.
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/meshery/meshery/"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="tiptap"
                    className="mr-4 h-12 w-12 rounded-md"
                    src="https://camo.githubusercontent.com/a1e57801dcd479596fc7fac670540acda3edc1b07d1820ec4315361eba95f310/68747470733a2f2f756e6176617461722e696f2f6769746875622f7565626572646f736973"
                  />
                  <div>
                    <a href="www.google.com">
                      <h3 className="text-white">Tiptap</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  Scheduling infrastructure for absolutely everyone.
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/calcom/cal.com"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="rocket chat"
                    className="mr-4 h-12 w-12 rounded-md"
                    src="https://avatars.githubusercontent.com/u/12508788?s=200&v=4"
                  />
                  <div>
                    <a href="www.google.com">
                      <h3 className="text-white">Rocket Chat</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  The communications platform that puts data protection first.
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/RocketChat/Rocket.Chat"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="nhost"
                    className="mr-4 h-auto w-12 rounded-md"
                    src="https://nhost.io/common/logo.svg"
                  />
                  <div>
                    <a href="www.google.com">
                      <h3 className="text-white">Nhost</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  The Open Source Firebase Alternative with GraphQL.{" "}
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/nhost/nhost"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="supabase"
                    className="mr-4 h-auto w-14 rounded-md"
                    src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=128&q=75"
                  />
                  <div>
                    <a href="www.google.com">
                      <h3 className="text-white">Supabase</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  Supabase is an open source Firebase alternative. We are
                  building the features of Firebase using enterprise-grade open
                  source tools.
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/supabase/supabase"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>

            <div className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400 ">
              <header className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <img
                    alt="supabase"
                    className="mr-4 h-auto w-14 rounded-md"
                    src="https://amplication.com/_next/static/media/logo_desktop.83f8e039.svg"
                  />
                  <div>
                    <a href="www.amplication.com">
                      <h3 className="text-white">Amplication</h3>
                    </a>
                    {/* <span className="text-xs text-white">4 Employees</span> */}
                  </div>
                </div>
              </header>
              <section className="px-4">
                <span className="text-white text-sm">
                  Open-source backend development platform. Build
                  production-ready services without wasting time on repetitive
                  coding..
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={"https://github.com/amplication/amplication"}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedOpenSourceProjects;
