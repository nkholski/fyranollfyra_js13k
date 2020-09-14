import { fieldSettings } from "./../constants";
import { initLevelSelect } from "./../levelSelect/levelSelect";
import { setCursor } from "./../cursor";
import { wonLevel } from "./../localStorage";
import { GameStates } from "./../interfaces";
import { getSequence } from "./getSequences";
import { Result404, Brick } from "../interfaces";
import {
  drawBackground,
  drawCurrentResult,
  drawNumbers,
  showText,
  getButtonBounds,
} from "./drawing";
import { Level } from "./../interfaces";
import { getRegions } from "./getRegions";
import { scrambleNumbers } from "./levelStuff";
import {
  resetInteractables,
  currentInteractable,
} from "./interaction/interaction";

declare let buttons: any[];
declare let coil: boolean;
declare let canvas: HTMLCanvasElement;
declare const ctx: CanvasRenderingContext2D;
declare let bgCanvas: HTMLCanvasElement;
declare let bgCtx: CanvasRenderingContext2D;
declare let numbers: any;
declare let level: Level;
declare let regions: number[][];
declare let currentResult: Result404;
declare let showLevelText: boolean;
declare let won: boolean;
declare const numberToMove;
declare const mouseIsDown;
declare let levels: Level[];
declare let bricks: Brick[];
declare let hasHint: boolean;
declare let dialogText: string;

let section = 0;

let testing = false;
(window as any).won = false;
(window as any).showLevelText = true;
let currentLevelNumber = 0;
let hinted: boolean[];
let tutorial: boolean;

const finishSectionStrings = [
  "Tutorial complete! All other sections are unlocked.",
  "Section complete. You're a bright kid!",
  "Finished normal. Dare more?",
  "You're a champion!",
];

export const gameUpdate = () => {
  ctx.translate(
    fieldSettings.playFieldMargin.x,
    fieldSettings.playFieldMargin.y
  );
  // if (numberToMove) {
  //   setCursor(mouseIsDown ? "grabbing" : "grab");
  // } else {
  //   setCursor();
  // }

  if (numberToMove) {
    setCursor(mouseIsDown ? "grabbing" : "grab");
  } else if (currentInteractable) {
    setCursor("pointer");
  } else {
    setCursor();
  }

  if (won || fieldSettings.dirty) {
    drawBackground(level, regions, tutorial);
  }

  ctx.drawImage(bgCanvas, 0, 0);
  drawCurrentResult(currentResult);
  drawNumbers(level.bricks);

  const b = getButtonBounds(1);

  if (!hasHint) {
    ctx.globalAlpha = 0.7;
    ctx.fillRect(b[0], b[1], b[2], b[3]);
    ctx.globalAlpha = 1;
  }

  if (
    !won &&
    currentResult[0].number === 4 &&
    currentResult[1].number === 0 &&
    currentResult[2].number === 4
  ) {
    won = true;
    const nextLevel = wonLevel(level);
    if (!nextLevel || nextLevel.section !== level.section) {
      dialogText = finishSectionStrings[level.section];
      setTimeout(() => initLevelSelect(), 5000);
    } else {
      setTimeout(() => reset(nextLevel), 2000);
    }
  }
};

export const reset = (level: Level) => {
  resetInteractables();
  hinted = [];
  buttons = [];
  (window as any).level = level;
  (window as any).state = GameStates.game;

  currentLevelNumber = levels.indexOf(level);
  tutorial = currentLevelNumber < 4;

  won = false;
  dialogText = level.text.length > 1 ? level.text : "";
  // level = levels[currentLevelNumber];
  section = level.section;
  regions = getRegions(level);
  scrambleNumbers(level, !tutorial && !(window as any).editor);
  drawBackground(level, regions, tutorial);
  getSequence();
};

export const hint = () => {
  if (!hasHint) {
    dialogText = coil
      ? "Your Coil subscription will recharge a hint within 3 seconds."
      : "Hints recharges every 30 seconds. Subscribe to Coil to reduce to 3.";
    return;
  }
  hasHint = false;
  setTimeout(() => (hasHint = true), coil ? 3e3 : 3e4);

  let tries = 0;
  let tries2 = 0;
  let sI;
  let didMove = false;
  while (!didMove && tries2++ < 99) {
    do {
      sI = Math.round(2 * Math.random());
    } while (hinted[sI] && tries++ < 99);
    hinted[sI] = true;
    level.bricks.forEach((brick) => {
      if (brick.ox >= sI * 5 && brick.ox < (sI + 1) * 5) {
        const crash = level.bricks.find(
          (b) => b.gx === brick.ox && b.gy === brick.oy
        );
        if (crash) {
          crash.gx = brick.gx;
          crash.gy = brick.gy;
        }

        brick.gx = brick.ox;
        brick.gy = brick.oy;
        brick.dragabble = false;
        didMove = true;
      }
    });
  }
  getSequence();
};
