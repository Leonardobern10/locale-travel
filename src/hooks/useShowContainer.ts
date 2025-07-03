// useShowContainer.ts
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// registra o plugin
gsap.registerPlugin(ScrollTrigger);

// Hook personalizado
export function useShowContainer(elementSelector: string) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elementSelector, {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: elementSelector,
          start: "top 40%",
          toggleActions: "restart none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [elementSelector]);
}
