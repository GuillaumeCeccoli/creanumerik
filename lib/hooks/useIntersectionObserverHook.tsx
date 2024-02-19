import { useEffect, useRef } from "react";

export const useIntersectionObserver = (
  animationClass: string,
  options = { root: null, rootMargin: "0px", threshold: 0.4 }
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hide");
        entry.target.classList.add(animationClass);
      }
    }, options);
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass, options]);

  return ref;
};
