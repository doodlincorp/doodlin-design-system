import parse from "parse-color";
import { darken, lighten } from "polished";

export enum EColorMap {
  // Primary Blue
  blue_0 = "#F3F9FF",
  blue_1 = "#E6F2FF",
  blue_2 = "#C5E1FF",
  blue_3 = "#92C7FF",
  blue_4 = "#5FACFF",
  blue_5 = "#1184FF",
  blue_6 = "#0C6CD3",
  blue_7 = "#004C9E",
  blue_8 = "#003267",

  // Gray
  white = "#fff",
  gray_0 = "#F9F9FB",
  gray_1 = "#EFEFF2",
  gray_2 = "#EBEBEE",
  gray_3 = "#E0E0E5",
  gray_4 = "#CACACC",
  gray_5 = "#B1B1B3",
  gray_6 = "#767679",
  gray_7 = "#444348",
  gray_8 = "#15141A",
  blue_gray = "#8F8F9C",

  // System Color
  active_green = "#69DB7C",
  inactive_red = "#FF8787",
  warning_red_1 = "#FFF0EE",
  warning_red_2 = "#F8D0D1",

  // Green
  green = "#34C759",
  thumbs_green = "#40C057",
  text_green = "#00A21D",

  // Red
  red_5 = "#FF6B6B",
  red_6 = "#FA5252",
  red_7 = "#F03E3E",
  red_8 = "#E03131",
  red_9 = "#C92A2A",
  red_10 = "#A51111",

  // Orange
  orange_1 = "#FFECE2",
  warning_orange = "#FAB005",
  interview_orange_7 = "#F38119",

  // Refferal Color
  referral_blue_1 = "#E8EFF7",
  referral_blue_7 = "#1864AB",

  // Transparent
  transparent = "transparent",
}

const isSameColor = (color1: string, color2: string) => {
  const v1 = parse(color1);
  const v2 = parse(color2);
  return v1.hex === v2.hex;
};

export const button_color = (bgc = EColorMap.gray_7, fc = "white") => {
  const isSameWithBgcAndGray1 = isSameColor(bgc, EColorMap.gray_1);
  const isSameWithBgcAndGray4 = isSameColor(bgc, EColorMap.gray_4);
  const isSameWithBgcAndGray7 = isSameColor(bgc, EColorMap.gray_7);
  const isSameWithBgcAndBlue5 = isSameColor(bgc, EColorMap.blue_5);
  const isSameWithBgcAndRed7 = isSameColor(bgc, EColorMap.red_7);
  return `
      background-color: ${bgc};
      color: ${fc};
      &:hover {
        ${
          isSameWithBgcAndGray1
            ? `color: ${EColorMap.gray_8};`
            : isSameWithBgcAndGray7
            ? `background: ${EColorMap.gray_8};`
            : isSameWithBgcAndBlue5
            ? `background: ${EColorMap.blue_6};`
            : isSameWithBgcAndRed7
            ? `background: ${EColorMap.red_8};`
            : `background: ${darken(0.1, bgc)};`
        }
      }
      &:active {
        ${
          isSameWithBgcAndGray4
            ? `background: ${EColorMap.gray_4};`
            : isSameWithBgcAndGray7
            ? `background: ${EColorMap.gray_7};`
            : isSameWithBgcAndBlue5
            ? `background: ${EColorMap.blue_7};`
            : isSameWithBgcAndRed7
            ? `background: ${EColorMap.red_9};`
            : `background: ${lighten(0.05, bgc)};`
        }
      }
      &.ghost {
        background: transparent;
        border-width: 1px;
        border-style: solid;
        color: ${bgc};
        ${
          isSameWithBgcAndGray1
            ? `
              border-color: ${EColorMap.gray_4};
              color: ${EColorMap.gray_8};
            `
            : isSameWithBgcAndGray7
            ? `
              color: ${EColorMap.gray_8};
            `
            : ``
        }
        &:hover {
          ${
            isSameWithBgcAndGray1
              ? `
                background-color: ${EColorMap.gray_1};
              `
              : `
                background: ${bgc};
                color: ${fc};
                border-color: ${bgc};
              `
          }
        }
        &:active {
          ${
            isSameWithBgcAndGray1
              ? `
                background: ${EColorMap.gray_3};
              `
              : isSameWithBgcAndBlue5
              ? `
                background: ${EColorMap.blue_6};
                border-color: ${EColorMap.blue_6};
              `
              : isSameWithBgcAndRed7
              ? `
                background: ${EColorMap.red_9};
                border-color: ${EColorMap.red_9};
              `
              : `
                background: ${darken(0.15, bgc)};
                border-color: ${darken(0.15, bgc)};
              `
          }
        }
      }
      &.quiet {
        background: transparent;
        ${
          isSameWithBgcAndGray1
            ? `
              color: ${EColorMap.gray_8};
            `
            : isSameWithBgcAndGray7
            ? `
              color: ${EColorMap.gray_8};
            `
            : `
              color: ${bgc};
            `
        }
        &:hover {
          ${
            isSameWithBgcAndGray1
              ? `
                background: ${EColorMap.gray_1};
              `
              : `
                background: ${bgc};
                color: #fff;
              `
          }
        }
        &:active {
          ${
            isSameWithBgcAndBlue5
              ? `
                background: ${EColorMap.blue_6};
              `
              : isSameWithBgcAndRed7
              ? `
                background: ${EColorMap.red_9};
              `
              : isSameWithBgcAndGray7
              ? `background: ${EColorMap.gray_8}`
              : `
                background-color: ${EColorMap.gray_3};
              `
          }
        }
      }
      &.textonly {
        background: transparent;
        ${
          isSameWithBgcAndGray1
            ? `
              color: ${EColorMap.gray_8};
            `
            : isSameWithBgcAndGray7
            ? `
              color: ${EColorMap.gray_8};
            `
            : `
              color: ${bgc};
            `
        }
        &:hover {
          text-decoration: underline;
        }
      }
    `;
};

export enum EShadowMap {
  one = `0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.24)`,
  two = `0px 0px 2px rgba(0, 0, 0, 0.12), 0px 0px 16px rgba(0, 0, 0, 0.12)`,
  three = `0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.06)`,
  four = `0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 12px rgba(0, 0, 0, 0.15)`,
  five = `0px 4px 12px rgba(0, 0, 0, 0.16), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.08)`,
  six = `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 3px 12px rgba(0, 0, 0, 0.36)`,
  seven = `0px 1px 2px rgba(0, 0, 0, 0.2), 0px 8px 20px rgba(0, 0, 0, 0.24)`,
  inner = `inset 0px 2px 3px rgba(0, 0, 0, 0.12)`,
}
