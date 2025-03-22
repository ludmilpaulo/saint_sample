"use client";
import React from "react";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import HeroSection from "@/pages/home/hero-section";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
