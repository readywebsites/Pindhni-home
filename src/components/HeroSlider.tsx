import { useEffect, useState } from "react";

import slide1 from "/images/banner1.webp";
import slide2 from "/images/banner2.webp";
import slide3 from "/images/banner3.webp";
import slide4 from "/images/banner4.webp";
import slide5 from "/images/banner5.webp";

const desktopSlides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
];

const mobileSlides = [
  "/images/phone-banner1.webp",
  "/images/phone-banner2.webp",
  "/images/phone-banner3.webp",
  "/images/phone-banner4.webp",
  "/images/phone-banner5.webp",
];

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const isDesktop = useIsDesktop();

  const slides = isDesktop ? desktopSlides : mobileSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="relative w-full"
        style={{ height: isDesktop ? '80vh' : '70vh' }}
      >

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 overflow-hidden
              transition-opacity duration-700
              ${
                current === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }
            `}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{
                minWidth: '100%',
                minHeight: '100%',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        ))}

        {/* Pindhni Controls */}
        <div
          className="
            absolute
            bottom-12
            right-8
            md:bottom-[52px]
            z-20
            flex
            flex-col
            items-end
            gap-5
          "
        >
          {/* Shop Now Button */}
          <button
            className="
              uppercase
              tracking-[0.3em]
              font-normal
              transition-all
              duration-300
            "
            style={{ backgroundColor: 'white', color: 'black', padding: '12px 28px', fontSize: '12px' }}
          >
            Shop Now
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="w-3 h-3 flex items-center justify-center"
              >
                {current === index ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" key={current}>
                    <circle cx="5" cy="5" r="3" fill="rgba(255,255,255,0.5)" />
                    <circle
                      cx="5"
                      cy="5"
                      r="4"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeDasharray="25.2"
                      strokeDashoffset="25.2"
                      transform="rotate(-90 5 5)"
                    >
                      <animate attributeName="stroke-dashoffset" from="25.2" to="0" dur="5s" />
                    </circle>
                  </svg>
                ) : (
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;