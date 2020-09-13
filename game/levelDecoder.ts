const colors = ["3EE", "090", "090", "090", "525", "a70"];
// getNumberFromCharCode
const g = (s: string, i: number) => s.charCodeAt(i) - 34;
const lastColor = -1;

export const levelDecoder = () => {const lvl=`" 2(%.)%2*% Move the number to make the gray boxes say 4,0 and 4.  " 2#%.$%.%%.(%2)%.*% The containers are read line by line from top left to bottom right.  "'!'5 /#%/#&0#&8#%8#%1,%0)%0)%9*%8,%/.$ Use plus and minus to reach 4,0,4. A brick cannot walls.  "'!'5 /#%/#&0#&8#%8#%1,%0)%0)%9*%8,%/.$ Double negative is positive (--4 equals 4). Gray bricks are immovable.  *"%)&""%#")'# +%"+&"9#&6levelDecoder = (lvl: string) => {6%&9&&5%)"$)/'"9("/)"/,".-"-.&4/" Good work. Some numbers are bolted.  "%!+0 &$%8%%7&%9%&6&&9%'/&'")%/'&0(&1)&-''2('3)'4*','(1((1)(1*(&.% Final stage!!!`;
  const seed = g(lvl, 0);
  const [w, b, ...t] = lvl.substring(1).split(" ");
  const walls = [];
  if (w != "") {
    // console.log("wall:" + w);
    for (let i = 0; i < w.length; i += 4) {
      walls.push({
        x: g(w, i),
        y: g(w, i + 1),
        w: g(w, i + 2),
        h: g(w, i + 3),
      });
    }
  }

  const bricks = [];
  for (let i = 0; i < b.length; i += 3) {
    const code = g(b, i);
    const dragabble = code > 11;
    //@ts-ignore
    const c = code - dragabble * 12;
    bricks.push({
      dragabble,
      content: c == 11 ? "-" : c == 10 ? "+" : "" + c,
      x: g(b, i + 1),
      y: g(b, i + 2),
    });
  }

  let index = lastColor;
  while (index === lastColor) {
    index = Math.floor(colors.length * Math.random());
  }

  return {
    seed,
    color: "#" + colors[index],
    walls,
    bricks,
    text: t.join(" "),
  };
};
