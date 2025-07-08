import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible] as const;
};

// Component wrapper for scroll animations
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-up';
  delay?: number;
  className?: string;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        animationName: isVisible ? animation : '',
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};