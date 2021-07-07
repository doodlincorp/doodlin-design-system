import chroma from "chroma-js";

export const getIndices = (length: number) =>
  Array.from({ length }, (k, v) => v * (1 / length));

export const getColors = (scale: chroma.Scale<chroma.Color>, length: number) =>
  getIndices(length)
    .map(scale)
    .map((x) => x.alpha(0.5).hex("rgb"));

export const getAvatarColorById = (id: number, colorLength?: number) => {
  const ramdomColorLength = colorLength || avatarDefaultColors.length;
  let defaultColors = avatarDefaultColors;
  if (ramdomColorLength > avatarDefaultColors.length) {
    defaultColors = avatarDefaultColors.concat(
      getColors(
        chroma.scale("dark2"),
        ramdomColorLength - avatarDefaultColors.length,
      ),
    );
  }
  return defaultColors[id % ramdomColorLength];
};

export const avatarDefaultColors: string[] = [
  "#F37215",
  "#EC5B3C",
  "#E84C4C",
  "#DD537D",
  "#C64FAB",
  "#AC4FC6",
  "#A057CD",
  "#7D5DDA",
  "#575CCD",
  "#3A9ED7",
  "#3CA6BD",
  "#46A796",
  "#46A76D",
  "#4AA85E",
  "#72AC43",
  "#8DA744",
  "#E56101",
  "#D04A2D",
  "#D03F3F",
  "#BC345D",
  "#AE3594",
  "#9236AC",
  "#803EA8",
  "#6249A9",
  "#4348CA",
  "#318CBE",
  "#358EA2",
  "#329180",
  "#358856",
  "#378D4A",
  "#5F8C3B",
  "#778E35",
  "#CB5500",
  "#BB3E23",
  "#AF2828",
  "#961D41",
  "#8B1C73",
  "#72158C",
  "#622A9A",
  "#4D2CAB",
  "#3A3FBD",
  "#2A76A2",
  "#2F7C8C",
  "#2E7B6D",
  "#297949",
  "#2C7734",
  "#4A742A",
  "#5F7327",
];
