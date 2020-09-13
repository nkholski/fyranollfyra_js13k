import { LevelStub } from "./interfaces";
export default {
  seed: 4,
  text: "X",
  walls: [
    { x: 0, y: 3, w: 7, h: 4 },
    { x: 0, y: 0, w: 4, h: 1 },
    { x: 0, y: 7, w: 5, h: 1 },
  ],
  bricks: [
    {
      content: "9",
      ox: 4,
      oy: 0,
      odragabble: false,
    },
    {
      content: "-",
      ox: 1,
      oy: 4,
      odragabble: true,
    },
    {
      content: "0",
      ox: 3,
      oy: 7,
      odragabble: false,
    },
    {
      content: "5",
      ox: 3,
      oy: 7,
      odragabble: true,
    },

    //2
    {
      content: "1",
      ox: 5,
      oy: 0,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 0,
      odragabble: true,
    },
    {
      content: "1",
      ox: 7,
      oy: 0,
      odragabble: true,
    },

    // 3
    {
      content: "1",
      ox: 11,
      oy: 3,
      odragabble: false,
    },
    {
      content: "6",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 4,
      odragabble: false,
    },
    {
      content: "8",
      ox: 13,
      oy: 4,
      odragabble: false,
    },
    {
      content: "-",
      ox: 12,
      oy: 5,
      odragabble: false,
    },
    {
      content: "4",
      ox: 13,
      oy: 5,
      odragabble: false,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
