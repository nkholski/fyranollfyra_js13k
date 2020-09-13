import { fieldSettings } from "./constants";

declare let ctx: CanvasRenderingContext2D;
let pattern = document.createElement("canvas");
let patternCtx = pattern.getContext("2d");
declare const blink = true;

export const getGoldPattern = () => {
  const [canvasPattern, cx] = getPatternCanvas(128, 128, "gold");
  jitterBox(cx as CanvasRenderingContext2D, 128, 128);
  return ctx.createPattern(canvasPattern as HTMLCanvasElement, "repeat");
};

export const getYellowBlackStripesPattern = () => {
  const pixelSize = 2;
  const X = 16 * pixelSize;
  const Y = 16 * pixelSize;
  const [canvasPattern, cx] = getPatternCanvas(X, Y, "gold");
  (cx as CanvasRenderingContext2D).fillStyle = "#000";
  for (let x = -X; x < X; x++) {
    for (let y = -X; y < Y; y++) {
      if (Math.floor((y - x) / (2 * pixelSize)) % (2 * pixelSize) == 0) {
        (cx as CanvasRenderingContext2D).fillRect(x, y, pixelSize, pixelSize);
      }
    }
  }

  return ctx.createPattern(canvasPattern as HTMLCanvasElement, "repeat");
};

const getPatternCanvas = (x: number, y: number, color: string) => {
  const canvasPattern = document.createElement("canvas");
  //const canvasPattern = document.getElementById("test") as HTMLCanvasElement;
  canvasPattern.width = x;
  canvasPattern.height = y;
  const cx = canvasPattern.getContext("2d");
  cx.fillStyle = color;
  cx.fillRect(0, 0, x, y);
  return [canvasPattern, cx];
};

export const createPatternCanvas = () => {
  pattern.width = fieldSettings.canvasWidth + fieldSettings.gridSize;
  pattern.height = fieldSettings.canvasHeight + fieldSettings.gridSize;
  const patternWidth = fieldSettings.gridSize / 15;
  patternCtx.fillStyle = "#000"; // "hsl(" + 360 * Math.random() + ",100%,50%)"; //"#55E";
  for (let x = 0; x < pattern.width / patternWidth; x++) {
    for (let y = 0; y < pattern.height / patternWidth; y++) {
      patternCtx.globalAlpha = 0.2 * Math.random();
      patternCtx.fillRect(
        x * patternWidth,
        y * patternWidth,
        patternWidth,
        patternWidth
      );
    }
  }
};

export const jitterBox = (cx: CanvasRenderingContext2D, w, h) => {
  cx.drawImage(
    pattern,
    fieldSettings.gridSize * (blink ? Math.random() : 1),
    fieldSettings.gridSize * (blink ? Math.random() : 1),
    w,
    h,
    0,
    0,
    w,
    h
  );
};
