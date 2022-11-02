const numerals = {
  "1000": "M",
  "900" : "CM",
  "500" : "D",
  "400" : "CD",
  "100" : "C",
  "90"  : "XC",
  "50"  : "L",
  "40"  : "XL",
  "10"  : "X",
  "9"   : "IX",
  "8"   :	"VIII",
  "7"   :	"VII",
  "6"   :	"VI",
  "5"   : "V",
  "4"   : "IV",
  "3"   :	"III",
  "2"   :	"II",
  "1"   : "I"
}

function convertToRoman(number) {
  if(numerals.hasOwnProperty(number)) {
    return numerals[number];

  } else if(number < 40) {
    return numerals[10] + convertToRoman(number-10);

  } else if(number < 50) {
    return numerals[40] + convertToRoman(number-40);

  } else if(number < 90) {
    return numerals[50] + convertToRoman(number-50);

  } else if(number < 100) {
    return numerals[90] + convertToRoman(number-90);
    
  } else if(number < 400){
    return numerals[100] + convertToRoman(number-100);

  } else if(number < 500){
    return numerals[400] + convertToRoman(number-400);
    
  } else if(number < 900){
    return numerals[500] + convertToRoman(number-500);
    
  } else if(number < 1000){
    return numerals[900] + convertToRoman(number-900);
    
  } else {
    return numerals[1000] + convertToRoman(number-1000);
  }
}
