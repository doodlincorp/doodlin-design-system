import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

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

export const OptionsView = <T,>({
  getOptionViewFunc,
  options,
  setOptionOpen,
  value,
  a11yStateSetter,
}: {
  options: T[];
  value: T;
  getOptionViewFunc: (v: T) => JSX.Element;
  setOptionOpen: (b?: boolean | undefined) => void;
  a11yStateSetter?: React.Dispatch<React.SetStateAction<T>>;
}) => {
  const [temporarySelected, setTemporarySelected] = useState(() => {
    if (value) return options.findIndex((o) => isObjectEqual(o, value));
    return -1;
  });
  useEffect(() => {
    // TODO: 키보드 위아래 조작 시 자꾸 이펙트가 실행되어서 좀 비효율적일지도 모른다.
    // keyboard up & down
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setTemporarySelected((s) => (s + 1 === options.length ? s : s + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setTemporarySelected((s) => (s === 0 ? s : s - 1));
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        // dispatch click
        if (a11yStateSetter) {
          a11yStateSetter(options[temporarySelected]);
        }
        setOptionOpen(false);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setOptionOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [temporarySelected, options, a11yStateSetter]);
  return (
    <>
      {options.map((o, i) => (
        <div
          className={classNames("option", {
            selected: isObjectEqual(o, value),
            hover: i === temporarySelected,
          })}
          onClick={(e) => {
            setOptionOpen(false);
            e.stopPropagation();
          }}
          key={i}
        >
          {getOptionViewFunc(o)}
        </div>
      ))}
    </>
  );
};
