import { LevelStub } from "./interfaces";
export default {
  seed: 0,
  color: "#3EE",
  text: "Try + to add numbers",
  walls: [],
  bricks: [
    {
      content: "3",
      ox: 0,
      oy: 1,
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
      ox: 4,
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
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
