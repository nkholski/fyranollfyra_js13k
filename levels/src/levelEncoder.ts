//@ts-ignore
import { Level } from "./../../levels/interfaces";

/*
ascii   - seed (0-92 => ascii(33-126)
FFF     - färg

\s       - separator
X       - content|true : Ascii först sanna, sen falska
X       - x|y Ascii, 120 tecken X % 15 = gy, X-y*5= gx
\stext   - */

export const levelEncoder = (level: Level) => {
  let encoded = "";

  // 1. seed
  if (level.seed + 33 > 126) {
    alert("bad seed");
  }
  encoded += numToAscii(level.seed);
  // 2. color // No color
  // encoded += hex6tohex3(level.color);

  // 3. Walls
  level.walls.forEach((wall) => {
    encoded +=
      numToAscii(wall.x < -1 ? -1 : wall.x) +
      numToAscii(wall.y < -1 ? -1 : wall.y) +
      numToAscii(wall.w) +
      numToAscii(wall.h);
  });
  encoded += " ";

  // 4. Bricks
  level.bricks.forEach((brick, i) => {
    let contentNum = parseInt(brick.content, 10);

    if (brick.content === "+") {
      contentNum = 10;
    }
    if (brick.content === "-") {
      contentNum = 11;
    }

    if (brick.odragabble) {
      contentNum += 12;
    }

    // if (i == 0) {
    //   process.stdout.write(`level>> ${brick.content} ${contentNum}\n`);
    // }
    // content + odragabble + x/y = 3 chars
    encoded += numToAscii(contentNum);
    encoded += numToAscii(brick.ox);
    encoded += numToAscii(brick.oy);
  });
  encoded += " ";

  //5. Message
   encoded += level.text.length < 5 ? "x" : level.text;
  // encoded += level.text;

  return encoded;
};

// 32 = space = separator, 33 = -1
const numToAscii = (num: number) => String.fromCharCode(34 + num);

const hex6tohex3 = (hex: string) => {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    return hex;
  }

  const doubleHex = [
    hex.substring(0, 2),
    hex.substring(2, 4),
    hex.substring(4, 6),
  ];

  return doubleHex.reduce((color: string, doubleHex) => {
    const digital256 = parseInt(doubleHex, 16);
    const digital16 = Math.round((digital256 / 255) * 15);
    return color + digital16.toString(16);
  }, "");
};

// const colors = ["3EE", "090", "090", "090", "525", "a70"];

// // Skicka in sections så den kan veta vilken det ska vara. Ta inte in lvl, hårdkoda in data som const och gör ny fil.

// // getNumberFromCharCode
// const g = (s: string, i: number) => s.charCodeAt(i) - 34;
// const C = colors.join("");
// const lastIndex = -1;

// export const levelDecoder = (lvl: string) => {
//   const seed = g(lvl, 0);
//   const [w, b, ...t] = lvl.substring(1).split(" ");
//   const walls = [];
//   if (w != "") {
//     // console.log("wall:" + w);
//     for (let i = 0; i < w.length; i += 4) {
//       walls.push({
//         x: g(w, i),
//         y: g(w, i + 1),
//         w: g(w, i + 2),
//         h: g(w, i + 3),
//       });
//     }
//   }

//   const bricks = [];
//   for (let i = 0; i < b.length; i += 3) {
//     const code = g(b, i);
//     const odragabble = code > 11;
//     //@ts-ignore
//     const c = code - odragabble * 12;
//     bricks.push({
//       odragabble,
//       content: c == 11 ? "-" : c == 10 ? "+" : "" + c,
//       x: g(b, i + 1),
//       y: g(b, i + 2),
//     });
//   }

//   let index = lastIndex;
//   while (index === lastIndex) {
//     index = Math.floor(colors.length * Math.random());
//   }

//   return {
//     seed,
//     color: "#" + colors[index],
//     walls,
//     bricks,
//     text: t.join(" "),
//   };
// };
