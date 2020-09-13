import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "x",
  walls: [{ x: 3, y: 1, w: 9, h: 6 }],
  bricks: [
    {
      content: "9",
      ox: 3,
      oy: 0,
      odragabble: true,
    },
    {
      content: "9",
      ox: 4,
      oy: 0,
      odragabble: true,
    },
    {
      content: "-",
      ox: 1,
      oy: 4,
      odragabble: true,
    },
    {
      content: "8",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    {
      content: "8",
      ox: 3,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 4,
      oy: 4,
      odragabble: true,
    },
    {
      content: "7",
      ox: 3,
      oy: 7,
      odragabble: true,
    },
    {
      content: "0",
      ox: 2,
      oy: 7,
      odragabble: true,
    },
    {
      content: "1",
      ox: 5,
      oy: 0,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 0,
      odragabble: true,
    },
    {
      content: "1",
      ox: 7,
      oy: 4,
      odragabble: true,
    },
    {
      content: "1",
      ox: 10,
      oy: 4,
      odragabble: true,
    },
    {
      content: "0",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
    {
      content: "6",
      ox: 13,
      oy: 4,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
