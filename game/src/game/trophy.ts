declare let dialogText: string;

export const addTrophy = (icon, name, text, delay = false) => {
  //🏫👶⭐💪🌟🥛
  const key = `OS13kTrophy,${icon},Get404,${name}`;
  if(localStorage[key]){
    return;
  }
  
  if(dialogText.length>0 || delay){
    setTimeout(()=>addTrophy(icon,name,text),1e3);
    return;
  }

  localStorage[key] = text;
  dialogText = `${icon} New trophy! ${name}: ${text}`;
};
