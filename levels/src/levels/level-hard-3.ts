import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "k10",
  walls: [{ x: -1, y: 2, w: 16, h: 4 }],
  bricks: [
    {
      content: "5",
      ox: 1,
      oy: 1,
      odragabble: true,
    },
    {
      content: "-",
      ox: 1,
      oy: 3,
      odragabble: true,
    },
    {
      content: "1",
      ox: 1,
      oy: 7,
      odragabble: true,
    },
    //2
    {
      content: "3",
      ox: 6,
      oy: 1,
      odragabble: true,
    },
    {
      content: "6",
      ox: 8,
      oy: 1,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "3",
      ox: 7,
      oy: 4,
      odragabble: true,
    },
    {
      content: "6",
      ox: 7,
      oy: 7,
      odragabble: true,
    },
    //3
    {
      content: "3",
      ox: 13,
      oy: 0,
      odragabble: true,
    },
    {
      content: "+",
      ox: 13,
      oy: 1,
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
      ox: 13,
      oy: 4,
      odragabble: true,
    },
    {
      content: "2",
      ox: 13,
      oy: 6,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
