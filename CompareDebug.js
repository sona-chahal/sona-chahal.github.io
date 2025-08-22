function findLongestMatch(string1, string2) {
  const firstLine1 = string1.split('\n')[0];
  const startIndex = string2.indexOf(firstLine1);

  if (startIndex === -1) {
    return {
      matchedPart: '',
      unmatchedChar1: string1[0] || '',
      unmatchedChar2: string2[0] || ''
    };
  }

  let matchedPart = '';
  let i = 0;
  while (startIndex + i < string2.length && i < string1.length) {
    if (string1[i] === string2[startIndex + i]) {
      matchedPart += string1[i];
      i++;
    } else {
      break;
    }
  }

  return {
    matchedPart: matchedPart,
    unmatchedChar1: string1[i] || '',
    unmatchedChar2: string2[startIndex + i] || ''
  };
}

// Example Usage:
const string1 = "This is a sample string\nThis is the second line.";
const string2 = "Here is some text before.\nThis is a sample string that continues here.";
const result = findLongestMatch(string1, string2);

console.log("Matched Part:", result.matchedPart);
console.log("First Unmatched Character in String 1:", result.unmatchedChar1);
console.log("First Unmatched Character in String 2:", result.unmatchedChar2);
