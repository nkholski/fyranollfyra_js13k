import { showText } from "./game/drawing";
import { levelDecoder } from "./generated/levelDecoder";
import { levelSelectUpdate, initLevelSelect } from "./levelSelect/levelSelect";
import { startListenders } from "./eventListeners";
import { recalcConstants, fieldSettings } from "./constants";
import { reset, gameUpdate } from "./game/game";
import { GameStates, Level } from "./interfaces";
import { addTrophy } from "./game/trophy";

declare let canvas: HTMLCanvasElement;
declare let ctx: CanvasRenderingContext2D;
declare let bgCanvas: HTMLCanvasElement;
declare let dialogText: string;
declare let buttons: any[];

//@ts-ignore
declare let state: GameStates;
declare let levels: Level[];

const global = window as any;
global.numbers = [];
global.level = null;
global.regions = null;
global.state = GameStates.title;
global.canvas = document.createElement("canvas");
global.ctx = canvas.getContext("2d");
global.bgCanvas = document.createElement("canvas");
global.bgCtx = bgCanvas.getContext("2d");

global.currentResult = [
  { number: 4, sequence: "" },
  { number: 4, sequence: "" },
  { number: 4, sequence: "" },
];

global.lvlCanvas = document.createElement("canvas");
global.lvlCtx = global.lvlCanvas.getContext("2d");

document.body.appendChild(canvas);

(window as any).blink = true;

(window as any).editor = !!document.location.href.split("?")[2];
(window as any).hasHint = true;
(window as any).dialogText =
  "Photogenic seizure warning! Enable flashing effects (recommended for most)?";
(window as any).buttons = [];
(window as any).buttons = [
  { text: "Yes", value: "y" },
  { text: "No", value: "n" },
];
export const isPortrait = () => window.innerHeight > window.innerWidth;

setTimeout(() => {
addTrophy("🕓", "Time well spent", "Five great minutes of your life went into this game", true);
},3e5);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    // confirm(
    //   "Photosensitive seizure warning\nClick OK for full effects, cancel to skip flashes."
    // );
    //@ts-ignore
    (window as any).coil =  document.monetization && document.monetization.state === "started";
    recalcConstants();
    global.levels = levelDecoder();
    startListenders();
    document.location.href.indexOf("?") > -1
      ? reset(levels[parseInt(document.location.href.split("?")[1], 10)])
      : initLevelSelect();

    update();
  },
  false
);

const update = () => {
  if (
    window.innerWidth + window.innerHeight !==
    fieldSettings.canvasWidth + fieldSettings.canvasHeight
  ) {
    recalcConstants();
  }
  canvas.width = fieldSettings.canvasWidth;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (isPortrait()) {
    ctx.font = fieldSettings.canvasWidth / 9 + "px a";
    ctx.fillText(
      "Rotate device",
      fieldSettings.canvasWidth / 2,
      fieldSettings.canvasWidth / 9
    );
  } else {
    state === GameStates.game ? gameUpdate() : levelSelectUpdate();
    if (dialogText.length > 0) {
      showText(dialogText, buttons);
    }
  }
  fieldSettings.dirty = false;
  window.requestAnimationFrame(update);
};

// Behövs efter varje width-reset
// https://stackoverflow.com/questions/24883585/mouse-coordinates-dont-match-after-scaling-and-panning-canvas
export const setScale = () => {
  global.ctx.scale(2, 2);
  global.bgCtx.scale(2, 2);
};
