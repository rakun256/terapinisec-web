'use client';
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative h-[100vh] flex justify-center items-center bg-cover bg-center bg-accentDark">
      <div className="absolute inset-0 bg-[url('/Images/background.png')] bg-cover bg-center blur-lg opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center space-y-5 px-5 text-center">
        <img
          src="/Images/TerapiniSec-Blue-Transparent.png"
          alt="TerapiniSeç Logo"
          className="w-40 h-40 md:w-52 md:h-52"
        />
        <div className="flex flex-col items-center space-y-3 md:space-y-5 text-center text-textDark">
          <h1 className="text-4xl md:text-6xl font-bold">TerapiniSeç</h1>
          <h2 className="text-2xl md:text-4xl">Ruh sağlığınızı iyileştirin.</h2>
        </div>
        <div className="flex items-center gap-5">
          <button className="px-4 py-2 text-lg font-light text-textDark rounded-full border-[1px] border-textDark hover:bg-textDark hover:text-backgroundLight transition-all duration-200 ease-in ">
            Hemen Başla!
          </button>
          <button className="px-4 py-2 text-lg font-light text-textDark rounded-full border-[1px] border-textDark hover:bg-textDark hover:text-backgroundLight transition-all duration-200 ease-in ">
            Daha fazla öğren.
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
