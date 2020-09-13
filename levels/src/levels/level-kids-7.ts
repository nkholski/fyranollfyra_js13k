import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "x",
  walls: [{ x: -1, y: 4, w: 16, h: 6 }],
  bricks: [
    {
      content: "3",
      ox: 2,
      oy: 2,
      odragabble: false,
    },
    {
      content: "+",
      ox: 2,
      oy: 3,
      odragabble: false,
    },
    {
      content: "1",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    //2
    //3
    {
      content: "1",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "+",
      ox: 12,
      oy: 4,
      odragabble: false,
    },
    {
      content: "3",
      ox: 12,
      oy: 5,
      odragabble: false,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
