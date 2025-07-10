import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function useSlide(element: string, initialPosition: number) {
     useGSAP(() => {
          gsap.from(element, {
               x: initialPosition,
               duration: 1.5,
               opacity: 0
          });
     });
}
