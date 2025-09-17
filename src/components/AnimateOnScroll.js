import React, { useEffect, useRef, useState } from "react";
import "./css/AnimateOnScroll.css";

const AnimateOnScroll = ({ 
  tag = "div", 
  children, 
  className = "", 
  duration = 0.8 // default in seconds
}) => {
  const Tag = tag;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); 
          }
        });
      },
      { threshold: 0.3 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "show" : ""} ${className}`}
      style={{
        transitionDuration: `${duration}s`, // 👈 dynamic speed
      }}
    >
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
