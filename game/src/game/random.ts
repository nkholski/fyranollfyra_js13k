export const makeRandom = (seed: number = 1) => {
  seed *= 99; // I'll pass level number so the second "random" r below for level 1 would be === first random r of level 2
  return (max: number, min: number = 0) => {
    const x = Math.sin(seed++) * 9999;
    return Math.round(min + (x - Math.floor(x)) * (max - min));
  };
};

export const seededRandom = (seed: number, max: number) => {
  seed *= 99;
  const x = Math.sin(seed++) * 10000;
  return (x - Math.floor(x)) * max;
};
