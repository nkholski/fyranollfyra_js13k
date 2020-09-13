import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  color: "#3EE",
  text: "Make it to 4 0 4",
  walls: [],
  bricks: [
    {
      content: "4",
      ox: 3,
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
      ox: 12,
      oy: 3,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
