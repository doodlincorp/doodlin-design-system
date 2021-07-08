import parse from "parse-color";
import { darken, lighten } from "polished";

/////////////////* Color */////////////////

// Primary Blue
export const blue_0 = `#f3f9ff`;
export const blue_1 = `#E6F2FF`;
export const blue_2 = `#C5E1FF`;
export const blue_3 = `#92C7FF`;
export const blue_4 = `#5FACFF`;
export const blue_5 = `#1184FF`;
export const blue_6 = `#0C6CD3`;
export const blue_7 = `#004C9E`;
export const blue_8 = `#003267`;

// Gray
export const white = `#fff`;
export const gray_0 = `#F9F9FB`;
export const gray_1 = `#EFEFF2`;
export const gray_2 = `#EBEBEE`;
export const gray_3 = `#E0E0E5`;
export const gray_4 = `#CACACC`;
export const gray_5 = `#B1B1B3`;
export const gray_6 = `#767679`;
export const gray_7 = `#444348`;
export const gray_8 = `#15141A`;
export const blue_gray = `#8F8F9C`;

// System Color
export const active_green = `#69DB7C`;
export const inactive_red = `#FF8787`;
export const warning_red_1 = `#FFF0EE`;
export const warning_red_2 = `#F8D0D1`;

// Green
export const green = `#34C759`;
export const thumbs_green = `#40C057`;
export const text_green = `#00A21D`;

// Red
export const red_5 = `#FF6B6B`;
export const red_6 = `#FA5252`;
export const red_7 = `#F03E3E`;
export const red_8 = `#E03131`;
export const red_9 = `#C92A2A`;
export const red_10 = `#A51111`;

// Orange
export const orange_1 = `#FFECE2`;
export const interview_orange_7 = `#F38119`;

// Refferal Color
export const referral_blue_1 = `#E8EFF7`;
export const referral_blue_7 = `#1864AB`;

// Shadow
export const shadow_1 = `0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.24)`;
export const shadow_2 = `0px 0px 2px rgba(0, 0, 0, 0.12), 0px 0px 16px rgba(0, 0, 0, 0.12)`;
export const shadow_3 = `0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.06)`;
export const shadow_4 = `0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 12px rgba(0, 0, 0, 0.15)`;
export const shadow_5 = `0px 4px 12px rgba(0, 0, 0, 0.16), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.08)`;
export const shadow_6 = `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 3px 12px rgba(0, 0, 0, 0.36)`;
export const shadow_7 = `0px 1px 2px rgba(0, 0, 0, 0.2), 0px 8px 20px rgba(0, 0, 0, 0.24)`;
export const shadow_inner = `inset 0px 2px 3px rgba(0, 0, 0, 0.12)`;

// * $bgc: background-color (e.g. #fff)
// * $fc: font-color (e.g. #111)
// * $dis-bgc: disabled background-color
// * $dis-fc: disabled font-color

const isSameColor = (color1: string, color2: string) => {
  const v1 = parse(color1);
  const v2 = parse(color2);
  return v1.hex === v2.hex;
};

export const button_color = (bgc = gray_7, fc = "white") => {
  const isSameWithBgcAndGray1 = isSameColor(bgc, gray_1);
  const isSameWithBgcAndGray4 = isSameColor(bgc, gray_4);
  const isSameWithBgcAndGray7 = isSameColor(bgc, gray_7);
  const isSameWithBgcAndBlue5 = isSameColor(bgc, blue_5);
  const isSameWithBgcAndRed7 = isSameColor(bgc, red_7);
  return `
      background-color: ${bgc};
      color: ${fc};
      &:hover {
        ${
          isSameWithBgcAndGray1
            ? `color: ${gray_8};`
            : isSameWithBgcAndGray7
            ? `background: ${gray_8};`
            : isSameWithBgcAndBlue5
            ? `background: ${blue_6};`
            : isSameWithBgcAndRed7
            ? `background: ${red_8};`
            : `background: ${darken(0.1, bgc)};`
        }
      }
      &:active {
        ${
          isSameWithBgcAndGray4
            ? `background: ${gray_4};`
            : isSameWithBgcAndGray7
            ? `background: ${gray_7};`
            : isSameWithBgcAndBlue5
            ? `background: ${blue_7};`
            : isSameWithBgcAndRed7
            ? `background: ${red_9};`
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
              border-color: ${gray_4};
              color: ${gray_8};
            `
            : isSameWithBgcAndGray7
            ? `
              color: ${gray_8};
            `
            : ``
        }
        &:hover {
          ${
            isSameWithBgcAndGray1
              ? `
                background-color: ${gray_1};
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
                background: ${gray_3};
              `
              : isSameWithBgcAndBlue5
              ? `
                background: ${blue_6};
                border-color: ${blue_6};
              `
              : isSameWithBgcAndRed7
              ? `
                background: ${red_9};
                border-color: ${red_9};
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
              color: ${gray_8};
            `
            : isSameWithBgcAndGray7
            ? `
              color: ${gray_8};
            `
            : `
              color: ${bgc};
            `
        }
        &:hover {
          ${
            isSameWithBgcAndGray1
              ? `
                background: ${gray_1};
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
                background: ${blue_6};
              `
              : isSameWithBgcAndRed7
              ? `
                background: ${red_9};
              `
              : isSameWithBgcAndGray7
              ? `background: ${gray_8}`
              : `
                background-color: ${gray_3};
              `
          }
        }
      }
      &.textonly {
        background: transparent;
        ${
          isSameWithBgcAndGray1
            ? `
              color: ${gray_8};
            `
            : isSameWithBgcAndGray7
            ? `
              color: ${gray_8};
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
