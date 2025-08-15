import React from "react";
import { flavorlists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef(null);
  const isTablet = useMediaQuery({
    query: "(max-width : 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (isTablet) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        // markers: true,
        start: "2% top",
        end: `+=${scrollAmount + 1500}px`,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmount + 1500}px`,
      ease: "power1.inOut",
    });

    const titleTl = gsap.timeline({
      defaults: {
        ease: "power1.inOut",
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        // markers: true,
        end: "bottom top",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
        },
        "<"
      );
  });
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
