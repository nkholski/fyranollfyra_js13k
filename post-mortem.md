# FyraNollFyra - Post mortem

Participating in a game jam is exhausting and I actually decided not to participate in the js13k game jam this year and felt quite determined. One week late into the competition I got a random idea of a possible puzzle game under the 404 theme, and well, here I am again. The first prototype was done in two or three hours on an evening. I let my co-workers test it the day after and the idea worked quite well. I just had to polish it and create some levels. That “little task” added another intense three weeks of coding late evenings. Despite numerous compromises I’m happy with the result. This post mortem will focus on some technical decisions I think might be interesting.

Before you read this, you would probably want to try it out: [FyraNollFyra](https://js13kgames.com/entries/fyranollfyra)

<img src="https://github.com/nkholski/fyranollfyra_js13k/blob/master/other/fyranollfyra-final.png" alt="Screenshot - Final">Final version :-)

<img src="https://github.com/nkholski/fyranollfyra_js13k/blob/master/other/fyranollfyra-1st-night.png" alt="Screenshot - First day">_Screenshot after first sitting. The numbers are random which means that it might be unsolvable. I think it's great to get a working basic version asap in the development if possible. (The numbers on the board flashes randomly until it stabilizes on 4, 0 or 4. That was a horrible idea)._

## 1. A typescript template to start with

If you ask me, production ready Javascript is a transpilation target not something you directy by hand in 2020 (unless isolated minor stuff). I prefer Typescript but just access to modern ECMA-standards through babel isn’t bad either. Typescript is a typed superset of javascript. It’s still javascript and for a smaller project like this it’s easy to cheat where types feel like overkill. I made interfaces when I felt it was needed, and allowed myself not to when it didn’t feel that important. As an example, typing helped me to keep the level format and its components consistent all over the code base. [I based my game project on this repository.](https://github.com/mtmckenna/js13k-webpack-typescript-starter-party)

## 2. Predictable randomizer

I wanted the levels to look the same each time they are played. I also wanted a hint function. For that I created a “randomizer” based on a sinus-curve that would always produce the same endless series of “random” numbers for a given seed. The levels are actually stored as solutions rather than the challenges the player meets. The bricks are put on “random” positions within their bounds when the level is loaded but will always look the same for the player. Sometimes this goes wrong, a random order could even be an alternative solution. To avoid this all levels have an unique seed that I’ve adjusted until the presentation feels ok. The randomizer also decides the background colors of the levels.

## 3. Responsive design

Making the game responsive was incredibly challenging. Rendering inside a canvas CSS cannot help you and there is no DOM, which means that a button cannot be solved just by adding a “onClick” listener or something. My approach was to listen to any changes of the window size. Whenever a change was made I recalculated margins, grid size in the game field and other stuff that then was used all over the code. Everything is tweaked percentages or sums of these numbers. A button height might be given 75% of the height of a brick and so on.

An approach I’m particularly happy with is the buttons/interactibles. Whenever I draw a button I send the same rectangle coordinates to a function that registers it and what value that interactible represents. On each mouse/touch move event it will loop through the list of interactabes. If a hit is found it’s stored in as the current active interactible, which is executed if a click/touch is registered.

I also wanted the mouse cursor to change shape when hovering bricks or buttons. This is achieved by adding and removing classes to the entire canvas depending on where the cursor is located. If it is over a brick in the game, a “grab” class is added to the canvas class list which renders a grabbing hand.

## 4. The level format

I decided soon that I wanted a high number of manually designed levels. I even made a level select screen for 52 levels before I even had ten (not the smartest thing to do). Internally the levels consist of objects with coordinates and various settings. As json files they quickly add up in size. To solve this I created a nodejs based tool. The tool watches a level folder where I create json-structures as they would be internally in the game. It then reads the json files and converts them into strings.

The ascii-code of the first letter of the string is a random seed (see below). The following letters until a space is ascii-code representation of walls, four chars each representing two x,y coordinates. The walls are actually squares. By setting width or height to zero or cutting boxes off by putting coordinates outside the play field the two chars could be a line, two parallel lines, boxes etc.

After the space I place the bricks. They consist of three bytes each. The first byte holds the number or operator for the brick plus if it is draggable or not. Finally after a space a optional level intro text follows. The levels are then put in the same string with double spaces as a separator (just tab or something would have been smarter).

The end result is 92% less size than the json files, or 82% after zipping. In total the 52 levels is about 1.4kb. I could fit both x and y coordinates within one byte (it’s just 120 combinations) but I have some bad experience of pushing this too far, running into encoding issues and reduced zip efficiency by introducing a higher variation of characters.

After creating the level string it’s immediately decoded again and each decoded level is compared with the original to find any inconsistencies. If all goes well it will finally cut and paste a typescript file and just crawl into the main project and drop it there as it was just a normal ts-file among the others.

_First four levels (the tutorial) separated with double space:_

`2(%.)%2*% Move the numbers to make the boxes say 4, 0 and 4. " 2#%.\$%.%%.(%2)%.*% 400 is big. 004 is perfect. Rearrange to reach 4 0 4. "'!'5 0"%0#%8$%#(%")%4*%-(&&)&-('8,%%-%/.% Use plus and minus to reach 4,0,4. The walls block numbers! #'!'5 $"%-#%-$%$%%9(%0)%0\*%9,%0-%0.%9/% Double negative is positive (--4 equals 4).`

## 5. Preparing the board areas

Bricks cannot move past walls. Instead of creating some kind of collision detection I define numbered areas and stick it to the bricks. A brick can never change area. The areas are defined when a level is loaded with a method resembling to a fill bucket in a paint program. The method will find first square without defined area (a zero) and plant a area number, then recursively allow the number to grow to neighbouring zeros that isn't behind a wall until there is no change. If there is zeros left it will increase the area number, find a zero and repeat the process until the whole board is filled with area numbers above zero.

## 6. Geometrical graphics

Images, even indexed and optimized in every thinkable way, costs a lot of bytes. All graphics in FyraNollFyra is drawn using the html5 canvas api using rectangles and lines. For an example the dialogues, containers, buttons and bricks in the game are all rendered with a generic “shadowbox” function that reduces to less than 500 bytes when zipped, including code to make it scalable and possible to colorize.

I created two patterns on separate canvases to reuse. One is a “jitter” which is filled with black squares of random opacity between 0 and 0.2. This is drawn on the play field backgrounds and the backdrop of the level selection screen. I also use the jitter to create sparkling effects when a number is correct or the board is won. This is achieved by pasting the pattern canvas on the destination canvas with a repeated random offset. I also created a wall pattern (yellow and black stripes) that is applied on the lines on the game screen. A wall surrounding squares without bricks is filled with the pattern.

One neat trick is that the game background accepts a canvas context as an optional argument. This is used by the level selection screen to render screens to a temporary canvas and scale them down as level miniatures.

In the end I actually had room for images. With almost no time left and the bytes to spare I decided to make a simple title text, encode it as a base64 string and paste it into the level selection screen.

## 7. The Game loop

The game boots up with a continous main game loop called each frame. The update function checks for device orientation and based on which state the game is in it will call either the level selection or the game update methods. The state update methods’ main responsibility is to keep the canvas graphics updated and in the case of the game update method it checks the winning conditions.

Both scenes have an init method that prepares static parts of the graphics (i.e. the level miniatures for the level selection page or the board for the game) and keep them on an offscreen canvas. The main canvas is blanked each frame. Then it will paste the background canvas and finally render parts parts that might have changed since last frame on top of that (i.e. a brick being moved in the game scene). When a level is won I just throw all performance out the window and rerender the background for each frame with a random jitter offset.

Input is based on standard html-events (i.e. onmousedown) that will set positions for bricks or call methods of the current screen (such as load the level the mouse is currently hovering).

## 8. Regrets

I know that there are a lot to improve, even within the 13kb limit. One example is that it looks crappy sometimes when bricks are prevented to pass borders. I do regret a little that I put bytes and effort into making the game a PWA that I think few or none even will notice. The PWA icon is huge (1115 bytes) and is even broken for some reason.

I made a conscious decision not to include any sound. I couldn't see that the game would improve from 8-bit-style sounds, rather the opposite. However, when the voting started I realized 1) I will always lose against the other game, possibly even if it only has a few annoying beeps 2) That I could actually have added some GUI sound effects, placing brick effects and a jingle when a number is correct or a level is beaten.

## 9. Conclusion

To sum things up I think that JS13k is an excellent opportunity of exploratory learning. The definite deadline and the limited maximum size help you to avoid going bananas with ideas and add features until you lose control. Writing small code don´t encourage good practises on scalability or readability, but it encourages you to try new things and to get to know javascript a bit better. You can try things you would never do professionally, but I’m certain that the experiences of this benefit the ability to creativity development.
