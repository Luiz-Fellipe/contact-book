import { useState, useEffect } from 'react';

/**
 * Hook that returns a debounced value of the provided input value.
 * link to see docs: https://usehooks-ts.com/react-hook/use-debounce
 * @param value The input value to be debounced.
 * @param delay The delay in milliseconds before the debounced value is updated.
 * @returns The debounced value.
 * @template T The type of the input value.
 */
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
