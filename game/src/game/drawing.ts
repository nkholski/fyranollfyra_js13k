import { GameStates } from "./../interfaces";
import { addInteractable, resetInteractables } from "./interaction/interaction";
import { Result404, Level, Brick } from "../interfaces";
import { gridCoords2CanvasOffset } from "../coordFunctions";
import {
  jitterBox,
  getGoldPattern,
  getYellowBlackStripesPattern,
} from "../patterns";
import {
  fieldSettings,
  gridCount,
  palette,
  paletteFontColor,
} from "../constants";

declare let bgCanvas: HTMLCanvasElement;
declare let bgCtx: CanvasRenderingContext2D;
declare let ctx: CanvasRenderingContext2D;
declare const numbers: any;
declare let state: GameStates;
// const whiteLetters = new Image();
// whiteLetters.src =
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAFAQMAAADc5Ti2AAAABlBMVEVHcEz///+flKJDAAAAAXRSTlMAQObYZgAAADlJREFUCNdj+NG/r/v9vt+PGBg6G5q6OJi6lBgYOvr3/X7f9Pv9PoaODiYOjaYOoNjP8/u4gWKPGAB27hhclVH3YQAAAABJRU5ErkJggg==";
// const blackLetters = new Image();
// blackLetters.src =
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAFAQMAAADc5Ti2AAAABlBMVEVHcEwAAACfKoRRAAAAAXRSTlMAQObYZgAAADlJREFUCNdj+NG/r/v9vt+PGBg6G5q6OJi6lBgYOvr3/X7f9Pv9PoaODiYOjaYOoNjP8/u4gWKPGAB27hhclVH3YQAAAABJRU5ErkJggg==";

// const letters = [whiteLetters, blackLetters];

const translateDraw = (c: CanvasRenderingContext2D, numberIndex: number) => {
  c.translate(
    numberIndex *
      ((gridCount.x / 3) * fieldSettings.gridSize +
        fieldSettings.containerSpacing),
    0
  );
};

const drawGrid = () => {
  bgCtx.globalAlpha = 0.5;
  bgCtx.strokeStyle = "#000";
  bgCtx.lineWidth = fieldSettings.gridSize / 20;
  for (let y = 0; y < gridCount.y + 1; y++) {
    bgCtx.beginPath();
    bgCtx.moveTo(0, y * fieldSettings.gridSize);
    bgCtx.lineTo(
      (gridCount.x / 3) * fieldSettings.gridSize,
      y * fieldSettings.gridSize
    );
    bgCtx.stroke();
  }
  for (let x = 0; x < gridCount.x / 3 + 1; x++) {
    // ctx.strokeStyle = x % 5 === 0 ? "#FFF" : "#000";
    //  ctx.lineWidth = x % 5 === 0 ? 5 : 1;
    bgCtx.beginPath();

    bgCtx.moveTo(x * fieldSettings.gridSize, 0);
    bgCtx.lineTo(
      x * fieldSettings.gridSize,
      gridCount.y * fieldSettings.gridSize
    );
    bgCtx.stroke();
  }
};

const drawNumberContainers = (level) => {
  for (let i = 0; i < 3; i++) {
    bgCtx.save();
    translateDraw(bgCtx, i);
    genericShadowBox({
      gx: 0,
      gy: 0,
      gw: 5,
      gh: 8,
      c: bgCtx,
      color: level.color,
    });
    genericShadowBox({ gx: 0, gy: 8.2, gw: 5, gh: 1.2, c: bgCtx });

    //if (state === GameStates.game) {
    //const patternWidth = fieldSettings.gridSize / 15;

    jitterBox(bgCtx, fieldSettings.gridSize * 5, fieldSettings.gridSize * 8);
    //}
    drawGrid();

    bgCtx.restore();
  }
};

const drawWalls = (level: Level, regions) => {
  const wallCanvas = document.createElement("canvas");
  wallCanvas.width =
    fieldSettings.gridSize * 15 + fieldSettings.containerSpacing * 2;
  wallCanvas.height = fieldSettings.gridSize * 8;
  const wallCanvasCtx = wallCanvas.getContext("2d");
  //ctxPattern.drawImage(brickPng, 0, 0);

  //const brickPattern = bgCtx.createPattern(canvasPattern, "repeat");

  wallCanvasCtx.fillStyle = wallCanvasCtx.strokeStyle = getYellowBlackStripesPattern();
  // getYellowBlackStripesPattern();
  wallCanvasCtx.lineWidth = fieldSettings.gridSize / 9;
  level.walls.forEach((wall, i) => {
    // console.log("v", i);
    // const empty = !level.boxes.find(
    //   (b) =>
    //     b.gx >= wall.x &&
    //     b.gx <= wall.x + wall.w &&
    //     b.gy >= wall.y &&
    //     b.gy <= wall.y + wall.h
    // );

    const topLeft = gridCoords2CanvasOffset(wall.x, wall.y);
    const bottomRight = gridCoords2CanvasOffset(
      wall.x + wall.w,
      wall.y + wall.h
    );

    wallCanvasCtx.strokeRect(
      topLeft.x,
      topLeft.y,
      bottomRight.x - topLeft.x,
      bottomRight.y - topLeft.y
    );

    const populatedRegions = level.bricks.map((number) => number.region);

    for (let gx = 0; gx < 15; gx++) {
      for (let gy = 0; gy < 15; gy++) {
        if (populatedRegions.indexOf(regions[gx][gy]) < 0) {
          const topLeft = gridCoords2CanvasOffset(gx, gy);

          wallCanvasCtx.fillRect(
            topLeft.x,
            topLeft.y,
            fieldSettings.gridSize,
            fieldSettings.gridSize
          );
        }
      }
    }
  });
  bgCtx.drawImage(wallCanvas, 0, 0);
};

export const drawNumbers = (numbers: Brick[]) => {
  const context = state === GameStates.game ? ctx : bgCtx;

  context.textAlign = "center";
  context.textBaseline = "middle";
  // Loop not dragged first, then dragged => dragged always on top
  [false, true].forEach((dragged) => {
    numbers.forEach((n) => {
      if (dragged != n.x > -1) {
        return;
      }

      const X = n.x > -1 ? n.x : n.gx * fieldSettings.gridSize;
      const Y = n.y > -1 ? n.y : n.gy * fieldSettings.gridSize;

      const boxIndex = Math.floor(X / (5 * fieldSettings.gridSize));

      const padding = fieldSettings.gridSize * 0.1;
      context.save();
      translateDraw(context, boxIndex);
      context.translate(X - 5 * boxIndex * fieldSettings.gridSize, Y);

      context.font = fieldSettings.gridSize * 0.8 + "px Arial";

      if (dragged) {
        context.globalAlpha = 0.4;
        context.fillRect(
          padding,
          padding,
          fieldSettings.gridSize,
          fieldSettings.gridSize
        );
        context.globalAlpha = 1;
      }
      const NaN = isNaN(parseInt(n.content, 10));
      const color = n.dragabble
        ? !NaN
          ? palette[n.content]
          : "#dd1a22"
        : "#aaa";

      genericShadowBox({
        gx: dragged ? 0 : 0.1,
        gy: dragged ? 0 : 0.1,
        gw: 1 - (dragged ? 0 : 0.2),
        gh: 1 - (dragged ? 0 : 0.2),
        color,
        shadow: dragged ? 0.5 : 0,
        c: context,
      });

      // context.fillRect(
      //   dragged ? 0 : padding,
      //   dragged ? 0 : padding,
      //   fieldSettings.gridSize - (dragged ? 0 : padding * 2),
      //   fieldSettings.gridSize - (dragged ? 0 : padding * 2)
      // );
      context.fillStyle = NaN
        ? "#000"
        : ["#000", "#FFF"][paletteFontColor[n.content]];

      if (!n.dragabble) {
        for (let x = 0; x < 2; x++) {
          for (let y = 0; y < 2; y++) {
            context.fillRect(
              padding +
                x * (fieldSettings.gridSize - 2 * padding - (8 + 3)) +
                4,
              padding +
                y * (fieldSettings.gridSize - 2 * padding - (8 + 3)) +
                4,
              3,
              3
            );
          }
        }
      }

      context.fillText(
        n.content,
        fieldSettings.gridSize / 2,
        fieldSettings.gridSize / 2 + padding / 2
      );
      context.restore();
    });
  });
};

export const getButtonBounds = (i: number) => {
  const x = 15 * fieldSettings.gridSize + 3 * fieldSettings.containerSpacing;
  return [
    x,
    i * (fieldSettings.gridSize * 4 + fieldSettings.containerSpacing / 2),
    fieldSettings.canvasWidth - x - fieldSettings.playFieldMargin.x * 3,
    4 * fieldSettings.gridSize - fieldSettings.containerSpacing / 2,
  ];
};

const drawButtons = (tutorial) => {
  ["Home", "Hint"].forEach((word, i) => {
    if (tutorial && i == 1) {
      return;
    }

    const [x, y, w, h] = getButtonBounds(i);

    genericShadowBox({
      gx: x / fieldSettings.gridSize,
      gy: y / fieldSettings.gridSize,
      gh: h / fieldSettings.gridSize,
      gw: w / fieldSettings.gridSize,
      c: bgCtx,
      color: ["#E06951", "#B6E066"][i],
    });
    bgCtx.save();
    bgCtx.fillStyle = "#DDD";
    bgCtx.textAlign = "center";

    bgCtx.strokeStyle = "#000";

    if (w < fieldSettings.gridSize * 2) {
      bgCtx.translate(x + w / 1.2, y + h / 2);
      bgCtx.rotate(-(90 * Math.PI) / 180);
    } else {
      bgCtx.translate(x + w / 2, y + h / 2);
    }
    bgCtx.font = fieldSettings.gridSize + "px Arial";

    bgCtx.fillText(word, 0, 0);

    bgCtx.strokeText(word, 0, 0);
    bgCtx.restore();
    addInteractable(
      i,
      x + fieldSettings.playFieldMargin.x,
      y + fieldSettings.playFieldMargin.y,
      w,
      h
    );
  });
};

export const drawBackground = (level: Level, regions, tutorial: boolean) => {
  bgCanvas.width = bgCanvas.width;
  drawNumberContainers(level);
  drawWalls(level, regions);
  if (state === GameStates.game) {
    drawButtons(tutorial);
  }
};

export const drawCurrentResult = (currentResult: Result404) => {
  currentResult.forEach((n, i) => {
    ctx.save();
    ctx.font = fieldSettings.canvasWidth / 2.5 + "px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if ((i == 1 && n.number !== 0) || (i !== 1 && n.number !== 4)) {
      ctx.fillStyle = "#AAA";
      ctx.globalAlpha = 0.6;
    } else {
      ctx.fillStyle = getGoldPattern();
    }

    translateDraw(ctx, i);
    ctx.fillText(
      [4, 0, 4][i].toString(),
      2.5 * fieldSettings.gridSize,
      4 * fieldSettings.gridSize
    );
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#000";

    const text =
      n.sequence + "=" + (Math.abs(n.number) > 1e4 ? "🤯" : n.number);
    setFontSize(text, 5 * fieldSettings.gridSize);
    ctx.fillText(
      text,
      2.5 * fieldSettings.gridSize,
      8.5 * fieldSettings.gridSize + fieldSettings.containerSpacing * 2
    );
    ctx.restore();
  });
  ctx.stroke();
};

export const setFontSize = (text, width, c = ctx) => {
  let size = fieldSettings.gridSize;
  ctx.font = size + "px bold Courier";

  while (c.measureText(text).width > width) {
    ctx.font = size-- + "px bold Courier";
  }
  return size;
};

export const showText = (text, buttons = []) => {
  let { y, w, h } = genericShadowBoxP({
    h: fieldSettings.gridSize * (buttons.length > 0 ? 3 : 2),
  });
  ctx.fillStyle = "#000";
  const middle =
    fieldSettings.canvasWidth / 2 + fieldSettings.playFieldMargin.x;
  const size = setFontSize(text, w - fieldSettings.gridSize);

  buttons.forEach((button, i) => {
    const w = ctx.measureText(buttons.join("")).width;
    const x =
      middle +
      (buttons.length === 2 ? (2 * i - 1) * fieldSettings.gridSize * 2 : 0);
    genericShadowBoxP({
      x: x - w / 2,
      y: y + h * 0.65,
      w,
      h: size * 2,

      color: ["#5e5", "#555"][i],
    });
    ctx.fillText(button.text, x, y + h * 0.65 + size);
    addInteractable(
      button.value,
      fieldSettings.playFieldMargin.x + x - w / 2,
      y + h * 0.65,
      w,
      size * 2
    );
  });

  ctx.fillText(text, middle, y + h / 2);
};

const genericShadowBoxP = ({
  x,
  y = fieldSettings.gridSize * 2,
  w = fieldSettings.gridSize * 10,
  h,
  color = "#DDD",
  shadow = 0.5 * fieldSettings.containerSpacing,
  c = ctx,
}: {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  color?: string;
  shadow?: number;
  c?: CanvasRenderingContext2D;
}) => {
  const startColor = ctx.fillStyle;
  x =
    !x && x !== 0
      ? fieldSettings.canvasWidth / 2 - w / 2 + fieldSettings.playFieldMargin.x
      : x;
  c.shadowOffsetX = c.shadowOffsetY = shadow;
  c.shadowColor = c.strokeStyle = "rgba(0,0,0,0.5)";
  c.fillStyle = color;
  c.fillRect(x, y, w, h);
  c.shadowOffsetX = c.shadowOffsetY = 0;
  c.lineWidth = fieldSettings.gridSize / 30;
  c.strokeRect(x, y, w, h);
  c.fillStyle = startColor;
  return { x, y, w, h };
};

const genericShadowBox = ({
  gx,
  gy,
  gw,
  gh,
  color,
  shadow,
  c,
}: {
  gx: number;
  gy: number;
  gw: number;
  gh: number;
  color?: string;
  shadow?: number;
  c?: CanvasRenderingContext2D;
}) =>
  genericShadowBoxP({
    x: gx * fieldSettings.gridSize,
    y: gy * fieldSettings.gridSize,
    w: gw * fieldSettings.gridSize,
    h: gh * fieldSettings.gridSize,
    color,
    shadow,
    c,
  });
