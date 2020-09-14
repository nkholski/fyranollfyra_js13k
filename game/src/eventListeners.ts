import { dialogClick } from "./dialog";
import { isPortrait } from "./index";
import { startLevel } from "./levelSelect/levelSelect";
import { GameStates } from "./interfaces";
import {
  startInteraction,
  moved,
  executeMove,
  cancelMove,
} from "./game/interaction";
import { UImoved } from "./game/interaction/interaction";

declare let canvas: HTMLCanvasElement;
declare let state: GameStates;
declare let dialogText: string;
declare let buttons: any[];

let triedFullscreen = false;

const touchToOffset = (e) => {
  const { target, targetTouches } = e;
  if (!targetTouches) {
    debugger;
  }
  const rect = target.getBoundingClientRect();
  return {
    x: targetTouches[0].pageX - rect.left,
    y: targetTouches[0].pageY - rect.top,
  };
};

const openFullscreen = () => {
  if (triedFullscreen) {
    return;
  }
  triedFullscreen = true;
  if (!confirm("Switch to fullscreen for a better touch experience?")) {
    return;
  }

  document.body.requestFullscreen();

  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
    // @ts-ignore
  } else if (canvas.mozRequestFullScreen) {
    /* Firefox */
    // @ts-ignore
    canvas.mozRequestFullScreen();
    // @ts-ignore
  } else if (canvas.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    // @ts-ignore
    canvas.webkitRequestFullscreen();
    // @ts-ignore
  } else if (canvas.msRequestFullscreen) {
    /* IE/Edge */
    // @ts-ignore
    canvas.msRequestFullscreen();
  }
};

export const startListenders = () => {
  let position = { x: 0, y: 0 };
  // INTERACTION START
  const mouseDown = ({ x, y }: { x: number; y: number }) => {
    position = { x, y };
    if (isPortrait()) {
      return;
    }
    if (buttons.length > 0) {
      dialogClick();
      return;
    }
    dialogText = "";
    buttons = [];
    state == GameStates.game ? startInteraction(x, y) : startLevel();
  };
  canvas.onmousedown = (e) => mouseDown({ x: e.offsetX, y: e.offsetY });
  canvas.ontouchstart = (e) => mouseDown(touchToOffset(e));

  // INTERACTION MOVE
  const mouseMove = ({ x, y }: { x: number; y: number }) => {
    position = { x, y };
    if (isPortrait()) {
      return;
    }
    (window as any).mousePosition = { x, y };
    UImoved(x, y);
    if (state == GameStates.game) {
      moved(x, y);
    }
  };
  canvas.onmousemove = (e) => {
    e.preventDefault;
    mouseMove({ x: e.offsetX, y: e.offsetY });
  }; //  e.prevent
  canvas.addEventListener("touchmove", (e) => mouseMove(touchToOffset(e)), {
    passive: false,
  });

  // INTERACTION EXECUTE
  const mouseUp = () =>
    isPortrait() ? null : executeMove(position.x, position.y);

  canvas.onmouseup = (e) => mouseUp();
  //@ts-ignore
  canvas.ontouchend = (e) => openFullscreen() + mouseUp();

  // INTERACTION CANCEL
  canvas.onmouseout = () => cancelMove();
  canvas.ontouchcancel = () => cancelMove();
};
