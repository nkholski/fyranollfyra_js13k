import { Level } from "./interfaces";
export default {
  seed: 0,
  text: "400 is big. 004 is perfect. Rearrange to reach 4 0 4.",
  color: "#019601",
  walls: [],
  bricks: [
    {
      content: "4",
      ox: 1,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 6,
      oy: 3,
      odragabble: true,
    },
    {
      content: "4",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 8,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as Level;
