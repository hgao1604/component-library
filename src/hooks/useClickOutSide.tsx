import { RefObject, useEffect } from "react";

type OutsideClickHandler = (event: MouseEvent) => void;
function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: OutsideClickHandler
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
