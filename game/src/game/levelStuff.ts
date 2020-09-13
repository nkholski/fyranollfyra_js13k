import { getRegions } from "./getRegions";
import { makeRandom } from "./random";
import { Level } from "./../interfaces";

export const scrambleNumbers = (level: Level, scramble = true) => {
  const random = makeRandom(level.seed);
  const regions = getRegions(level);

  level.bricks.forEach((brick) => {
    brick.gx = brick.ox;
    brick.gy = brick.oy;
    brick.dragabble = brick.odragabble;
    brick.region = regions[brick.gx][brick.gy];
    if (scramble && brick.odragabble) {
      let okPosition = false;
      let exit = 0;
      while (!okPosition && exit++<1000) {
        if(exit===999){
          debugger;
        }

        const gx = Math.round(random(14));
        const gy = Math.round(random(7));

        if (
          !level.bricks.some(
            (num) => num !== brick && num.gx == gx && num.gy == gy
          ) &&
          regions[gx][gy] === brick.region
        ) {
          okPosition = true;
          brick.gx = gx;
          brick.gy = gy;
        }
      }
    }
  });
  if (!level.bricks[0]) {
    debugger;
  }

  return level.bricks;
};
