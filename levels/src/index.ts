const fs = require("fs");

import { levelDecoder } from "./levelDecoder";
import { levelEncoder } from "./levelEncoder";
import { levels } from "./levels/levels";
process.stdout.write(`\n\n\nUpdating levels`);

// Encode
let encoded = "";
levels.forEach((level) => {
  encoded += levelEncoder(level) + "  ";
});
encoded = encoded.replace(/\s\s$/, "");

const decodedLevels = levelDecoder(encoded.split("  "));

// Test encoded
decodedLevels.forEach((decoded, li) => {
  const level = levels[li];
  if (decoded.seed !== level.seed) {
    console.log("Seed error, level:" + li);
    console.log(level);
    process.exit(0);
  }
  decoded.walls.forEach((wall, wi) => {
    const lwall = level.walls[wi];
    if (
      wall.x !== lwall.x ||
      wall.y !== lwall.y ||
      wall.w !== lwall.w ||
      wall.h !== lwall.h
    ) {
      console.log(`Wall error, level: ${li}, wall: ${wi}`);
      console.log(` -> ${wall.x} ${wall.y} ${wall.w} ${wall.h}`);
      process.exit(0);
    }
  });

  const taken = [];
  for (let x = 0; x < 15; x++) {
    taken[x] = [];
    for (let y = 0; y < 8; y++) {
      taken[x][y] = false;
    }
  }

  decoded.bricks.forEach((brick, bi) => {
    const lbrick = level.bricks[bi];
    if (taken[brick.ox][brick.oy]) {
      console.log("TAKEN!", li, brick.ox, brick.oy, level.text);
      process.exit(0);
    }
    taken[brick.ox][brick.oy] = true;

    if (
      brick.ox != lbrick.ox ||
      brick.oy != lbrick.oy ||
      brick.content != lbrick.content ||
      brick.dragabble !== lbrick.dragabble
    ) {
      console.log(`Brick error, level: ${li}, brick: ${bi}`);
      console.log(
        ` -> ${brick.content} (${brick.x}, ${brick.y}) ${
          brick.dragabble ? "dragabble" : "static"
        } `
      );
      console.log(
        ` -> ${lbrick.content} (${lbrick.ox}, ${lbrick.oy}) ${
          lbrick.dragabble ? "dragabble" : "static"
        } `
      );
      process.exit(0);
    }
  });

  if (decoded.text != level.text && level.text.length > 5) {
    console.log(`Text error, level: ${li}, ${level.text}`);
    process.exit(0);
  }
});

process.stdout.write(`\nCreating levelDecoder.ts`);
let pasteAtTop = fs
  .readFileSync(__dirname + "/levelDecoderPasteAtTop.ts")
  .toString()
  .replace("// @ts-nocheck", "");

let outData = fs.readFileSync(__dirname + "/levelDecoder.ts").toString();
outData =
  pasteAtTop +
  "const lvls = `" +
  encoded +
  "`.split('  ');\n" +
  outData.split("//----CUT----//")[1];

outData = outData.replace("(lvls: string[])", "()");
//outData = outData.replace("lvls.map", "`" + encoded + "`.split('  ')");

fs.writeFileSync(
  __dirname + "/../../game/src/generated/levelDecoder.ts",
  outData
);
process.stdout.write("\nSuccess\n");
