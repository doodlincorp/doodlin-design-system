import { useEffect, useRef } from "react";

const usePortalNode = (usingPortal?: boolean) => {
  const portalNode = useRef<HTMLElement>();
  useEffect(() => {
    let div: HTMLDivElement;
    if (usingPortal) {
      if (!portalNode.current) {
        div = document.createElement("div");
        document.body.appendChild(div);
        portalNode.current = div;
      }
    }
    return () => {
      if (usingPortal) {
        if (div) {
          document.body.removeChild(div);
        }
      }
    };
  }, [usingPortal]);
  return portalNode;
};

export { usePortalNode };
