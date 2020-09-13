import { Wall, Brick } from "./levels/interfaces";
const random = (i) => Math.round(i * Math.random());
const getProgress = (i) => false;
//----CUT----//
const levelSections = [4, 16, 16, 16]; // Remove export, use level object instead
const colors = ["3EE", "090", "F58FD5", "9A54DE", "525", "a70"];
// getNumberFromCharCode
const g = (s: string, i: number) => s.charCodeAt(i) - 34;
let colorIndex = -1;
let sI = 0; // Section index
let numbersBeforeSection = -1;

export const levelDecoder = (lvls: string[]) =>
  lvls.map((lvl: string, lI: number) => {
    const seed = g(lvl, 0);
    const [w, b, ...t] = lvl.substring(1).split(" ");
    const walls: Wall[] = [];
    if (w != "") {
      for (let i = 0; i < w.length; i += 4) {
        walls.push({
          x: g(w, i),
          y: g(w, i + 1),
          w: g(w, i + 2),
          h: g(w, i + 3),
        });
      }
    }

    const bricks: Brick[] = [];

    for (let i = 0; i < b.length; i += 3) {
      const code = g(b, i);
      const odragabble = code > 11;
      //@ts-ignore
      const c = code - odragabble * 12;

      bricks.push({
        odragabble,
        content: c == 11 ? "-" : c == 10 ? "+" : "" + c,
        ox: g(b, i + 1),
        oy: g(b, i + 2),
      });
    }

    let lastColor = colorIndex;
    while (lastColor === colorIndex) {
      colorIndex = Math.floor(random(colors.length - 1));
    }

    if (lI > levelSections[sI] + numbersBeforeSection) {
      numbersBeforeSection += levelSections[sI++];
    }

    return {
      seed,
      color: "#" + colors[colorIndex],
      walls,
      bricks,
      section: sI,
      unlocked: getProgress(lI),
      text: t.join(" "),
    };
  });
