import { Level } from "./interfaces";
export default {
  color: "#AC7B02",
  seed: 0,
  text: "Prepare for a challenge!",

  walls: [{ x: 3, y: -1, w: 9, h: 14 }],
  bricks: [
    {
      content: "4",
      ox: 2,
      oy: 3,
      odragabble: false,
    },
    {
      content: "+",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "9",
      ox: 4,
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
      content: "8",
      ox: 4,
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
      content: "1",
      ox: 4,
      oy: 5,
      odragabble: true,
    },
    {
      content: "0",
      ox: 7,
      oy: 3,
      odragabble: false,
    },
    {
      content: "1",
      ox: 5,
      oy: 4,
      odragabble: true,
    },
    {
      content: "2",
      ox: 6,
      oy: 4,
      odragabble: true,
    },
    {
      content: "3",
      ox: 7,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 5,
      oy: 5,
      odragabble: false,
    },
    {
      content: "4",
      ox: 6,
      oy: 5,
      odragabble: true,
    },
    {
      content: "5",
      ox: 7,
      oy: 5,
      odragabble: true,
    },
    {
      content: "6",
      ox: 8,
      oy: 5,
      odragabble: true,
    },
    {
      content: "+",
      ox: 5,
      oy: 6,
      odragabble: false,
    },
    {
      content: "3",
      ox: 6,
      oy: 6,
      odragabble: true,
    },
    {
      content: "3",
      ox: 7,
      oy: 6,
      odragabble: true,
    },
    {
      content: "3",
      ox: 8,
      oy: 6,
      odragabble: true,
    },
    {
      content: "4",
      ox: 12,
      oy: 3,
      odragabble: false,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as Level;
