/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
import { logDate } from './logDate';

logDate();

// ---Task-01-----------------------------------------------------------------------------
const add = (a: number, b: number): number => a + b;
console.log(add(1, 99));

// ---Task-02-----------------------------------------------------------------------------
const getType = (a: unknown) => typeof a;
console.log(getType({}));

// ---Task-03-----------------------------------------------------------------------------
const matchType = (a: unknown, b: unknown) => typeof a === typeof b;
console.log(matchType(32, 'apple'));

// ---Task-04-----------------------------------------------------------------------------
const nthChar = (a: string, b: number) => a[b];
console.log(nthChar('apple', 4));

// ---Task-05-----------------------------------------------------------------------------
const removeFirstThree = (a: string) => a.slice(3);
console.log(removeFirstThree('abcdefg'));

// ---Task-06-----------------------------------------------------------------------------
const removeLastThree = (a: string) => a.slice(-3);
console.log(removeLastThree('watermellon'));
// ---Task-07-----------------------------------------------------------------------------
const getFirstThree = (a: string) => a.slice(0, 3);
console.log(getFirstThree('abcdefg'));

// ---Task-08-----------------------------------------------------------------------------
const getFirstHalf = (a: string) => a.substring(0, Math.ceil(a.length / 2));
console.log(getFirstHalf('abcd'));

// ---Task-09-----------------------------------------------------------------------------
const getLastThree = (a: string) => a.substring(a.length - 3, a.length);
console.log(getLastThree('abcdefghijk'));

// ---Task-10-----------------------------------------------------------------------------
const percentage = (a: number, b: number): number => (b / 100) * a;
console.log(percentage(10, 1));

// ---Task-11-----------------------------------------------------------------------------
const complexOperation = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number => {
  const sum = a + b;
  const subtracted = sum - c;
  const multiplied = subtracted * d;
  const divided = multiplied / e;
  const result = divided ** f;
  return result;
};

console.log(complexOperation(6, 2, 1, 4, 2, 3));

// ---Task-12-----------------------------------------------------------------------------
const isEven = (a: number) => a % 2 === 0;
console.log(isEven(111));

// ---Task-13-----------------------------------------------------------------------------
const alphabetCounter = (a: string, b: string): number => {
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  }
  return count;
};

console.log(
  alphabetCounter(
    'e',
    'how many times does the character occur in this sentence?'
  )
);

// ---Task-14-----------------------------------------------------------------------------
const isWholeNumber = (a: number) => Number.isInteger(a);
console.log(isWholeNumber(111));

// ---Task-15-----------------------------------------------------------------------------
const multiplyOrDivide = (a: number, b: number) => {
  if (a < b) {
    return a / b;
  }
  return a * b;
};

console.log(multiplyOrDivide(2, 0.5));
// ---Task-16-----------------------------------------------------------------------------
const stringMerger = (a: string, b: string): string => `${b}${a}`;
console.log(stringMerger(' think, therefore I am', 'I'));

// ---Task-17-----------------------------------------------------------------------------
const tillTwoDecimals = (a: number) => a.toFixed(2);
console.log(tillTwoDecimals(1.1111));

// ---Task-18-----------------------------------------------------------------------------
const splitDigits = (a: number): number[] => Array.from(String(a), Number);
console.log(splitDigits(241));

// ---Task-19-----------------------------------------------------------------------------
const stringFixMerge = (a: string, b: string): string => {
  let newA = a.replace('%', '');
  newA = newA.replace(newA[0], newA[0].toUpperCase());
  let newB = b.replace('%', '');
  newB = newB.split('').reverse().join('');

  return `${newA}${newB}`;
};
console.log(stringFixMerge('coun%try', 'e%dis'));

// ---Task-20-----------------------------------------------------------------------------
const isPrime = (num: number) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const getNextPrime = (num: number) => {
  let a = num;
  if (isPrime(a)) return a;
  do {
    a++;
  } while (!isPrime(a));
  return a;
};
console.log(getNextPrime(1999 + 1));

// ---Task-21-----------------------------------------------------------------------------
const isDivisableOrGetNext = (x: number, y: number): number => {
  if (x < 0) return 0;

  if (x % y === 0) {
    return x;
  }
  return Math.ceil(x / y) * y;
};
console.log(isDivisableOrGetNext(11, 2));
// ---Task-22-----------------------------------------------------------------------------
const insertAfterEveryThird = (a: string, b: string) => {
  const result = [];
  let counter = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    result.unshift(a[i]);
    counter++;

    if (counter === 3) {
      result.unshift(b);
      counter = 0;
    }
  }

  return result.join('');
};

console.log(insertAfterEveryThird('3123123123123', '/'));

// ---Task-23-----------------------------------------------------------------------------
const incrementLetters = (word: string): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < word.length; i++) {
    const index = alphabet.indexOf(word[i]);
    const newIndex = (index + 1) % alphabet.length;
    result += alphabet[newIndex];
  }
  return result;
};

console.log(incrementLetters('sdrshmfetbjxnt'));

// ---Task-24-----------------------------------------------------------------------------
const getElementFromArray = (a: unknown[], n: number) => a[n - 1];

// ---Task-25-----------------------------------------------------------------------------
const removeFirstThreeElementFromArray = (a: unknown[]) => {
  a.shift();
  a.shift();
  a.shift();
  return a;
};
console.log(removeFirstThreeElementFromArray([1, 2, 3, 4, 5, 6, 7]));

// ---Task-26-----------------------------------------------------------------------------
function getLastThreeElementFromArray(a: unknown[]): unknown[] {
  const b = [a.pop(), a.pop(), a.pop()];
  b.reverse();
  return b;
}
console.log(getLastThreeElementFromArray([1, 2, 3, 4, 5, 6, 7]));

// ---Task-27-----------------------------------------------------------------------------
const getFirstThreeElementFromArray = (a: unknown[]) => a.slice(0, 3);
console.log(getFirstThreeElementFromArray([1, 2, 3, 4, 5, 6, 7]));

// ---Task-28-----------------------------------------------------------------------------
const getLastNElementsFromArray = (a: unknown[], n: number) => {
  const b = a.slice(a.length - n, a.length);
  return b;
};
console.log(getLastNElementsFromArray([1, 2, 3, 4, 5, 6, 7], 4));

// ---Task-29-----------------------------------------------------------------------------
const cleanElementFromArray = (a: unknown[], b: unknown) =>
  a.filter((element) => element !== b);
console.log(cleanElementFromArray([1, 2, 3, 4, 5, 6, 7], 4));

// ---Task-30-----------------------------------------------------------------------------
const getArrayLength = (a: unknown[]) => a.length;
console.log(getArrayLength([1, 2, 3, 4, 5, 6, 7]));

// ---Task-31-----------------------------------------------------------------------------
const countNegatives = (a: number[]) => a.filter((num) => num < 0).length;
console.log(countNegatives([1, 2, -3, 4, 5, -6, 7]));

// ---Task-32-----------------------------------------------------------------------------
const sortDescending = (arr: number[]) => arr.sort((a, b) => b - a);
console.log(sortDescending([8, 9, 10, 1, 2, 3, 4, 5, 6, 7]));

// ---Task-33-----------------------------------------------------------------------------
const sortAlphabetically = (arr: string[]) => arr.sort();
console.log(sortAlphabetically(['g', 'f', 'a', 'c', 'b', 'e', 'd']));

// ---Task-34-----------------------------------------------------------------------------
const getAverage = (arr: number[]) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;

  return average;
};
console.log(getAverage([10, 100, 1000]));

// ---Task-35-----------------------------------------------------------------------------
const findLongestString = (arr: string[]) => {
  let longest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
};

// ---Task-36-----------------------------------------------------------------------------
const areAllEqual = (arr: unknown[]) => {
  const firstElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
      return false;
    }
  }

  return true;
};
console.log(areAllEqual([1, 1, 1, 1, 2]));

// ---Task-37-----------------------------------------------------------------------------
const mergeArrays = (...arrays: unknown[]) => [].concat(...arrays);
console.log(mergeArrays([true, true], [1, 2], ['a', 'b']));

// ---Task-38-----------------------------------------------------------------------------
interface NumberObject {
  a: number;
  b: number;
}
const sortArrayObjects = (arr: NumberObject[]) => arr.sort((a, b) => a.b - b.b);
console.log(
  sortArrayObjects([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortArrayObjects([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
);

// ---Task-39-----------------------------------------------------------------------------
const mergeAndSort = (arr1: number[], arr2: number[]): number[] => {
  const mergedArray = [...new Set([...arr1, ...arr2])];
  return mergedArray.sort((a, b) => a - b);
};

console.log(mergeAndSort([1, 8, 3], [3, 4, 7, 2, 5, 6]));

// ---Task-40-----------------------------------------------------------------------------
const sumGreaterThan = (arr: number[], b: number): number =>
  arr.reduce((sum, element) => (element > b ? sum + element : sum), 0);

console.log(sumGreaterThan([-10, -11, -3, 1, -4], -3));
// ---Task-41-----------------------------------------------------------------------------
const generateRange = (min: number, max: number): number[] => {
  const result: number[] = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
};

console.log(generateRange(1, 10));

// ---Task-42-----------------------------------------------------------------------------
const groupByFirstLetter = (arr: string[]): Record<string, string[]> => {
  const result: Record<string, string[]> = {};

  arr.forEach((str) => {
    const firstLetter = str[0].toLowerCase();
    result[firstLetter] = result[firstLetter] || [];
    result[firstLetter].push(str);
  });

  return result;
};
// ---Task-43-----------------------------------------------------------------------------
const modifyArray = (arr: unknown[], num: number): unknown[] => {
  const modifiedArray = num >= 6 ? [num, ...arr] : [0, ...arr];
  return modifiedArray.slice();
};
// ---Task-44-----------------------------------------------------------------------------
const saveEveryNth = (arr: unknown[], n: number) => {
  const result: unknown[] = [];
  for (let i = n - 1; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;
};
// ---Task-45-----------------------------------------------------------------------------
interface CountryObject {
  continent: string;
  country: string;
}
const getCountryValue = (obj: CountryObject): string => obj.country;
// ---Task-46-----------------------------------------------------------------------------
interface RandObject {
  [key: string]: unknown;
}

const getProp2Value = (obj: RandObject): any => obj['prop-2'];
// ---Task-47-----------------------------------------------------------------------------
interface MyObject {
  [key: string]: string;
}
const getValueByKey = (obj: MyObject, key: string) => obj[key];
// ---Task-48-----------------------------------------------------------------------------
interface NewObject {
  [key: string]: unknown;
}
const ifContainsProperty = (obj: NewObject, key: string): boolean =>
  obj[key] !== undefined;

// ---Task-49-----------------------------------------------------------------------------
const createObject = (a: string): { key: string } => {
  return { key: a };
};
// ---Task-50-----------------------------------------------------------------------------
const createDefinedObject = (a: string, b: string) => {
  const result: { [key: string]: string } = {};
  result[a] = b;
  return result;
};
// ---Task-51-----------------------------------------------------------------------------
const createMergedObject = (
  keys: string[],
  values: unknown[]
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};

  keys.forEach((key, index) => {
    result[key] = values[index];
  });

  return result;
};
// console.log(createMergedObject(cars, [1, 2, 3, 4, 5, 6, 7]));
// ---Task-52-----------------------------------------------------------------------------
const getObjectKeys = (obj: Record<string, unknown>) => Object.keys(obj);

// ---Task-53-----------------------------------------------------------------------------
const countOccurrences = (arr: number[]) => {
  const result: Record<number, number> = {};
  arr.forEach((num) => {
    result[num] = (result[num] || 0) + 1;
  });
  return result;
};

// ---Task-54-----------------------------------------------------------------------------
const areDatesEqual = (date1: Date, date2: Date) =>
  date1.getTime() === date2.getTime();

// ---Task-55-----------------------------------------------------------------------------
const getDaysBetweenDates = (date1: Date, date2: Date): number => {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const differenceInDays = Math.round(
    Math.abs((date1.getTime() - date2.getTime()) / oneDayInMilliseconds)
  );
  return differenceInDays;
};

// ---Task-56-----------------------------------------------------------------------------
const areSameDay = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();
console.log(areSameDay(new Date('2000/01/01'), new Date('2010/01/01')));

// ---Task-57-----------------------------------------------------------------------------
const joinArrays = (arr1: number[], arr2: number[]) => [...arr1, ...arr2];

// ---Task-58-----------------------------------------------------------------------------
const addStringToArrayEnd = (arr: string[], str: string) => [...arr, str];

// ---Task-59-----------------------------------------------------------------------------
const addStringToArrayStart = (arr: string[], str: string) => [str, ...arr];

// ---Task-60-----------------------------------------------------------------------------
const mergeObjects = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
) => {
  return { ...obj1, ...obj2 };
};
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// ---Task-61-----------------------------------------------------------------------------
const addObjectProperty = (
  obj: Record<string, unknown>,
  favoriteMovie: string
): Record<string, unknown> => {
  return { ...obj, favoriteMovie };
};
