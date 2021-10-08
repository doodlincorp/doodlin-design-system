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
        if (portalNode.current) {
          document.body.removeChild(portalNode.current);
        }
      }
    };
  }, [usingPortal]);
  return portalNode.current!;
};

export { usePortalNode };
