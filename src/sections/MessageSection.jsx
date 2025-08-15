import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const MessageSection = () => {
  useGSAP(() => {
    const firstMessage = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMessage = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMessage.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    gsap.to(secondMessage.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top center",
      },
    });

    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });


    gsap.from(paragraphSplit.words, {
      rotate : 3,
      yPercent : 300,
      duration : 0.5,
      stagger : 0.01,
      ease : "power1.inOut",
      scrollTrigger : {
        trigger : ".message-content p",
        start : "top center",
        // markers : true
      }
    })
  });
  return (
    <section className="message-content">
      <div className="container flex-center mx-auto py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">stir up your fearless past and</h1>
            <div
              style={{
                clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>
            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you&apos;re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
