"use client";
import React from "react";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import HeroSection from "@/components/pages/home/hero-section";
import CarouselSection from "@/components/pages/home/carousel-section";
import InstagramSection from "@/components/pages/home/instagram-section";
import FAQSection from "@/components/pages/home/faq-section";

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
