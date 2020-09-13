import { LevelStub } from "./interfaces";
export default {
  seed: 4,
  text: "x",
  walls: [{ x: 5, y: -1, w: 5, h: 10 }],
  bricks: [
    {
      content: "1",
      ox: 0,
      oy: 0,
      odragabble: true,
    },
    {
      content: "+",
      ox: 1,
      oy: 0,
      odragabble: true,
    },
    {
      content: "1",
      ox: 2,
      oy: 0,
      odragabble: true,
    },
    {
      content: "+",
      ox: 3,
      oy: 0,
      odragabble: true,
    },
    {
      content: "1",
      ox: 4,
      oy: 0,
      odragabble: true,
    },
    {
      content: "+",
      ox: 0,
      oy: 1,
      odragabble: true,
    },
    {
      content: "1",
      ox: 1,
      oy: 1,
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
