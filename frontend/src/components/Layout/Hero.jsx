import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import heroImg8 from "../../assets/hero image 1.png";
import heroImg6 from "../../assets/hero image 2.png";
import heroImg3 from "../../assets/hero image 3.png";
import heroImg4 from "../../assets/mug hero.png";

import heroImg1 from "../../assets/cord model 1.png";
import heroImg2 from "../../assets/avasa kurtas model 3.png";
import heroImg5 from "../../assets/kurta model1.png";
import heroImg7 from "../../assets/avasa kurtas model 3.png";

import heroimg10 from "../../assets/hero-desk1.png";
import heroimg11 from "../../assets/hero-desk2.png";
import heroimg12 from "../../assets/hero-desk3.png";



// Array of hero images with corresponding routes
const heroImages = [
  {  mobile: heroImg1, link: "/collection/all?gender=Women" },
  {  mobile: heroImg2, link: "/collection/all?gender=Women" },
  {  mobile: heroImg5, link: "/collection/all?gender=Women" },
  { desktop: heroImg12, mobile: heroImg7, link: "/collection/all?category=Women" },

  {  mobile: heroImg8, link: "/collection/all?gender=Women" },
  { desktop: heroImg11, mobile: heroImg6, link: "/collection/all?gender=Men" },
  {  mobile: heroImg3, link: "/collection/all?gender=Women" },
  { desktop: heroImg10, mobile: heroImg4, link: "/collection/all?category=Bottom Wear" },
];

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to correct slide
  useEffect(() => {
    if (sliderRef.current) {

      const sliderWidth = sliderRef.current.offsetWidth;

      sliderRef.current.scrollTo({
        left: currentIndex * sliderWidth,
        behavior: "smooth",
      });

    }
  }, [currentIndex]);

  return (
    <section className="relative overflow-hidden w-full">

      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-[500px] md:h-[650px] lg:h-[750px] xl:h-[800px]"
        style={{ scrollbarWidth: "none" }}
      >

        {heroImages.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="w-full h-full flex-shrink-0 snap-center"
            style={{ minWidth: "100%" }}
          >

            {/* Desktop Image */}
            <img
              src={item.desktop}
              alt={`Hero Desktop ${index + 1}`}
              className="hidden md:block w-full h-full object-cover"
            />

            {/* Mobile Image */}
            <img
              src={item.mobile}
              alt={`Hero Mobile ${index + 1}`}
              className="block md:hidden w-full h-full object-cover"
            />

          </Link>
        ))}

      </div>

    </section>
  );
};

export default Hero;
