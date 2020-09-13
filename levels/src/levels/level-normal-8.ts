import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "n8",
  walls: [],
  bricks: [
    {
      content: "4",
      ox: 3,
      oy: 3,
      odragabble: false,
    },
    //2
    {
      content: "0",
      ox: 7,
      oy: 3,
      odragabble: false,
    },
    //3
    {
      content: "1",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "4",
      ox: 12,
      oy: 3,
      odragabble: false,
    },
    {
      content: "-",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "1",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
    {
      content: "0",
      ox: 13,
      oy: 4,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
