import { Level } from "./interfaces";
export default {
  seed: 0,
  color: "#3EE",
  text: "Move the numbers to make the boxes say 4, 0 and 4.",
  walls: [],
  bricks: [
    {
      content: "4",
      ox: 6,
      oy: 3,
      odragabble: true,
    },
    {
      content: "0",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "4",
      ox: 8,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as Level;
