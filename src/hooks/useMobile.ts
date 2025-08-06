import { useEffect, useState } from 'react';

export default function useMobile(): boolean {
     const [currentWidth, setCurrentWidth] = useState<number>(
          window.innerWidth
     );

     useEffect(() => {
          setCurrentWidth(window.innerWidth);
     }, [window.innerWidth]);

     return currentWidth < 1024;
}
