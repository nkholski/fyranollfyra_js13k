import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "n3",
  walls: [{ x: 3, y: 1, w: 9, h: 6 }],
  bricks: [
    {
      content: "5",
      ox: 1,
      oy: 3,
      odragabble: true,
    },
    {
      content: "+",
      ox: 2,
      oy: 3,
      odragabble: false,
    },
    {
      content: "3",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 1,
      oy: 4,
      odragabble: false,
    },
    {
      content: "4",
      ox: 1,
      oy: 5,
      odragabble: true,
    },
    //2
    //3
    {
      content: "3",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "+",
      ox: 12,
      oy: 3,
      odragabble: false,
    },
    {
      content: "1",
      ox: 13,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
