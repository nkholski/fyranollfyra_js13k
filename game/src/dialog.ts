import { currentInteractable } from "./game/interaction/interaction";

declare let blink: boolean;
declare let buttons: any;
declare let dialogText: string;

export const dialogClick = () => {
  if (!currentInteractable) {
    return;
  }
  switch (currentInteractable.value) {
    case "y":
      blink = true;
      break;
    case "n":
      blink = false;
      break;
    default:
      return;
  }
  buttons = [];
  dialogText = "";
};
