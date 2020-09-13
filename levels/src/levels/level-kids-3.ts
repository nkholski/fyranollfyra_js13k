import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "x",
  walls: [
    { x: 2, y: -1, w: 1, h: 10 },
    { x: 3, y: -1, w: 2, h: 10 },
  ],
  bricks: [
    {
      content: "3",
      ox: 2,
      oy: 0,
      odragabble: true,
    },
    {
      content: "+",
      ox: 2,
      oy: 1,
      odragabble: true,
    },
    {
      content: "1",
      ox: 2,
      oy: 2,
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
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
