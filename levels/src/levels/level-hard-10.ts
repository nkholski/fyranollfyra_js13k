import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "x",
  walls: [{ x: 3, y: -1, w: 9, h: 10 }],
  bricks: [
    {
      content: "7",
      ox: 1,
      oy: 2,
      odragabble: true,
    },
    {
      content: "0",
      ox: 2,
      oy: 2,
      odragabble: true,
    },
    {
      content: "2",
      ox: 3,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 0,
      oy: 3,
      odragabble: true,
    },

    {
      content: "6",
      ox: 1,
      oy: 3,
      odragabble: true,
    },
    {
      content: "9",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "9",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "+",
      ox: 0,
      oy: 4,
      odragabble: true,
    },

    {
      content: "1",
      ox: 1,
      oy: 4,
      odragabble: true,
    },
    // 2
    {
      content: "3",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 8,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 4,
      odragabble: true,
    },
    {
      content: "3",
      ox: 7,
      oy: 5,
      odragabble: true,
    },
    {
      content: "2",
      ox: 8,
      oy: 5,
      odragabble: true,
    },

    // 3
    {
      content: "1",
      ox: 13,
      oy: 3,
      odragabble: true,
    },
    {
      content: "7",
      ox: 14,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 13,
      oy: 4,
      odragabble: true,
    },
    {
      content: "0",
      ox: 12,
      oy: 5,
      odragabble: true,
    },
    {
      content: "1",
      ox: 13,
      oy: 5,
      odragabble: true,
    },
    {
      content: "3",
      ox: 14,
      oy: 5,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
