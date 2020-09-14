
import { Brick, Wall } from "../interfaces";
import { makeRandom } from "./../game/random";
import { getProgress } from "./../localStorage";

const random = makeRandom();
const lvls = `" 2(%.)%2*% Move the numbers to make the boxes say 4, 0 and 4.  " 2#%.$%.%%.(%2)%.*% 400 is big. 004 is perfect. Rearrange to reach 4 0 4.  "'!'5 0"%0#%8$%#(%")%4*%-(&&)&-('8,%%-%/.% Use plus and minus to reach 4,0,4. The walls block numbers!  #'!'5 $"%-#%-$%$%%9(%0)%0*%9,%0-%0.%9/% Double negative is positive (--4 equals 4).  % 2%%.)%2.% Make it to 4 0 4  " 1"#8$#/&#0-%8.%0/% Try + to add numbers  %$!#,%!$, 1$"8$#/$$0-%8.%0/% x  %%!+, 1$"8$#/&$0-%8.%0/% x  &'!', /""8#"/$"8%"/&"8"#/##0-%8.%0/%8-&..& x  %%#+( %#%,$%/%%1-%,.%#/% x  %!&2( %$$,$%/$&/.%,.&%.' x  &!&2( $$$,$%0$&$)$-)%0)&0.%,.&$.' x  & 0$$,$%0$&5)$-)%5)&0.$,.%0.& x  %%#+( 1#%8$%/%%1-%8.%//% x  ''!1, 2"%8#%/$%9"&/#&0-%8.%0/%8-&..& x  ) 0#%,$%0%%/(%-)%/*%#-%".%-/%4.& x  ''!', ##%"$%"%%-#&7$&(%&7)$9)%7)&0-%8.%1/%9-&/.& x  %!&,(+!,, 1$%8$&/$'4)%9)&4)'/.%,.&%.' x  %%!+, 4$"9$#0&$1(%9)%1*%7-%9.%3/% x  &"%)&""&#")'# +&"9#&"%)3&)/'"9("/)"#-%4.%-.&*/&-.'&/' x  %%!+, 1$"8$#/&$.#"0-%8.%0/%9.' x  %"!%'$!%')!,, .$".$#/$$8$'1$(.)%0-%8.%0/% x  %%#+( 3#%,$%1%%-#&2#'1-%,.%//% x  ''!), /#%.$%.%%9#&7$&4%&7)$9)%7)&0-%8.%1/%9-&/.& x  $!&2()!#, 0$$8$%0$&*)$-)%4*&-*'0*(0.%,.&$.' x  %%!+, 5#$1$$9"%4#%7$%/)%.*%9(&/)'.*'0/%.0%9/&..'//'40' x  &!&2( 0$$9$%9$&0$'0)$9)%0)&9)'0.%9-&9.&0.' x  % &%%")%/-%&.%9-&/.&./& x  %!&,(+!,, 5$$8$%/$'9$(2$)4)%9)&1)'9)(1))/.$-.%-.&1.' x  *"%)&""%#")'# +%"+&"9#&6$&6%&9&&5%)"$)/'"9("/)&/,&.-&-.&4/& x  &*%*&,)*# +&"9#&3%)/'"9("/)"/-$4.$-.&*/&-.'&/' x  %!$2& 3##9#%/#)1(#4*#9)%1)&4))1/"8/#1/%9/&0/( x  %)!,, .$".$#/$$8$'1$(.)%2-%0.%9,&2-&1.&8,'3.' x  % /%%9%&9%'1%(/)%9)&/)(/,"1-"9."/,#1-#9.#9/#/0#9,$9-$1.$ x  "'!'5 5$"&$#9$$4$%7$&9$'/$(/(%")%9*%4(&9('2)'8)).."7,%#-%9.%6/%50% x  %'!', &$%/(".)"8(#0)#8*#1+#8($2)$9(%3)%9(&4)&9('5)'8((6)(9()7))&.% Final level. Lets do all numbers  "%!+0 &$%8%%7&%9%&6&&9%'/&'")%/'&0(&1)&-''2('3)'4*','(1((1)(1*(&.% Prepare for a challenge!  %%#+( 6"%1#%9$%5%%7&%/,%4-%9.%//%00% x  %!$2& 3##9#%/#)1(#4*#9)%1)&4))1/"8/#1/%9/&0/( x  %'!1, 3"%9#%1$%8#&5"'9#'3$'/(".)"8(#0)#8*#1+#8($2)$9(%3)%9(&4)&9('5)'8((6)(9()7))2.% x  ' /#%.$%.%%9#&7$&4%&7)$9)%7)&0-%8.%1/%9-&/.& x  %%#+( 7%"7&"9#&6$&6%&9&&5%).$)/'"9("/)&/,&.-&9.&4/& x  &!&2( 0#$0$%0%%9$&0#'/$'6%'0)#0)$9)%0)&0)'9)(1.%9-&9.&/.' x  "$!-5(!%5 5""2$#9$$4$%7$&9$'/$(/(%")%9*%4'&9('2+'8)).."7,%/-%9.%6.&5/& x  %)!,, .$"1$#/$$8$'1$(9#)1$).%)0(%3)%2*%9)&0('3)'.*'9))2*)1-%0.%9,&1-&1.&8,'3.' x  %%!+, 5#$0$$9"%4#%7$%8"&/#&1)%0*%9(&1)'0*'//%50%9/&..'//'10' x  & 7$$0%$9$%6$&6%&0)$9)%0)&7-%7.%7/%9.&7-'7.'6/'8.(1/( x  %!$2& 3##3$#5%#9#%9$%/#&/$&9#'3#(4$(2%(0(#4*#9)%0)&4))1/"8/#1/%9/&0/( x  %%!+, 1$"8$#/&$.#"5,%5-%8.%0/%9.'5.(3/( x  %%!+, 5$"8$#/%#9%%2&%.""0,%9-%9.%0/%9,&5-&8.&1/&8,'2-' x  %%#+( 1#%7$%/%%9$&1#'6$'5%'3,%1-%5.%0/%90%3,&1-&4.&6/& x  &!&2( 0$$9$%9$&0$'0)$9)%0)&9)'0*'0+'8'(0')0()0.%9-&9.&0.' x`.split('  ');

const levelSections = [4, 16, 16, 16]; // Remove export, use level object instead
const colors = ["3EE", "090", "F58FD5", "9A54DE", "525", "a70"];
// getNumberFromCharCode
const g = (s: string, i: number) => s.charCodeAt(i) - 34;
let colorIndex = -1;
let sI = 0; // Section index
let numbersBeforeSection = -1;

export const levelDecoder = () =>
  lvls.map((lvl: string, lI: number) => {
    const seed = g(lvl, 0);
    const [w, b, ...t] = lvl.substring(1).split(" ");
    const walls: Wall[] = [];
    if (w != "") {
      for (let i = 0; i < w.length; i += 4) {
        walls.push({
          x: g(w, i),
          y: g(w, i + 1),
          w: g(w, i + 2),
          h: g(w, i + 3),
        });
      }
    }

    const bricks: Brick[] = [];

    for (let i = 0; i < b.length; i += 3) {
      const code = g(b, i);
      const odragabble = code > 11;
      //@ts-ignore
      const c = code - odragabble * 12;

      bricks.push({
        odragabble,
        content: c == 11 ? "-" : c == 10 ? "+" : "" + c,
        ox: g(b, i + 1),
        oy: g(b, i + 2),
      });
    }

    let lastColor = colorIndex;
    while (lastColor === colorIndex) {
      colorIndex = Math.floor(random(colors.length - 1));
    }

    if (lI > levelSections[sI] + numbersBeforeSection) {
      numbersBeforeSection += levelSections[sI++];
    }

    return {
      seed,
      color: "#" + colors[colorIndex],
      walls,
      bricks,
      section: sI,
      unlocked: getProgress(lI),
      text: t.join(" "),
    };
  });
