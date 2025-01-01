"use client"
import AppPreview from "./Pages/AppPreview";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <LandingPage />
      <AppPreview />
    </div>
  );
}
