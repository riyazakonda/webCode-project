import { FaArrowRight } from "react-icons/fa";
import bannerImg from "../../assets/banner.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useState } from "react";

const HeroSaction = () => {
  const [shoMadal, setShoMadal] = useState(false);

  const openModal = () => setShoMadal(true);
  const closeModal = () => setShoMadal(false);

  return (
    <div className="bg-[#F2F4F8]">
      <div className="max-w-7xl mx-auto container py-20 flex flex-col lg:flex-row justify-between items-center">
        {/* right side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Creative Web Design <br /> For Businesses
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Unlock your design skills to create beautiful websites and apps with
            a poweful and easy-to-use tool.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 lg:justify-start">
            <button className="flex bg-blue-600 text-white px-6 py-3 rounded-md justify-center items-center space-x-2 hover:bg-blue-500 transition">
              <span>Get Started</span>
              <FaArrowRight></FaArrowRight>
            </button>
            <button className="border border-blue-600 px-6 py-3 hover:bg-blue-600 hover:text-white text-blue-600 rounded-md transition">
              Contact Us
            </button>
          </div>
        </div>
        {/* lift side */}
        <div className="lg:w-1/2  mt-10 lg:mt-0 flex justify-end relative">
          <div className="relative group ">
            <img
              src={bannerImg}
              alt="banner image"
              className="rounded-lg shadow-lg"
            />
            <button
              onClick={openModal}
              className="absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-75 transition z-0"
            >
              <FaRegCirclePlay className="text-white text-5xl hover:text-blue-600" />
            </button>
          </div>
        </div>
        {/* shomodal */}
        {shoMadal && (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white text-lg hover:text-white bg-black rounded-full px-2"
              >
                &times;
              </button>
              <iframe
                className="w-full aspect-video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TvWd_D0nwiQ?si=5ZG6DT7NicKOCnSR"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSaction;
