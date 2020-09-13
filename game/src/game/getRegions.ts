import { gridCount } from "../constants";
import { Level } from "../interfaces";
declare let level: Level;

export const getRegions = (lvl = level) => {
  let currentAreaIndex = 1;
  const areas = [];
  let i = 0;
  for (let x = 0; x < gridCount.x; x++) {
    areas.push([]);
    for (let y = 0; y < gridCount.y; y++) {
      areas[x].push(0);
    }
  }
  // Turn into walls
  const vWalls = [];
  const hWalls = [];
  lvl.walls.forEach((wall) => {
    const leftWall = {
      x: wall.x,
      y1: wall.y,
      y2: wall.y + wall.h,
    };
    vWalls.push(leftWall, { ...leftWall, x: wall.x + wall.w });
    const topWall = {
      y: wall.y,
      x1: wall.x,
      x2: wall.x + wall.w,
    };
    hWalls.push(topWall, { ...topWall, y: wall.y + wall.h });
  });

  // Kolla ledigt till höger?

  // !(x < wall.x && x + 1 > wall.x) // Om inte x är till vänster om vägg och en till höger inte är till höger om den samtidigt
  let squaresDone = 0;
  let change = false;
  while (i++ < 1000 && squaresDone < 120) {
    if (!change) {
      // put out next number somewhere to grow from
      areas.forEach((row) => {
        row.forEach((cell, i2) => {
          if (!change && cell == 0) {
            row[i2] = currentAreaIndex++; // Sätt på samma sätt nedan och kör change + squaresDone där setArea(x,y,index);
            squaresDone++;
            change = true;
            return;
          }
        });
        if (change) {
          return;
        }
      });
    }
    change = false;
    for (let x = 0; x < gridCount.x; x++) {
      for (let y = 0; y < gridCount.y; y++) {
        const areaIndex = areas[x][y];
        if (areaIndex === 0) {
          // Om det är noll ska det inte spridas
          continue;
        }
        const ok = [y > 0, x < gridCount.x - 1, y < gridCount.y - 1, x > 0]; // up,right,down,left
        vWalls.forEach((wall) => {
          const verticalMatch = wall.y1 <= y && wall.y2 > y;
          if (!verticalMatch) {
            return; // Wall cannot block horizontally
          }
          ok[1] = ok[1] && (x >= wall.x || wall.x - x > 1); // Check on right of border or with space right to border
          ok[3] = ok[3] && (x < wall.x || wall.x - x <= -1);
        });
        hWalls.forEach((wall) => {
          const horizontalMatch = wall.x1 <= x && wall.x2 > x;
          if (!horizontalMatch) {
            return; // Wall cannot block vertically
          }
          ok[2] = ok[2] && (y >= wall.y || wall.y - y > 1);
          ok[0] = ok[0] && (y < wall.y || wall.y - y <= -1);
        });

        if (ok[0] && areas[x][y - 1] == 0) {
          areas[x][y - 1] = areaIndex;
          squaresDone++;
          change = true;
        }
        if (ok[1] && areas[x + 1][y] == 0) {
          areas[x + 1][y] = areaIndex;
          change = true;
          squaresDone++;
        }
        if (ok[2] && areas[x][y + 1] == 0) {
          areas[x][y + 1] = areaIndex;
          change = true;
          squaresDone++;
        }
        if (ok[3] && areas[x - 1][y] == 0) {
          areas[x - 1][y] = areaIndex;
          squaresDone++;
          change = true;
        }
      }
    }
  }
  return areas;
};
