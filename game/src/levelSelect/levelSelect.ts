import { jitterBox } from "./../patterns";
import { drawBackground, drawNumbers, showText } from "./../game/drawing";
import { GameStates } from "./../interfaces";
import { setCursor } from "./../cursor";
import { scrambleNumbers } from "./../game/levelStuff";
import { getRegions } from "./../game/getRegions";
import { reset } from "./../game/game";
import { Level } from "../interfaces";
import {
  resetInteractables,
  addInteractable,
  currentInteractable,
} from "../game/interaction/interaction";
import { fieldSettings } from "../constants";

const logo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAAOAQMAAAABnzBSAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAHRJREFUCNdj+N/AwMDGxpD7nwEIwDz2NhjvAAOE1wDhGdyefyzNJrchcbt9A8Mfg/v3Qbwfifv3g3h3HMzkDgN5OxoSgCpvsH8D8hoSN/A/gPDY4Dz+GxJmIJ78BoMEdB4DSCXQBkagSjQegz0DBNQBMSoPAMhXQXeCqYkPAAAAAElFTkSuQmCC";
const logoImg = new Image();
logoImg.src = logo;

declare let canvas: HTMLCanvasElement;
declare let bgCanvas: HTMLCanvasElement;

declare const ctx: CanvasRenderingContext2D;
declare let lvlCanvas: HTMLCanvasElement;
declare let lvlCtx: CanvasRenderingContext2D;
declare let levels: Level[];
declare const dialogText: string;

export const LevelBoxWidth = 250;
const levelGridSize = LevelBoxWidth / 15;
export const LevelBoxHeight = levelGridSize * 8;

let tick = 0;
export const levelSelectUpdate = () => {
  if (fieldSettings.dirty) {
    initLevelSelect();
  }
  // canvas.width = fieldSettings.canvasWidth;

  // const gridSize = 10;
  // const containerSpacing = gridSize / 5;
  // ctx.drawImage(
  //   bgCanvas,
  //   0,
  //   0,
  //   Math.round(
  //     fieldSettings.gridSize * 15 + fieldSettings.containerSpacing * 3
  //   ),
  //   Math.round(fieldSettings.gridSize * 8),
  //   0,
  //   0,
  //   15 * gridSize + 3 * containerSpacing,
  //   8 * gridSize
  // );

  ctx.drawImage(lvlCanvas, 0, 0);

  //void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  ctx.strokeStyle = "#FEF267";
  ctx.globalAlpha = Math.round(++tick / 9) % 2 ? 1 : 0.5;
  ctx.lineWidth = fieldSettings.gridSize / 30;

  if (currentInteractable && currentInteractable.value.unlocked) {
    setCursor("pointer");
    ctx.strokeRect(
      currentInteractable.x,
      currentInteractable.y,
      currentInteractable.w,
      currentInteractable.h
    );
  } else {
    setCursor();
  }
  ctx.globalAlpha = 1;
};

export const initLevelSelect = () => {
  lvlCanvas.width = fieldSettings.canvasWidth;

  lvlCtx.globalAlpha = 0.5;
  jitterBox(lvlCtx, fieldSettings.canvasWidth, fieldSettings.canvasHeight);
  lvlCtx.globalAlpha = 1;

  (window as any).state = GameStates.menu;
  resetInteractables();
  drawGrid();

  // drawLevels();
};

let currentTranslate = 0;
const setCtx = (y: number) => {
  currentTranslate += y;
  lvlCtx.translate(0, y);
};

const drawGrid = () => {
  lvlCtx.save();

  // Page parts
  const levelsPerRow = 8;
  const disposableHeight = fieldSettings.canvasHeight * 0.9;
  const titleHeight = 0.1 * disposableHeight;
  const sectionTitleHeight = 0.05 * disposableHeight;
  const maxStageHeight =
    (disposableHeight - (titleHeight + sectionTitleHeight * 4)) / 7; // Total height minus texts divded by 7 rows

  const screenSquareRatio =
    (fieldSettings.gridSize * 15 + fieldSettings.containerSpacing * 2) /
    (fieldSettings.gridSize * 8); // Ändra till siffra

  const maxStageWidth = maxStageHeight * screenSquareRatio;

  const squareWidth =
    maxStageWidth * 8 > window.innerWidth
      ? window.innerWidth / 8
      : maxStageWidth;

  lvlCtx.strokeStyle = "#000";
  lvlCtx.globalAlpha = 1;
  lvlCtx.textBaseline = "top";

  //const viewWidth

  // lvlCtx.strokeRect(0, 0, fieldSettings.canvasWidth, titleHeight);

  const leftMargin = (window.innerWidth - squareWidth * 8) / 2;

  lvlCtx.translate(leftMargin, 0);

  setCtx(titleHeight / 3);

  const logoWidth = 3.5 * squareWidth;
  lvlCtx.imageSmoothingEnabled = false;
  lvlCtx.globalAlpha = 0.7;
  lvlCtx.drawImage(
    logoImg,
    0,
    0,
    99,
    14,
    4.45 * squareWidth,
    squareWidth * 0.3,
    logoWidth,
    logoWidth * 0.14
  ); // 14/99 = 0.14
  lvlCtx.imageSmoothingEnabled = true;
  lvlCtx.globalAlpha = 1;
  let lvli = -1;

  for (let sec = 0; sec < 4; sec++) {
    const squares = sec == 0 ? 4 : 16;
    const rows = sec == 0 ? 1 : 2;
    const squarePerRow = squares / rows;
    const gridSize = squareWidth / 10;
    const containerSpacing = gridSize / 5;

    // lvlCtx.strokeRect(0, 0, fieldSettings.canvasWidth, sectionTitleHeight);
    lvlCtx.font = sectionTitleHeight / 2 + "px a";
    lvlCtx.textAlign = "left";

    lvlCtx.fillText(
      [
        "I'm new. Yes! A tutorial.",
        "I'm a kid. Hey! This isn't Fortnite! 😠",
        "I like fun and feeling good about myself.",
        "Fun is OK, but I prefer to be frustrated and angry.",
      ][sec],
      0,
      sectionTitleHeight / 2
    );

    lvlCtx.textAlign = "center";
    lvlCtx.textBaseline = "middle";

    setCtx(sectionTitleHeight);

    const multiplier = maxStageWidth / (15.5 * gridSize + containerSpacing + 3);

    //const multiplier = 15 * gridSize + containerSpacing + 3;
    const targetWidth = Math.round(
      (15 * gridSize + containerSpacing + 3) * multiplier
    );
    const targetHeight = Math.round(
      8 * gridSize * multiplier + containerSpacing
    );
    const padding = Math.round(0.5 * gridSize * multiplier);

    let sY = 0;
    for (let i = 0; i < squares; i++) {
      lvli++;
      sY = Math.floor(i / squarePerRow);
      if (i === levelsPerRow) {
        setCtx(targetHeight + padding);
      }
      // lvlCtx.strokeRect(
      //   (i - sY * squarePerRow) * squareWidth,
      //   0,
      //   squareWidth,
      //   squareWidth / screenSquareRation
      // );

      // const multiplier =
      //   maxStageWidth / (15.5 * gridSize + containerSpacing + 3);

      // //const multiplier = 15 * gridSize + containerSpacing + 3;
      // const targetWidth = Math.round(
      //   (15 * gridSize + containerSpacing + 3) * multiplier
      // );
      // const targetHeight = Math.round(
      //   8 * gridSize * multiplier + containerSpacing
      // );
      // const padding = Math.round(0.5 * gridSize * multiplier);

      const xPos = (i - sY * squarePerRow) * (targetWidth + padding);

      // Temporär

      if (lvli >= levels.length) {
        lvlCtx.fillRect(xPos, 0, targetWidth, targetHeight);
        continue;
      }
      const level = levels[lvli];

      const regions = getRegions(level);
      scrambleNumbers(level, lvli > 3);
      drawBackground(level, regions, lvli > 3);
      drawNumbers(level.bricks);

      lvlCtx.drawImage(
        bgCanvas,
        0,
        0,
        fieldSettings.gridSize * 15 + fieldSettings.containerSpacing * 3,
        fieldSettings.gridSize * 8 + fieldSettings.containerSpacing,
        xPos,
        0,
        targetWidth,
        targetHeight
      );

      if (!level.unlocked) {
        lvlCtx.globalAlpha = 0.8;
        lvlCtx.fillRect(xPos, 0, targetWidth, targetHeight);
        lvlCtx.globalAlpha = 1;
      }

      addInteractable(
        level,
        leftMargin + xPos,
        currentTranslate,
        targetWidth,
        targetHeight
      );

      lvlCtx.font = sectionTitleHeight + "px a";

      if (level.unlocked) {
        lvlCtx.fillStyle = "#CEC";
        lvlCtx.strokeStyle = "#000";

        lvlCtx.lineWidth = sectionTitleHeight / 9;
        lvlCtx.strokeText(
          ((i + 1) as unknown) as string,
          xPos + targetWidth / 2,
          targetHeight / 2
        );
      }
      lvlCtx.fillText(
        ((i + 1) as unknown) as string,
        xPos + targetWidth / 2,

        targetHeight / 2
      );

      lvlCtx.fillStyle = "#000";
    }
    setCtx(targetHeight);
  }
  currentTranslate = 0;
  lvlCtx.restore();
};

// export const setLevelFromCoord = ({ x, y }) =>
//   (currentSelection = Math.round(3 * Math.random()));

export const startLevel = () =>
  currentInteractable && currentInteractable.value.unlocked
    ? reset(currentInteractable.value)
    : 0;
