import { LevelStub } from "./interfaces";
export default {
  seed: 0,
  text: "x",
  color: "#019601",
  walls: [{ x: 5, y: -1, w: 5, h: 19 }],
  bricks: [
    // 1
    {
      content: "7",
      ox: 2,
      oy: 0,
      odragabble: true,
    },
    {
      content: "4",
      ox: 2,
      oy: 1,
      odragabble: false,
    },
    {
      content: "-",
      ox: 2,
      oy: 2,
      odragabble: true,
    },
    {
      content: "6",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "9",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 2,
      oy: 5,
      odragabble: true,
    },
    {
      content: "1",
      ox: 2,
      oy: 6,
      odragabble: true,
    },
    // 2
    {
      content: "1",
      ox: 6,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 7,
      oy: 3,
      odragabble: false,
    },
    {
      content: "-",
      ox: 8,
      oy: 3,
      odragabble: true,
    },
    {
      content: "6",
      ox: 6,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 5,
      odragabble: true,
    },
    {
      content: "4",
      ox: 7,
      oy: 5,
      odragabble: true,
    },
    {
      content: "+",
      ox: 7,
      oy: 7,
      odragabble: true,
    },
    // 3
    {
      content: "0",
      ox: 12,
      oy: 0,
      odragabble: true,
    },
    {
      content: "9",
      ox: 10,
      oy: 3,
      odragabble: true,
    },
    {
      content: "1",
      ox: 11,
      oy: 3,
      odragabble: false,
    },
    {
      content: "-",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "8",
      ox: 13,
      oy: 3,
      odragabble: true,
    },
    {
      content: "7",
      ox: 14,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
