import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, type RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useScroll = (ref: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const animation = gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play resume none none",
        markers: true, // ← habilita debug visual
      },

      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [ref]);
};
