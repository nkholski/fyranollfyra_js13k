export interface trd {
  [index: number]: {
    number: number;
    sequence: string;
  };
}

export interface Result404
  extends Array<{
    number: number;
    sequence: string;
  }> {}

export interface Brick {
  content: string;
  ox: number; // Original grid x
  oy: number; // Original grid y
  gx?: number; // Current grid x
  gy?: number; // Current grid y
  odragabble: boolean;
  dragabble?: boolean;
  x?: number; // Pixel x when dragged
  y?: number; // Pixel y
  region?: number;
}

export interface Wall {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Level {
  color: string;
  text: string;
  seed: number;
  walls: Wall[];
  bricks: Brick[];
  unlocked?: boolean;
  section?: number;
}

export enum GameStates {
  title,
  menu,
  game,
}
