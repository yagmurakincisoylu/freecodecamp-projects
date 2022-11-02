const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function rot13(str) {
  const oldWordArr = str.toUpperCase().trim().split(" ")
  const newWordArr = []
  
  for(let i = 0; i < oldWordArr.length; i++) {
    let oldWord = oldWordArr[i];
    let newWord = "";
  
    for(let j = 0; j < oldWord.length; j++){ 
      if(oldWord[j].match(/\W/)) {
        newWord += oldWord[j];
      } else {
        let code = letters.indexOf(oldWord[j]) + 13;
        
        if(code > letters.length - 1) {
          let newCode = code - (letters.length)
          newWord += letters[newCode]
        } else {
          newWord += letters[code]
        }
      }
    }
    newWordArr.push(newWord);
  }
  return newWordArr.join(" ")
}


console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));