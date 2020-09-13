import { Level } from "./interfaces";
export default {
  seed: 8,
  color: "#5B1B57",
  text: "x",
  walls: [
    { x: 0, y: 3, w: 7, h: 4 },
    { x: 0, y: 0, w: 3, h: 1 },
    { x: 0, y: 7, w: 5, h: 1 },
  ],
  bricks: [
    {
      content: "9",
      ox: 3,
      oy: 0,
      odragabble: false,
    },
    {
      content: "9",
      ox: 4,
      oy: 0,
      odragabble: false,
    },
    {
      content: "-",
      ox: 1,
      oy: 4,
      odragabble: true,
    },
    {
      content: "8",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    {
      content: "8",
      ox: 3,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 4,
      oy: 4,
      odragabble: true,
    },
    {
      content: "7",
      ox: 3,
      oy: 7,
      odragabble: true,
    },
    {
      content: "0",
      ox: 2,
      oy: 7,
      odragabble: false,
    },
    {
      content: "1",
      ox: 5,
      oy: 0,
      odragabble: true,
    },
    {
      content: "-",
      ox: 6,
      oy: 0,
      odragabble: true,
    },
    {
      content: "1",
      ox: 7,
      oy: 4,
      odragabble: true,
    },
    {
      content: "1",
      ox: 10,
      oy: 4,
      odragabble: true,
    },
    {
      content: "0",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 4,
      odragabble: false,
    },
    {
      content: "6",
      ox: 13,
      oy: 4,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as Level;
