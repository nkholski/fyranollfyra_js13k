import { createPatternCanvas } from "./patterns";
declare let canvas: HTMLCanvasElement;
declare let bgCanvas: HTMLCanvasElement;
declare let lvlCanvas: HTMLCanvasElement;

// @ts-ignore
export const fieldSettings: {
  canvasHeight: number;
  canvasWidth: number;
  gridSize: number;
  containerSpacing: number;
  playFieldMargin: { x: number; y: number };
  dirty: boolean;
} = { dirty: true };

export const gridCount = { x: 15, y: 8 };
// export let canvasHeight;
// export let canvasWidth; //12 + 15 * gridSize + 2 * distanceBetween404 + 10;

// [canvasWidth, canvasHeight] =
//   window.innerWidth < window.innerHeight
//     ? [window.innerHeight, window.innerWidth]
//     : [window.innerWidth, window.innerHeight];

// let gs = canvasHeight / 9.7;
// let xmargin = gs * 17 > canvasWidth;
// export let gridSize = xmargin ? canvasWidth / 17 : gs;
// export let distanceBetween404 = gridSize / 5;
export const palette = [
  "#f57c1f",
  "#fecd04",
  "#dd1a22",
  "#b61c7e",
  "#4b2f93",
  "#006cb7",
  "#009247",
  "#6a2e14",
  "#00bed4",
  "#678297",
];

export const paletteFontColor = [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0];

// const margin = !xmargin ? (canvasHeight - gridSize * 10) / 2 : gridSize / 10;

export const recalcConstants = () => {
  const [canvasWidth, canvasHeight] =
    window.innerWidth < window.innerHeight
      ? [window.innerHeight, window.innerWidth]
      : [window.innerWidth, window.innerHeight];
  const gs = canvasHeight / 9.7;
  const xmargin = gs * 17 > canvasWidth;
  const gridSize = xmargin ? canvasWidth / 17 : gs;
  fieldSettings.canvasWidth = canvasWidth;
  fieldSettings.canvasHeight = canvasHeight;
  fieldSettings.gridSize = gridSize;
  fieldSettings.containerSpacing = gridSize / 5;
  fieldSettings.playFieldMargin = {
    x: gridSize / 10,
    y: (canvasHeight - gridSize * 9.5) / 2,
  };
  fieldSettings.dirty = true;
  lvlCanvas.width = bgCanvas.width = canvas.width = fieldSettings.canvasWidth;
  lvlCanvas.height = bgCanvas.height = canvas.height =
    fieldSettings.canvasHeight;
  createPatternCanvas();
};

// Completion-messages

// Index of first unlocked
// export const progress = [];
// Number of levels in each section
