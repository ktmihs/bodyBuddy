import { useState, useEffect } from 'react';

interface IntersectionObserverOption {
  root?: null | HTMLElement;
  rootMargin?: string;
  threshold?: number;
}

interface IntersectionObserverProps {
  callback: () => void;
  options?: IntersectionObserverOption;
}

const defaultOption = {
  root: null,
  rootMargin: '100px',
  threshold: 0,
};

export const useIntersectionObserver = ({
  callback,
  options = defaultOption,
}: IntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const onIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    callback();
  };

  useEffect(() => {
    if (!target) return;
    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, options);
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [callback, options, target]);

  return { setTarget };
};
