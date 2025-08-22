import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollPopUpProps {
  children: ReactNode;
}

export default function ScrollPopUp({ children }: ScrollPopUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return
    }
    

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        if(!entry.isIntersecting){
          setIsVisible(false)
        }
      } ,
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  },[]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}
