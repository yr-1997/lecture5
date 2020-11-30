 const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
 const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
 const getRandomArray = (length, min, max) => new Array(length).fill(1).map(number => getRandomNumber(min, max));
 const getModa = (...aNumbers) => {
     let moda = [];
     let countNumber = 0;
     let maxCount = 0;
     const sortNumbers = aNumbers.sort();
     let lastNumber = sortNumbers[0];
     sortNumbers.map((number) => {
         if (Number.isInteger(number)) {
             if (lastNumber === number) {
                 countNumber++;
             } else {
                 if (countNumber > maxCount) {
                     maxCount = countNumber;
                     moda = [];
                     moda.push(lastNumber);
                 } else
                 if (countNumber === maxCount) {
                     moda.push(lastNumber);
                 }
                 countNumber = 0;
                 lastNumber = number;
             }
         }
     });
     return moda;
 };
 const getAverage = (numbers) => numbers.reduce((total, number) => total + number, 0) / numbers.length;
 const getMedian = (numbers) => {
     const sortArray = numbers.sort((start, next) => start - next);
     const indexHalfArray = Math.floor(sortArray.length / 2);
     return (sortArray.length % 2) ? sortArray[indexHalfArray] :
         ((sortArray[indexHalfArray] + sortArray[indexHalfArray - 1]) / 2.0);
 };
 const evensNumberArray = (numbers) => [...numbers].filter(numbers => numbers % 2 === 0);
 const countPositiveNumbers = (numbers) => numbers.filter(number => number > 0).length;
 const getDividedByFive = (numbers) => numbers.filter(number => number % 5 === 0);
 const replaceBadWords = (string = "Are you fucking kidding?") => {
     const badWords = ["shit", "fucking", "fuck"];
     const regexpBW = new RegExp(`${badWords.join("|")}`, 'gi');
     const hideBW = string.replace(regexpBW, "***");
     return hideBW;
 };
 const divideByThree = (word) => {
     if (word.length > 3) {
         const arrayWord = word.split(/(.{3})/);
         return arrayWord.join(" ").toLowerCase();
     } else {
         return word.toLowerCase();
     }
 };
 const generateCombinations = (word = "man") => {
     const comboWord = [];
     let InitialingWord = "";
     const createAnagrams = (initialWord, newComb) => {
         if (!initialWord) {
             if (!comboWord.includes(newComb)) {
                 comboWord.push(newComb);
             }
             return;
         } else {
             for (let i = 0; i < initialWord.length; i++) {
                 newComb += initialWord[i];
                 InitialingWord = initialWord.substring(0, i) + initialWord.substring(i + 1);
                 createAnagrams(InitialingWord, newComb);
                 newComb = newComb.slice(0, newComb.length - 1);
             }
         }
     };
     createAnagrams(word, "");
     return comboWord;
 };
 console.log(
     `get random number ${getRandomArray(15, 1, 100)}
     get moda ${getModa(...numbers)}
     get avarege ${getAverage(numbers)}
     get median ${getMedian(numbers)}
     get evens number array ${evensNumberArray(numbers)}
     get count  positive number array ${countPositiveNumbers(numbers)}
     get divided by five ${getDividedByFive(numbers)}
     get replaces bad words ${replaceBadWords('fuck shit idid spat')}
     get divide by three ${divideByThree('bravo')}
     get generate combination ${generateCombinations("man")}`
 );