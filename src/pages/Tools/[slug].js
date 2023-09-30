import React, { useState } from "react";
import { useRouter } from "next/router";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [searchInput, setSearchInput] = useState("");
  const [matchingElements, setMatchingElements] = useState([]);

  const handleSearchInputChange = (e) => {
    const input = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
    setSearchInput(input);

    // Filter matching elements based on the search input
    const filteredElements = document.querySelectorAll(".text-white .text-lg"); // Select all <h2> elements
    const matching = Array.from(filteredElements).filter((element) =>
      element.textContent.toLowerCase().includes(input)
    );

    // Highlight matching elements
    setMatchingElements(matching);
  };

  return (
    <div className="text-white">
      {/* Hello you are searching for :- {slug} */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-xl px-4 mx-auto mt-12"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search your tool"
            className="w-full py-3 pl-12 pr-4 text-white border rounded-md outline-none bg-black focus:bg-gray-800 focus:border-purple-800"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
      </form>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          {matchingElements.length > 0 && (
            <div className="mb-4">
              <h3>Matching Elements:</h3>
              <ul>
                {matchingElements.map((element, index) => (
                  <li key={index}>{element.textContent}</li>
                ))}
              </ul>
            </div>
          )}

          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Kickstart your development with devtools
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever you desire in your product, you will find the appropriate
              tool for it here at devtoolz from the vast database of varied
              tools accessible on the web.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  NLTK (Natural Language Toolkit)
                </h2>
                <p class="leading-relaxed text-base">
                  A Python library for NLP that provides tools for tasks like
                  tokenization, stemming, tagging, parsing.
                </p>
                <a href="https://www.nltk.org/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  TextBlob
                </h2>
                <p class="leading-relaxed text-base">
                  A simple and easy-to-use NLP library for Python, offering
                  features like sentiment analysis.
                </p>
                <a href="https://textblob.readthedocs.io/en/dev/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Spacy
                </h2>
                <p class="leading-relaxed text-base">
                  Already mentioned in the previous list, SpaCy is a powerful
                  and efficient NLP library for Python.
                </p>
                <a href="https://spacy.io/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  OpenCV.js
                </h2>
                <p class="leading-relaxed text-base">
                  A JavaScript library for computer vision tasks, enabling image
                  and video analysis directly in the browser.
                </p>
                <a href="https://docs.opencv.org/3.4/df/d0a/tutorial_js_intro.html">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            {/* 2nd core */}
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Dlib
                </h2>
                <p class="leading-relaxed text-base">
                  A C++ library with Python bindings for various computer vision
                  tasks, including facial recognition and object detection.
                </p>
                <a href="http://dlib.net/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  YOLO (You Only Look Once)
                </h2>
                <p class="leading-relaxed text-base">
                  An open-source real-time object detection system that can be
                  used in web applications.
                </p>
                <a href="https://pjreddie.com/darknet/yolo/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Rasa
                </h2>
                <p class="leading-relaxed text-base">
                  An open-source framework for building conversational AI
                  chatbots. It offers both NLU and dialogue management .
                </p>
                <a href="https://rasa.com/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Botpress
                </h2>
                <p class="leading-relaxed text-base">
                  An open-source platform for building and managing chatbots and
                  conversational applications.
                </p>
                <a href="https://botpress.com/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            {/* 3rd core */}
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Surprise
                </h2>
                <p class="leading-relaxed text-base">
                  A Python scikit for building and analyzing recommendation
                  systems for different charts and systems.
                </p>
                <a href="https://pypi.org/project/scikit-surprise/1.0.2/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Mozilla DeepSpeech
                </h2>
                <p class="leading-relaxed text-base">
                  An open-source automatic speech recognition (ASR) engine
                  involves voice recognition software.
                </p>
                <a href="https://hacks.mozilla.org/2019/12/deepspeech-0-6-mozillas-speech-to-text-engine/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Web Speech API
                </h2>
                <p class="leading-relaxed text-base">
                  A web API that allows you to integrate speech recognition and
                  synthesis into web applications.
                </p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Stable Baselines
                </h2>
                <p class="leading-relaxed text-base">
                  A set of high-quality implementations of reinforcement
                  learning algorithms in Python.
                </p>
                <a href="https://stable-baselines.readthedocs.io/en/master/">
                  <button class="flex mt-6 text-white bg-violet-700 border-0 py-2 px-5 focus:outline-none hover:bg-violet-900 rounded">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slug;
