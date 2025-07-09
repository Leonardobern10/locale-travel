import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, type RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useScroll = (
     ref: RefObject<HTMLDivElement | null>,
     duration?: number,
     x?: number,
     y?: number
) => {
     useEffect(() => {
          const element = ref.current;

          if (!element) return;

          const ctx = gsap.context(() => {
               const animation = gsap.from(element, {
                    x: x ? x : 0,
                    y: y ? y : 0,
                    opacity: 0,
                    duration: duration ? duration : 1,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                         trigger: element,
                         start: 'top+=20% 80%',
                         toggleActions: 'play pause resume pause'
                         // scrub: true, // Removido para evitar comportamento travado
                    }
               });

               return () => {
                    animation.scrollTrigger?.kill();
                    animation.kill();
               };
          }, element); // garante isolamento do GSAP no elemento correto

          return () => ctx.revert(); // limpa contexto ao desmontar
     }, [ref]);
};
