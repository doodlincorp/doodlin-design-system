import { useCallback, useEffect, useState } from "react";

export function useOutsideClick(
  callback: (event: MouseEvent) => any,
  ref: React.RefObject<any>,
  anotherRef?: React.RefObject<any>
) {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        anotherRef &&
        anotherRef.current &&
        anotherRef.current.contains(e.target)
      ) {
        return;
      }
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    },
    [callback, ref, anotherRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);
}

export function useToggle<T, U>(
  ref: React.RefObject<T>,
  anotherRef?: React.RefObject<U>
): [boolean, (b?: boolean) => void] {
  const [state, setState] = useState<boolean>(false);

  useOutsideClick(() => setState(false), ref, anotherRef);

  return [
    state,
    (bool?: boolean) => {
      if (bool) setState(bool);
      else setState(!state);
    },
  ];
}
