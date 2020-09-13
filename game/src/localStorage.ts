import { addTrophy } from "./game/trophy";
import { initLevelSelect } from "./levelSelect/levelSelect";
import { Level } from "./interfaces";

declare let levels: Level[];

export const getProgress = (i) => {
  const stored = localStorage.getItem("get404");
  if (stored) {
    return JSON.parse(stored)[i];
  } else {
    return i == 0;
  }
};

export const wonLevel = (level: Level) => {
  const nextLevel = (levels[levels.length - 1] === level) ? null : levels[levels.indexOf(level) + 1];
  const nextSection = nextLevel ? nextLevel.section : 4;
  if(level.section<nextSection) {
    switch(level.section) {
      case 0: 
        addTrophy("🏫", "Out of school", "You finished the tutorial!", true);
      break;
      case 1: 
        addTrophy("👶", "No kidding", "All kids levels done!", true);
      break;
      case 2:
        addTrophy("⭐", "16 levels of joy", "All medium hard levels done", true);
      break;
      case 3:
        addTrophy("💪", "16 levels of pain", "All hard levels done", true);
      break;
    }
  }

  if(!nextLevel){
    return;
  }

  if (nextLevel.section > 0) {
    levels[20].unlocked = true;
    levels[36].unlocked = true;
  }

  nextLevel.unlocked = true;

  const save = levels.map((l) => l.unlocked);
  if(!save.some(s => !s)){
    addTrophy("🌟", "Completionist", "You've beaten all levels", true);
  }

  localStorage.setItem("get404", JSON.stringify(save));

  return nextLevel;
};
