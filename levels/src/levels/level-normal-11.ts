import { LevelStub } from "./interfaces";
export default {
  seed: 4,
  text: "x",
  walls: [
    { x: 8, y: 3, w: 8, h: 4 },
    { x: 10, y: 7, w: 8, h: 1 },
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
      oy: 2,
      odragabble: true,
    },
    {
      content: "6",
      ox: 12,
      oy: 2,
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
