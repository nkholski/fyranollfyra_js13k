import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "k14",
  walls: [
    { x: -1, y: 4, w: 10, h: 6 },
    { x: 9, y: -1, w: 10, h: 10 },
  ],
  bricks: [
    {
      content: "7",
      ox: 2,
      oy: 2,
      odragabble: true,
    },
    {
      content: "+",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "1",
      ox: 2,
      oy: 5,
      odragabble: true,
    },
    {
      content: "-",
      ox: 2,
      oy: 6,
      odragabble: true,
    },
    {
      content: "4",
      ox: 2,
      oy: 7,
      odragabble: true,
    },
    //2
    {
      content: "6",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 4,
      odragabble: true,
    },
    {
      content: "3",
      ox: 7,
      oy: 5,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 6,
      odragabble: true,
    },
    {
      content: "3",
      ox: 7,
      oy: 7,
      odragabble: true,
    },

    //3
    {
      content: "1",
      ox: 12,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 3,
      odragabble: false,
    },
    {
      content: "-",
      ox: 12,
      oy: 4,
      odragabble: false,
    },
    {
      content: "3",
      ox: 12,
      oy: 5,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
