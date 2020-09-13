interface interactiveble {
  value: any;
  x: number;
  y: number;
  w: number;
  h: number;
}

export let currentInteractable: interactiveble;
declare let dialogText: string;
declare let buttons: any[];

let interactables: interactiveble[];

export const UImoved = (x, y) => {
  if (!interactables) {
    return;
  }

  currentInteractable = interactables.find(
    (int) =>
      int.x <= x &&
      int.y <= y &&
      int.x + int.w >= x &&
      int.y + int.h >= y &&
      (dialogText.length === 0 || buttons.some((b) => int.value == b.value))
  );
};

export const resetInteractables = () => {
  (interactables = []), (currentInteractable = null);
};

export const addInteractable = (
  value: any,
  x: number,
  y: number,
  w: number,
  h: number
) => {
  interactables = interactables.filter((i) => i.value !== value);
  interactables.push({
    value,
    x,
    y,
    w,
    h,
  });
  //console.log(interactables);
};
