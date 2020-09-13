// export const cursors = {};
// ["pointer", "grab", "grabbing"].forEach((c) => (cursors[c] = c)); // Probably shorter to hard code
declare let canvas: HTMLCanvasElement;

export const setCursor = (c = "") => {
  canvas.className = c;
};
