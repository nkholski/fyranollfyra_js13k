import { fieldSettings } from "./constants";

export const canvasOffsetPixel2BoardPixels = (x: number, y: number) => {
  x -= fieldSettings.playFieldMargin.x;
  y -= fieldSettings.playFieldMargin.y;
  return { x, y };
};

export const getContainerIndex = (x: number) =>
  Math.floor(x / fieldSettings.gridSize / 5);

export const getTotalContainerSpacing = (x: number) =>
  fieldSettings.containerSpacing * getContainerIndex(x);

export const canvasOffset2BoardGridCoords = (cx: number, cy: number) => {
  const { x, y } = canvasOffsetPixel2BoardPixels(cx, cy);
  const spaces = Math.floor(x / fieldSettings.gridSize / 5);

  const a = fieldSettings.containerSpacing * spaces;

  let gx = Math.floor((x - a) / fieldSettings.gridSize);
  let gy = Math.floor(y / fieldSettings.gridSize);

  return {
    x,
    y,
    gx: Math.min(Math.max(gx, 0), 14),
    gy: Math.min(Math.max(gy, 0), 7),
  };
};

export const gridCoords2CanvasOffset = (gx: number, gy: number) => {
  return {
    x:
      gx * fieldSettings.gridSize +
      Math.floor(gx / 5) * fieldSettings.containerSpacing,
    y: gy * fieldSettings.gridSize,
  };
};
