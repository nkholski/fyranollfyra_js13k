import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "k15",
  walls: [{ x: 3, y: -1, w: 9, h: 10 }],
  bricks: [
    {
      content: "6",
      ox: 2,
      oy: 0,
      odragabble: true,
    },
    {
      content: "-",
      ox: 2,
      oy: 1,
      odragabble: true,
    },
    {
      content: "2",
      ox: 4,
      oy: 2,
      odragabble: true,
    },
    // 2
    {
      content: "3",
      ox: 6,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "3",
      ox: 8,
      oy: 3,
      odragabble: true,
    },
    // 3
    {
      content: "9",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "5",
      ox: 13,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
