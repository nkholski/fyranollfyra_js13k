import { Level } from "./interfaces";
export default {
  seed: 1,
  text: "Double negative is positive (--4 equals 4).",
  color: "#019601",
  walls: [{ x: 5, y: -1, w: 5, h: 19 }],
  bricks: [
    {
      content: "2",
      ox: 0,
      oy: 3,
      odragabble: false,
    },
    {
      content: "-",
      ox: 1,
      oy: 3,
      odragabble: false,
    },
    {
      content: "-",
      ox: 2,
      oy: 3,
      odragabble: false,
    },
    {
      content: "2",
      ox: 3,
      oy: 3,
      odragabble: false,
    },
    // 2
    {
      content: "-",
      ox: 6,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 8,
      oy: 3,
      odragabble: true,
    },
    // 3
    {
      content: "-",
      ox: 10,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 13,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as Level;
