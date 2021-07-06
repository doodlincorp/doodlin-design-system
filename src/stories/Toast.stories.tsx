import React, { useEffect, useState } from "react";
import ToastView, { IToastViewProps } from "../component/ToastView";
import "../reset.scss";

export default {
  title: "Component/ToastView",
  component: ToastView,
};

const Toast: React.FC<IToastViewProps> = ({ message, closeFunc }) => {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const to = setTimeout(() => {
      closeFunc();
    }, 4000);

    const hidingTo = setTimeout(() => {
      setHiding(true);
    }, 3700);

    return () => {
      clearTimeout(to);
      clearTimeout(hidingTo);
    };
  }, []);

  return <ToastView message={message} hiding={hiding} closeFunc={closeFunc} />;
};

let id = 1;

const getId = () => {
  return id++;
};

export const Default = () => {
  const [toastList, setToastList] = useState([]);

  return (
    <div style={{ paddingLeft: 120, paddingTop: 20 }}>
      <button
        onClick={() => {
          setToastList([
            {
              id: getId(),
              message: "안녕하세요",
            },
            ...toastList,
          ]);
        }}
      >
        토스트
      </button>
      <div className="toast-container">
        {toastList.map((t) => {
          return (
            <Toast
              key={t.id}
              message={t.message}
              closeFunc={() => {
                const index = toastList.findIndex((tl) => tl.id === t.id);
                setToastList([...[...toastList].splice(index, 1)]);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
