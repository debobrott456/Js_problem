
function reverseString(str) {
  return str.split('').reverse().join('');
}

function countVowels(str) {
  if (typeof str !== 'string') {
    return 0;
  }
  let count = 0;
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }

  return count;
}


function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  var max = arr[0]; 
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return [];

  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  }

  return result;
}
function sumArray(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; 
  }
  return sum;
}

function findEvenNumbers(arr) {
  if (!Array.isArray(arr)) return [];

  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { 
      result.push(arr[i]);
    }
  }

  return result;
}
function capitalizeWords(str) {
  if (typeof str !== 'string') {
    return '';
  }

  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > 0) {
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  return words.join(' ');
}

function factorial(n) {
  if (typeof n !== 'number' || n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
function pingPong() {
  let result = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) result.push("PingPong");
    else if (i % 3 === 0) result.push("Ping");
    else if (i % 5 === 0) result.push("Pong");
    else result.push(i);
  }
  return result;
}


