import { hint } from "./game";
import { initLevelSelect } from "./../levelSelect/levelSelect";
import {
  canvasOffset2BoardGridCoords,
  gridCoords2CanvasOffset,
  getTotalContainerSpacing,
} from "../coordFunctions";
import { fieldSettings } from "../constants";
import { getSequence } from "./getSequences";
import { Level } from "~interfaces";
import { currentInteractable } from "./interaction/interaction";

declare const won: boolean;
declare const level: Level;
declare const regions: number[][];
declare let numberToMove;
declare let mouseIsDown;
(window as any).mouseIsDown = false;
(window as any).numberToMove = null;

let moveOffset = { x: 0, y: 0 };
let regionLock = 0;

let outOfBoundsCoolDown = null;

export const startInteraction = (offsetX, offsetY) => {
  if (won) {
    return;
  }

  if (currentInteractable) {
    currentInteractable.value === 0 ? initLevelSelect() : hint();
  }

  const { x, y, gx, gy } = canvasOffset2BoardGridCoords(offsetX, offsetY);

  putDownBrick();

  numberToMove = level.bricks.find(
    (n) => n.gx == gx && n.gy == gy && n.dragabble
  );
  if (!numberToMove) {
    numberToMove = null;
    return;
  }
  regionLock = regions[numberToMove.gx][numberToMove.gy];
  // hämta offset från coordFunctions
  const numCoords = gridCoords2CanvasOffset(numberToMove.gx, numberToMove.gy);

  moveOffset = { x: numCoords.x - x, y: numCoords.y - y };
  mouseIsDown = true;
};

const getClosestLegalSquare = (gx, gy) => {
  let closest = { c: 99 } as { c: number; x: number; y: number };

  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 8; y++) {
      if (regions[x][y] === regionLock) {
        const c = Math.sqrt(Math.pow(x - gx, 2) + Math.pow(y - gy, 2));
        if (c < closest.c) {
          closest = { c, x, y };
        }
      }
    }
  }
  return closest;
};

export const moved = (offsetX, offsetY) => {
  if (!mouseIsDown) {
    return;
  }
  clearTimeout(outOfBoundsCoolDown);

  const { x, y, gx, gy } = canvasOffset2BoardGridCoords(offsetX, offsetY);

  if (regions[gx][gy] != regionLock) {
    const closest = getClosestLegalSquare(gx, gy);
    numberToMove.x = closest.x * fieldSettings.gridSize;
    numberToMove.y = closest.y * fieldSettings.gridSize;
    return;
  }

  numberToMove.x = Math.min(
    Math.max(x + moveOffset.x - getTotalContainerSpacing(x), 0),
    14 * fieldSettings.gridSize
  );
  numberToMove.y = Math.min(
    Math.max(y + moveOffset.y, 0),
    7 * fieldSettings.gridSize
  );
};

export const executeMove = (offsetX, offsetY) => {
  mouseIsDown = false;
  if (!numberToMove) {
    return;
  }

  let { gx, gy } = canvasOffset2BoardGridCoords(
    offsetX + moveOffset.x + fieldSettings.gridSize / 2,
    offsetY + moveOffset.y + fieldSettings.gridSize / 2
  );

  if (regions[gx][gy] != regionLock) {
    const closest = getClosestLegalSquare(gx, gy);
    gx = closest.x;
    gy = closest.y;
  }

  const gotOne = level.bricks.findIndex((n) => n.gx == gx && n.gy == gy) > -1;

  if (!gotOne && regions[gx][gy] == regionLock) {
    numberToMove.gx = gx;
    numberToMove.gy = gy;
    getSequence();
  }
  putDownBrick();
};

export const cancelMove = () => {
  clearTimeout(outOfBoundsCoolDown);
  outOfBoundsCoolDown = setTimeout(() => {
    mouseIsDown = false;
    putDownBrick();
  }, 1000);
};

const putDownBrick = () => {
  if (numberToMove == null) {
    return;
  }
  numberToMove.x = -1;
  numberToMove.y = -1;
};
