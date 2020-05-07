//longest common substring

function longest_common_substring(str1, str2) {

  let longestWord = ""
  // O(n)
  for (i = 0; i < str1.length; i++) {
    let currentWord = ""
    let subWord = ""
    let k = i
    // O(n^2)
    for (j = 0; j < str2.length; j++) {
      currentWord += str1[k]
      subWord += str2[j]

      if (subWord !== currentWord) break

      if (currentWord.length > longestWord.length) {
        longestWord = currentWord
      }
      k++

    }

  }
  return longestWord
}


// str1 = "somethingcat";
// str2 = "thinganothercat";

// console.log(longestCommonSubstring(str1,str2));

// function subStrings(str) {
//   subs = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 1; j <= str.length; j++) {
//       let sub = str.slice(i, i + j);
//       subs.push(sub);
//     }
//   }
//   return subs;
// }

// console.log(subStrings("cat"));
// console.log(subStrings("somethingcat"));

function iterFibs(num) {
  //assuming num is greater than zero
  if (num === 1) return 1;
  if (num === 2) return 1;

  //variable to store fib nums
  fibNums = [1, 1];

  //keep filling fibNums until fibNums length is less num
  while (fibNums.length < num) {
    nextNum = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
    fibNums.push(nextNum);
  };

  return fibNums;

};

console.log(iterFibs(4));
console.log(iterFibs(5));
console.log(iterFibs(6));


function recurFibs(num) {
  // assuming num greater than 0
  //base case 
  if (num === 1) return [1];
  if(num === 2) return [1, 1];

  fibNum = recurFibs(num - 1);
  fibNum.push(fibNum[fibNum.length - 1] + fibNum[fibNum.length - 2]);

  return fibNum;

}

console.log(recurFibs(4));
console.log(recurFibs(5));
console.log(recurFibs(6));

function validIp(string) {
  let valid = true
  let parts = string.split(".")
  if (parts.length !== 4) valid = false

  parts.forEach(part => {
    let num = Number(part)
    if (num < 0 || num > 255) valid = false
  })

  return valid
}

// caesarCipher

function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      encoded += ' ';
      continue;
    }

    const offset = (alphabet.indexOf(str[i]) + shift) % 26;
    encoded += alphabet[offset];
  }

  return encoded;
}
