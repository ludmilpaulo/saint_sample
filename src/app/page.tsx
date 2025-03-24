"use client";
import React from "react";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import HeroSection from "@/pages/home/hero-section";
import CarouselSection from "@/pages/home/carousel-section";
import InstagramSection from "@/pages/home/instagram-section";
import FAQSection from "@/pages/home/faq-section";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <CarouselSection />
      <InstagramSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
