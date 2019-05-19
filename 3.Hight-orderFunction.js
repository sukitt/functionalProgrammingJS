// di JavaScript dan di bahasa programming functional ada sebuah konsep yang dinamakan Higher-order function. Higher-order function adalah function yang menerima argumen atau parameter berupa function. Sebelum mendengar higher-order function, mungkin kita pernah mendengar callback di JavaScript. Ya, callback function adalah function yang dikirimkan sebagai parameter ke dalam higher-order function. Contoh paling sederhana dari penerapan higher-order function adalah filter function.

// Example 1: Array.prototype.filter
const isEven = (num) => {
    return num % 2 === 0
}

const nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter(isEven);
console.log(evenNums); // [2,4,6]

// Example 2: Array.prototype.map
const capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
}

const sentence = "you there. i'm batman!";

const uppercasedSentence = sentence.split(' ').map(capitalizeWord);

console.log(uppercasedSentence); // "You There. I'm Batman!"-