function palindrome(str) {
  const word = str.toLowerCase().trim().split(/\W+|\s+|_|(?=[A-Z])/).join("").split("").join("");
  const reversedWord = str.toLowerCase().trim().split(/\W+|\s+|_|(?=[A-Z])/).join("").split("").reverse().join("");
  return word === reversedWord ? true : false;
}

console.log(palindrome("    E  YE   "));

// palindrome("eye")
// palindrome("_eye")
// palindrome("race car")
// palindrome("not a palindrome")
// palindrome("A man, a plan, a canal. Panama")
// palindrome("never odd or even")
// palindrome("nope")
// palindrome("almostomla")
// palindrome("My age is 0, 0 si ega ym.")
// palindrome("1 eye for of 1 eye.").
// palindrome("0_0 (: /-\ :) 0-0")
// palindrome("five|\_/|four")