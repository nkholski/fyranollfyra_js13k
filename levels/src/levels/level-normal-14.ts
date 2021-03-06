import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  color: "#3EE",
  text: "x",
  walls: [],
  bricks: [
    // 1
    {
      content: "1",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 3,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 3,
      oy: 5,
      odragabble: true,
    },
    {
      content: "3",
      ox: 3,
      oy: 6,
      odragabble: true,
    },
    // 2
    {
      content: "1",
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
      content: "1",
      ox: 7,
      oy: 6,
      odragabble: true,
    },
    // 3
    {
      content: "1",
      ox: 10,
      oy: 0,
      odragabble: true,
    },
    {
      content: "3",
      ox: 11,
      oy: 0,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 0,
      odragabble: true,
    },
    {
      content: "1",
      ox: 10,
      oy: 1,
      odragabble: true,
    },
    {
      content: "3",
      ox: 11,
      oy: 1,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 1,
      odragabble: true,
    },
    {
      content: "-",
      ox: 13,
      oy: 1,
      odragabble: true,
    },
    {
      content: "1",
      ox: 14,
      oy: 1,
      odragabble: true,
    },
    {
      content: "-",
      ox: 10,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 11,
      oy: 2,
      odragabble: true,
    },
    {
      content: "3",
      ox: 12,
      oy: 2,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
