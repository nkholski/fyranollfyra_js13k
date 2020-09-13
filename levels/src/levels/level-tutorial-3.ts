import { LevelStub } from "./interfaces";
export default {
  seed: 0,
  text: "Use plus and minus to reach 4,0,4. The walls block numbers!",
  color: "#019601",
  walls: [{ x: 5, y: -1, w: 5, h: 19 }],
  bricks: [
    // 1
    {
      content: "2",
      ox: 0,
      oy: 3,
      odragabble: true,
    },
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
      odragabble: true,
    },
    // 2
    {
      content: "1",
      ox: 6,
      oy: 3,
      odragabble: false,
    },
    {
      content: "0",
      ox: 7,
      oy: 3,
      odragabble: false,
    },
    {
      content: "6",
      ox: 8,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 4,
      odragabble: false,
    },
    {
      content: "4",
      ox: 7,
      oy: 4,
      odragabble: false,
    },
    {
      content: "-",
      ox: 6,
      oy: 5,
      odragabble: false,
    },
    // 3
    {
      content: "+",
      ox: 10,
      oy: 3,
      odragabble: true,
    },
    {
      content: "3",
      ox: 11,
      oy: 3,
      odragabble: false,
    },
    {
      content: "1",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
