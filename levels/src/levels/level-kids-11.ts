import { LevelStub } from "./interfaces";
export default {
  seed: 5,
  text: "11",
  walls: [{ x: 5, y: -1, w: 15, h: 10 }],
  bricks: [
    {
      content: "4",
      ox: 0,
      oy: 3,
      odragabble: true,
    },
    {
      content: "+",
      ox: 1,
      oy: 3,
      odragabble: true,
    },
    {
      content: "1",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
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
      content: "2",
      ox: 13,
      oy: 3,
      odragabble: true,
    },
    {
      content: "+",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "0",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
