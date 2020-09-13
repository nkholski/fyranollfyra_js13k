import { LevelStub } from "./interfaces";
export default {
  seed: 7,
  text: "k12",
  walls: [],
  bricks: [
    {
      content: "2",
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
      content: "2",
      ox: 3,
      oy: 3,
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
      content: "-",
      ox: 7,
      oy: 3,
      odragabble: false,
    },
    {
      content: "1",
      ox: 8,
      oy: 3,
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
      content: "0",
      ox: 12,
      oy: 3,
      odragabble: false,
    },
    {
      content: "-",
      ox: 13,
      oy: 3,
      odragabble: false,
    },
    {
      content: "6",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
