/**
 * Returns the number of characters in the given string
 * @param {string} str 
 * @returns {number}
 */
function LEN(str) {
  return str.length;
}

/**
 * Replaces all instances of target with replacement in the given string
 * @param {string} str 
 * @param {string} target 
 * @param {string} replacement 
 * @returns {string}
 */
function REP(str, target, replacement) {
  return str.split(target).join(replacement);
}

/**
 * Reverses the order of characters in a string
 * @param {string} str 
 * @returns {string}
 */
function REV(str) {
  return str.split('').reverse().join('');
}

/**
 * Inserts insertStr at the index position of original string
 * @param {string} str 
 * @param {number} index 
 * @param {string} insertStr 
 * @returns {string}
 */
function INS(str, index, insertStr) {
  return str.slice(0, index) + insertStr + str.slice(index);
}

// Operation 1
const problem1 = REV(REP('abcdefg', 'g', 'hh')); // Expected: 'hhfedcba'

// Operation 2
const nestedInsert = INS(INS('mnop', 4, 'qrs'), 5, 'tuv'); // 'mnopqtuvrs'
const problem2 = REV(nestedInsert); // Expected: 'srvutqponm'

// Operation 3
const inserted = INS('lionsbears', 5, 'tigers'); // 'lionstigersbears'
const replaced = REP(inserted, 'lions', 'gorillas'); // 'gorillastigersbears'
const problem3 = LEN(replaced); // Expected: 20

// Answers
console.log("Answer 1:", problem1);
console.log("Answer 2:", problem2);
console.log("Answer 3:", problem3);

