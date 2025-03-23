"use client";
import React, { useCallback } from "react";
import EventCard from "@/components/event-card";
import IconButton from "@/components/icon-button";
import useEmblaCarousel from "embla-carousel-react";

// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { events } from "@/utils/data/constants";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const CarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
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
  );
};

export default CarouselSection;
