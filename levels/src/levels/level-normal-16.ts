import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  color: "#3EE",
  text: "Final level. Lets do all numbers",
  walls: [{ x: 5, y: -1, w: 5, h: 10 }],
  bricks: [
    {
      content: "4",
      ox: 2,
      oy: 3,
      odragabble: false,
    },
    // 2
    {
      content: "1",
      ox: 6,
      oy: 0,
      odragabble: true,
    },
    {
      content: "0",
      ox: 7,
      oy: 0,
      odragabble: true,
    },
    {
      content: "+",
      ox: 6,
      oy: 1,
      odragabble: true,
    },
    {
      content: "2",
      ox: 7,
      oy: 1,
      odragabble: true,
    },
    {
      content: "+",
      ox: 8,
      oy: 1,
      odragabble: true,
    },
    {
      content: "3",
      ox: 9,
      oy: 1,
      odragabble: true,
    },
    {
      content: "+",
      ox: 6,
      oy: 2,
      odragabble: true,
    },
    {
      content: "4",
      ox: 7,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 3,
      odragabble: true,
    },
    {
      content: "5",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 4,
      odragabble: true,
    },
    {
      content: "6",
      ox: 7,
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
      content: "7",
      ox: 7,
      oy: 5,
      odragabble: true,
    },
    {
      content: "+",
      ox: 6,
      oy: 6,
      odragabble: true,
    },
    {
      content: "8",
      ox: 7,
      oy: 6,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 7,
      odragabble: true,
    },
    {
      content: "9",
      ox: 7,
      oy: 7,
      odragabble: true,
    },
    // 3
    {
      content: "4",
      ox: 12,
      oy: 3,
      odragabble: false,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
