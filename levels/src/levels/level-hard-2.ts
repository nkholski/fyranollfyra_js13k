import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "x",
  walls: [{ x: 3, y: 1, w: 9, h: 6 }],
  bricks: [
    {
      content: "8",
      ox: 0,
      oy: 3,
      odragabble: true,
    },
    {
      content: "3",
      ox: 1,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 2,
      oy: 3,
      odragabble:true,
    },
    {
      content: "7",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "9",
      ox: 4,
      oy: 3,
      odragabble: true,
    },
    //2
    //3
    {
      content: "1",
      ox: 10,
      oy: 3,
      odragabble: true,
    },
    {
      content: "6",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 3,
      odragabble:true,
    },
    {
      content: "1",
      ox: 13,
      oy: 3,
      odragabble:true,
    },
    {
      content: "2",
      ox: 14,
      oy: 3,
      odragabble:true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
