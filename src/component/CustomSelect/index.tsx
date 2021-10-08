import { useToggle } from "dhj-hooks";
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import "./index.scss";
import { ArrowIcon } from "../Icon/ArrowIcon";
import { EColorMap } from "../../utils/colorMap";
import { createPortal } from "react-dom";
import { usePortalNode } from "../../hooks/usePortalNode";
import { debounce } from "../../utils/debounce";
import { getOffset } from "../../utils/offset";

export interface ICustomSelectProps<T> {
  value: T;
  options: T[];
  className?: string;
  getCurrentViewFunc: (v: T) => JSX.Element;
  getOptionViewFunc: (v: T) => JSX.Element;
  usingPortalNode?: boolean;
}

export function isObjectEqual<T>(first: T, second: T, cnt?: number): boolean {
  if (cnt && cnt > 2) return true;
  if (typeof first !== typeof second) return false;
  if (typeof first === "object") {
    for (const key in first) {
      if (!isObjectEqual(first[key], second[key], (cnt || 0) + 1)) return false;
    }
  } else if (typeof first !== "function") {
    if (first !== second) return false;
  }
  return true;
}

const CustomSelect: <T>(
  p: ICustomSelectProps<T>
) => React.ReactElement<ICustomSelectProps<T>> = ({
  value,
  options,
  className,
  getOptionViewFunc,
  getCurrentViewFunc,
  usingPortalNode,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [optionOpen, setOptionOpen] = useToggle(ref);
  const [offset, setOffset] = useState({ top: 0, left: 0 });
  const [visibility, setVisibility] = useState<"visible" | "hidden">("hidden");
  const portalNode = usePortalNode(usingPortalNode);
  const optionsViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibility("hidden");
    const update = () => {
      if (optionOpen) {
        const offset_ = getOffset(ref.current as HTMLElement);
        setOffset(offset_);
        setVisibility("visible");
      }
    };
    const handler = debounce(() => {
      update();
    }, 100);
    let observer: MutationObserver;
    if (optionOpen) {
      update();
      document.addEventListener("scroll", handler, true);
      // dropdown Item의 width, nested scroll등이 바뀌는 경우 대응
      observer = new MutationObserver(handler);
      if (ref.current) {
        observer.observe(ref.current, { attributes: true });
      }
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
      document.removeEventListener("scroll", handler, true);
    };
  }, [optionOpen]);

  const optionsView = options.map((o, i) => (
    <div
      className={cn("option", {
        selected: isObjectEqual(o, value),
      })}
      onClick={(e) => {
        setOptionOpen(false);
        e.stopPropagation();
      }}
      key={i}
    >
      {getOptionViewFunc(o)}
    </div>
  ));

  return (
    <div className={cn("_CUSTOM_SELECT_", className)} ref={ref}>
      <div
        className={cn("current", { selected: optionOpen })}
        onClick={(e) => {
          setOptionOpen();
          e.stopPropagation();
        }}
      >
        {getCurrentViewFunc(value)}
        <ArrowIcon
          className="chevron-icon"
          color={EColorMap.gray_6}
          size={16}
          rotate={270}
          variant="chevron"
        />
      </div>
      {optionOpen &&
        (usingPortalNode ? (
          createPortal(
            <div
              className="isolated-customselect-options"
              ref={optionsViewRef}
              style={{
                width: ref.current?.offsetWidth || 0,
                top: offset.top,
                left: offset.left,
                visibility,
              }}
            >
              {optionsView}
            </div>,
            portalNode
          )
        ) : (
          <div className="options">{optionsView}</div>
        ))}
    </div>
  );
};

export default CustomSelect;
