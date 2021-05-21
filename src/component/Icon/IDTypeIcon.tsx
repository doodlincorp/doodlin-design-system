import React from "react";
import { colorMap, IColorMap } from "./colorMap";

export interface IIDTypeIconProps {
  color?: keyof IColorMap;
  className?: string;
  variant?:
    | "general"
    | "manager"
    | "owner"
    | "setMember"
    | "evaluable"
    | "rejected";
}

export const IDTypeIcon: React.FC<IIDTypeIconProps> = ({
  color,
  className,
  variant = "general",
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {variant === "general" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M8.00043 7.33339C9.53456 7.33339 10.7782 6.08973 10.7782 4.55561C10.7782 3.02149 9.53456 1.77783 8.00043 1.77783C6.46631 1.77783 5.22266 3.02149 5.22266 4.55561C5.22266 6.08973 6.46631 7.33339 8.00043 7.33339Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
          <path
            id="icon__fill"
            d="M12.9861 12.824C12.7245 11.192 11.7277 8.44434 7.99975 8.44434C4.27181 8.44434 3.27712 11.192 3.01344 12.824C2.91483 13.4397 3.37144 13.9999 3.96954 13.9999H8.0019H12.0342C12.6281 13.9999 13.0868 13.4397 12.9861 12.824Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
        </svg>
      )}{" "}
      {variant === "manager" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
          <path
            id="icon__fill"
            d="M8.98746 12.9417C8.75208 11.4729 7.85493 9 4.49978 9C1.14463 9 0.249407 11.4729 0.0120966 12.9417C-0.0766538 13.4958 0.334299 14 0.872589 14H4.50171H8.13082C8.66526 14 9.07814 13.4958 8.98746 12.9417Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
          <path
            id="icon__fill"
            d="M15.5903 8.24225L16 8.00775L15.1171 6.49225L14.7074 6.72499C14.5731 6.80179 14.4209 6.84223 14.2659 6.84223C14.1109 6.84223 13.9587 6.8018 13.8244 6.72501C13.6902 6.64821 13.5787 6.53776 13.5012 6.40475C13.4238 6.27173 13.3829 6.12084 13.3829 5.96725V5.5H11.6171V5.969C11.6171 6.12259 11.5762 6.27348 11.4988 6.4065C11.4213 6.53951 11.3098 6.64996 11.1756 6.72676C11.0413 6.80355 10.8891 6.84398 10.7341 6.84398C10.5791 6.84398 10.4269 6.80354 10.2926 6.72674L9.88295 6.49225L9 8.00775L9.40969 8.24225C9.5439 8.31905 9.65536 8.4295 9.73285 8.56251C9.81033 8.69553 9.85112 8.84641 9.85112 9C9.85112 9.15359 9.81033 9.30447 9.73285 9.43749C9.65536 9.5705 9.5439 9.68095 9.40969 9.75775L9 9.99225L9.88295 11.5077L10.2926 11.275C10.4269 11.1982 10.5791 11.1578 10.7341 11.1578C10.8891 11.1578 11.0413 11.1982 11.1756 11.275C11.3098 11.3518 11.4213 11.4622 11.4988 11.5953C11.5762 11.7283 11.6171 11.8792 11.6171 12.0328V12.5H13.3829V12.031C13.3829 11.8774 13.4238 11.7265 13.5012 11.5935C13.5787 11.4605 13.6902 11.35 13.8244 11.2732C13.9587 11.1964 14.1109 11.156 14.2659 11.156C14.4209 11.156 14.5731 11.1965 14.7074 11.2733L15.1171 11.5077L16 9.99225L15.5903 9.75775C15.4561 9.68095 15.3446 9.5705 15.2672 9.43749C15.1897 9.30447 15.1489 9.15359 15.1489 9C15.1489 8.84641 15.1897 8.69553 15.2672 8.56251C15.3446 8.4295 15.4561 8.31905 15.5903 8.24225ZM12.5 10.3125C12.2381 10.3125 11.982 10.2355 11.7642 10.0913C11.5464 9.94709 11.3766 9.7421 11.2764 9.50227C11.1762 9.26244 11.1499 8.99855 11.201 8.74395C11.2521 8.48935 11.3783 8.25548 11.5635 8.07193C11.7487 7.88837 11.9847 7.76336 12.2416 7.71272C12.4985 7.66208 12.7648 7.68807 13.0068 7.78741C13.2488 7.88675 13.4557 8.05497 13.6012 8.27081C13.7467 8.48665 13.8244 8.74041 13.8244 9C13.8244 9.3481 13.6849 9.68193 13.4365 9.92807C13.1881 10.1742 12.8513 10.3125 12.5 10.3125Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
        </svg>
      )}
      {variant === "owner" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M11.459 3.27665V8.43783C10.5847 8.96158 10 9.91362 10 11.0048C10 12.6606 11.3443 14 13 14C14.6585 14 16 12.6579 16 11.0048C16 9.93271 15.4344 8.99432 14.5874 8.46511V7.50762C14.5874 7.35485 14.5055 7.213 14.3716 7.13662L13.7213 6.76017C13.3716 6.55831 13.3716 6.05365 13.7213 5.85178L14.3333 5.49716C14.4891 5.40714 14.5874 5.24074 14.5874 5.05797C14.5874 4.87793 14.4918 4.71153 14.3333 4.61878L13.7213 4.26415C13.3716 4.06229 13.3716 3.55763 13.7213 3.35576L14.3634 2.98477C14.4617 2.92748 14.4973 2.802 14.4454 2.70107C14.2377 2.28643 13.8115 2 13.3142 2H12.7268C12.0273 2.00546 11.459 2.57559 11.459 3.27665ZM14.2322 11.9868C14.2322 12.6661 13.6803 13.2171 13 13.2171C12.3197 13.2171 11.7678 12.6661 11.7678 11.9868C11.7678 11.3076 12.3197 10.7565 13 10.7565C13.6803 10.7565 14.2322 11.3076 14.2322 11.9868Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
          <path
            id="icon__fill"
            d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
          <path
            id="icon__fill"
            d="M8.98746 12.9417C8.75208 11.4729 7.85493 9 4.49978 9C1.14463 9 0.249407 11.4729 0.0120966 12.9417C-0.0766538 13.4958 0.334299 14 0.872589 14H4.50171H8.13082C8.66526 14 9.07814 13.4958 8.98746 12.9417Z"
            fill={color ? colorMap[color] : colorMap.gray_6}
          />
        </svg>
      )}
      {variant === "setMember" && (
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M9.38214 11.7159C10.8412 11.7159 12.024 10.5331 12.024 9.07404C12.024 7.61495 10.8412 6.43213 9.38214 6.43213C7.92306 6.43213 6.74023 7.61495 6.74023 9.07404C6.74023 10.5331 7.92306 11.7159 9.38214 11.7159Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            id="icon__fill"
            d="M3.91883 11.716C5.12635 11.716 6.10523 10.7371 6.10523 9.52955C6.10523 8.32203 5.12635 7.34314 3.91883 7.34314C2.71131 7.34314 1.73242 8.32203 1.73242 9.52955C1.73242 10.7371 2.71131 11.716 3.91883 11.716Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            id="icon__fill"
            d="M13.6554 16.0743C13.4313 14.7898 12.584 12.6271 9.41738 12.6271C6.25073 12.6271 5.4035 14.7898 5.17939 16.0743C5.09558 16.559 5.48367 16.9999 5.99019 16.9999H9.41738H12.8446C13.3511 16.9999 13.7392 16.559 13.6554 16.0743Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            id="icon__fill"
            d="M4.2822 15.9067C4.2822 14.1557 5.55578 13.099 5.87646 12.8621C5.41731 12.7145 4.87982 12.6271 4.24941 12.6271C1.08276 12.6271 0.235531 14.7898 0.0114249 16.0743C-0.0723873 16.559 0.3157 16.9999 0.822218 16.9999H4.24941H4.47351C4.35873 16.7047 4.2822 16.3476 4.2822 15.9067Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
          <path
            id="icon__fill"
            d="M20.5356 7.28335L20.9975 7.01849L20.0037 5.31213L19.5418 5.57698C18.8785 5.9569 18.051 5.48146 18.051 4.7238V4.19409H16.0634V4.72163C16.0634 5.47929 15.2359 5.95473 14.5727 5.57481L14.113 5.31213L13.1191 7.01849L13.581 7.28335C14.2443 7.66326 14.2443 8.60979 13.581 8.98971L13.1191 9.25239L14.113 10.9588L14.5748 10.6939C15.2381 10.314 16.0656 10.7894 16.0656 11.5471V12.0746H18.0532V11.5471C18.0532 10.7894 18.8807 10.314 19.544 10.6939L20.0058 10.9588L20.9997 9.25239L20.5378 8.98754C19.8745 8.60979 19.8745 7.66109 20.5356 7.28335ZM18.2196 8.13653C18.2196 8.77262 17.6986 9.2893 17.0572 9.2893C16.4158 9.2893 15.8948 8.77262 15.8948 8.13653C15.8948 7.50044 16.4158 6.98376 17.0572 6.98376C17.6986 6.98376 18.2196 7.50044 18.2196 8.13653Z"
            fill={color ? colorMap[color] : colorMap.gray_8}
          />
        </svg>
      )}
      {variant === "evaluable" && (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M6.99946 7.55556C8.53358 7.55556 9.77724 6.3119 9.77724 4.77778C9.77724 3.24365 8.53358 2 6.99946 2C5.46533 2 4.22168 3.24365 4.22168 4.77778C4.22168 6.3119 5.46533 7.55556 6.99946 7.55556Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
          <path
            id="icon__fill"
            d="M11.9861 12.9353C11.7245 11.3033 10.7277 8.55566 6.99975 8.55566C3.27181 8.55566 2.27712 11.3033 2.01344 12.9353C1.91483 13.551 2.37144 14.1112 2.96954 14.1112H7.0019H11.0342C11.6281 14.1112 12.0868 13.551 11.9861 12.9353Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
          <path
            opacity="0.4"
            id="icon__fill"
            d="M20.1043 10.264L18.5043 6.104L17.6323 6.616L17.4083 8.864H14.6083L14.1123 9.576V10.632L14.6803 11.224L14.6403 12.624L14.8883 12.968V13.512H20.1043V10.264Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
          <path
            id="icon__fill"
            d="M14 9.432V10.152C14 10.416 14.04 10.68 14.104 10.928L14.192 11.24C14.232 11.384 14.248 11.528 14.248 11.672V12.184C14.248 12.432 14.272 12.672 14.328 12.912L14.416 13.304C14.52 13.712 14.888 14 15.304 14H19.576H21.904V9.84H20.048L18.992 6.464C18.904 6.168 18.632 6 18.36 6C18.192 6 18.016 6.064 17.888 6.208L17.376 6.736C17.232 6.888 17.152 7.088 17.152 7.304V8.632H14.8C14.36 8.632 14 8.992 14 9.432ZM14.64 9.432C14.64 9.344 14.712 9.272 14.8 9.272H17.152H17.792V8.632V7.304C17.792 7.256 17.808 7.216 17.84 7.176L18.352 6.648C18.352 6.64 18.36 6.64 18.36 6.64C18.376 6.64 18.384 6.648 18.384 6.656L19.44 10.032L19.576 10.48V13.36H15.376C15.216 13.36 15.072 13.248 15.04 13.088L14.968 12.768C14.92 12.576 14.896 12.384 14.896 12.184V11.672C14.896 11.464 14.864 11.264 14.808 11.064L14.728 10.752C14.672 10.56 14.648 10.352 14.648 10.152V9.432H14.64Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
        </svg>
      )}
      {variant === "rejected" && (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="icon__fill"
            d="M6.99946 7.55556C8.53358 7.55556 9.77724 6.3119 9.77724 4.77778C9.77724 3.24365 8.53358 2 6.99946 2C5.46533 2 4.22168 3.24365 4.22168 4.77778C4.22168 6.3119 5.46533 7.55556 6.99946 7.55556Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
          <path
            id="icon__fill"
            d="M11.9861 12.9353C11.7245 11.3033 10.7277 8.55566 6.99975 8.55566C3.27181 8.55566 2.27712 11.3033 2.01344 12.9353C1.91483 13.551 2.37144 14.1112 2.96954 14.1112H7.0019H11.0342C11.6281 14.1112 12.0868 13.551 11.9861 12.9353Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
          <path
            id="icon__fill"
            d="M18 6C15.79 6 14 7.79 14 10C14 12.21 15.79 14 18 14C20.21 14 22 12.21 22 10C22 7.79 20.21 6 18 6ZM18 7C18.645 7 19.245 7.21 19.735 7.555L15.555 11.735C15.21 11.245 15 10.645 15 10C15 8.345 16.345 7 18 7ZM18 13C17.355 13 16.755 12.79 16.265 12.445L20.445 8.265C20.79 8.755 21 9.355 21 10C21 11.655 19.655 13 18 13Z"
            fill={color ? colorMap[color] : colorMap.gray_7}
          />
        </svg>
      )}
    </div>
  );
};
