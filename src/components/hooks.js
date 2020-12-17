import { useEffect } from 'react';

/**
 * @param {{ current: { contains: (arg0: any) => any; }; }} ref
 * @param {(arg0: { target: any; }) => void} handler
 */
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const list = document.getElementById('nav-window');
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        list.contains(event.target)
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export { useOnClickOutside };
