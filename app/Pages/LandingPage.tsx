import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative h-[100vh] flex justify-center items-center bg-cover bg-center bg-accentDark">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('/Images/background.png')] bg-cover bg-center blur-lg opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-5 px-5 text-center">
        <Image
          alt="TerapiniSeç Logo"
          src="/Images/Terapinisec-Blue-Transparent.png"
          width={150}
          height={150}
          className="md:w-[200px] md:h-[200px]"
        />
        <div className="flex flex-col items-center space-y-3 md:space-y-5 text-center text-textDark">
          <h1 className="text-4xl md:text-6xl font-bold">TerapiniSeç</h1>
          <h2 className="text-2xl md:text-4xl">Ruh sağlığınızı iyileştirin.</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
