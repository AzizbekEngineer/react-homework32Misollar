function appleBoxes(k) {
  let juft = 0;
  for (let i = 1; i < k + 1; i += 2) {
    juft += i ** 2;
    console.log(i);
  }
  let toq = 0;
  for (let i = 0; i < k + 1; i += 2) {
    toq += i ** 2;
    console.log(i);
  }
  return toq - juft;
}

// console.log(appleBoxes(15));

function sentence(arrayOfObjects) {
  const sortedList = arrayOfObjects.sort(
    (a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0])
  );

  // Qiymatlarni birlashtirish
  const result = sortedList.map((obj) => Object.values(obj)[0]).join(" ");
  return result;
}

// console.log(
//   sentence([
//     { 4: "dog" },
//     { 2: "took" },
//     { 3: "his" },
//     { "-2": "Vatsan" },
//     { 5: "for" },
//     { 6: "a" },
//     { 12: "spin" },
//   ])
// );

// List = [
//   { 4: "dog" },
//   { 2: "took" },
//   { 3: "his" },
//   { "-2": "Vatsan" },
//   { 5: "for" },
//   { 6: "a" },
//   { 12: "spin" },
// ];

function checkExam(array1, array2) {
  let result = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") {
      result += 0;
    } else if (array2[i] === array1[i]) {
      result += 4;
    } else {
      result -= 1;
    }
  }

  return result < 0 ? 0 : result;
}
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
function squareAreaToCircle(size) {
  let a = Math.sqrt(size);
  let S = Math.PI * a ** 2;
  return S.toFixed(8);
}

// console.log(squareAreaToCircle(20));
function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return `${integer} is prime`;
  }
  return arr;
}
// console.log(divisors(15));
function divCon(x) {
  const numbers = x.filter((num) => typeof num === "number");
  const strings = x.filter((num) => typeof num === "string");

  return (
    numbers.reduce((sum, val) => (sum += val), 0) -
    strings.reduce((sum, val) => (sum += +val), 0)
  );
}

// console.log(divCon([9, 3, "7", "3"]));

function testit(s) {
  let count = 0;
  let arr1 = [];
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "word") {
      arr1.push[arr[i]];
    }
  }
  console.log(arr1);
  return count;
}

// console.log(testit("This sentence have two word, not one word."));

function convertHashToArray(hash) {}

// console.log(
//   convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
// );

function isAllPossibilities(x) {
  let l = x.length;
  let newArr = [];
  for (let i = 0; i < l; i++) {
    newArr.push(i);
  }
  if (newArr.length === x.length) {
    return true;
  } else {
    return false;
  }
}

// console.log(isAllPossibilities([0, 1, 2, 2, 3]));
function digitize(n) {
  let numberArr = n
    .toString()
    .split("")
    .map((el) => +el);

  return numberArr;
}
// console.log(digitize(12345));

function reverseSlice(str) {
  str = str.split("").reverse("").join("");
  let len = str.length;
  let newStrArr = [];
  for (let i = 0; i < len; i++) {
    newStrArr.push(str.slice(i));
  }
  return newStrArr;
}

console.log(reverseSlice("123"));
