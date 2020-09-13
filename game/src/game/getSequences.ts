import { Level, Result404 } from "../interfaces";
declare let level: Level;
declare let currentResult: Result404;

export const getSequence = () => {
  const sequence = [[], [], []];
  level.bricks.forEach((n) => {
    const index = Math.floor(n.gx / 5);
    sequence[index].push(n);
  });

  sequence.forEach((s, i) => {
    const ordered = s.sort((a, b) => {
      if (a.gy == b.gy) {
        return a.gx - b.gx;
      }
      return a.gy - b.gy;
    });
    currentResult[i] = getValueOfSequence(ordered);
  });
};

const getValueOfSequence = (seq) => {
  let valueStr = seq.map((o) => o.content).join("");
  let changed = true;
  let i = 0;
  while (changed) {
    const before = valueStr;
    valueStr = valueStr.replace(/\-\-/g, "+");
    valueStr = valueStr.replace(/\+\-/g, "-");
    valueStr = valueStr.replace(/\-\+/g, "-");
    valueStr = valueStr.replace(/\+\+/g, "+");

    changed = before !== valueStr;
  }
  valueStr = valueStr.replace(/^\+/, "").replace(/[\+\-]$/, "");

  valueStr = valueStr === "" ? "0" : valueStr;

  const parts = valueStr
    .replace(/([^0-9])/g, "!$1!")
    .split("!")
    .map((p) => p.replace(/^0(.)/, "$1"));

  let result = 0;
  let operator = "+";
  parts.forEach((part) => {
    if (part === "") {
      return;
    }
    if (isNaN(part)) {
      operator = part;
      return;
    }

    switch (operator) {
      case "-":
        result -= parseInt(part, 10);
        break;
      default:
        result += parseInt(part, 10);
        break;
    }
  });

  // o.forEach((n) => {
  //   result += n.content;
  // });
  return { number: result, sequence: parts.join("") };
};
