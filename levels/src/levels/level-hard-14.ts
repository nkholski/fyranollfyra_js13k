import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "n1",
  walls: [{ x: 3, y: -1, w: 9, h: 10 }],
  bricks: [
    {
      content: "7",
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
      ox: 3,
      oy: 1,
      odragabble: true,
    },
    {
      content: "-",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "4",
      ox: 4,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 0,
      oy: 0,
      odragabble: true,
    },
    // 2
    // 3
    {
      content: "2",
      ox: 10,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
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
      content: "-",
      ox: 10,
      oy: 4,
      odragabble: true,
    },
    {
      content: "7",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "+",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
    {
      content: "3",
      ox: 13,
      oy: 4,
      odragabble: true,
    },
    {
      content: "+",
      ox: 10,
      oy: 5,
      odragabble: true,
    },
    {
      content: "4",
      ox: 11,
      oy: 5,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
