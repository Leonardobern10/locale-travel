import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// registre o plugin
gsap.registerPlugin(ScrollTrigger);

export default function useShowSequence(
     elements: string,
     triggerElement: string
): void {
     useEffect(() => {
          const ctx = gsap.context(() => {
               const items = gsap.utils.toArray(elements);

               gsap.from(items, {
                    opacity: 0,
                    x: -100,
                    stagger: 0.2,
                    duration: 1,
                    scrollTrigger: {
                         trigger: triggerElement, // inicia quando o primeiro ".article" entrar na tela
                         start: 'top 80%', // top do elemento atinge 80% da viewport
                         toggleActions: 'play none none none' // anima só na entrada
                    }
               });
          });

          return () => ctx.revert(); // limpa
     }, []);
}
