import { LevelStub } from "./interfaces";
export default {
  seed: 5,
  text: "n4",
  walls: [],
  bricks: [
    {
      content: "1",
      ox: 1,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 1,
      oy: 4,
      odragabble: true,
    },
    {
      content: "9",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    {
      content: "6",
      ox: 3,
      oy: 4,
      odragabble: true,
    },
    // 2
    {
      content: "9",
      ox: 7,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "9",
      ox: 7,
      oy: 4,
      odragabble: true,
    },

    // 3
    {
      content: "2",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "+",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "3",
      ox: 13,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "1",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
