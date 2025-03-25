"use client";
import React, { useCallback } from "react";
import EventCard from "@/components/event-card";
import IconButton from "@/components/icon-button";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { events } from "@/utils/data/events";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const CarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    WheelGesturesPlugin(),
  ]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="flex flex-col gap-6 items-center">
      <section className="w-[90%] mx-auto my-10 flex items-center gap-4">
        <IconButton onClick={scrollPrev} className="embla__prev" size={70}>
          <RiArrowLeftWideFill />
        </IconButton>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {events.map((event) => (
                <div key={event.id} className="embla__slide">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <IconButton onClick={scrollNext} className="embla__next" size={70}>
          <RiArrowRightWideFill />
        </IconButton>
      </section>
      <button className="w-fit border-2 border-[var-(--primary)] text-[var(--text)] px-12 py-2 text-lg font-semibold font-poppins uppercase flex items-center justify-center hover:border-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all duration-500">
        Event Calendar
      </button>
    </section>
  );
};

export default CarouselSection;
