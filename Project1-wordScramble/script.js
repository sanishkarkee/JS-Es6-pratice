// //------1] First ma chai gameArea class ko content lai select garinxa because tekso content haru sanga khelnu xa hamile
// const msg = document.querySelector('.msg');
// const guess = document.querySelector('input');
// const btn = document.querySelector('.btn');

// let play = false;

// let newWords = '';
// let randomWords = '';

// let sWords = [
//   'python',
//   'javascript',
//   'c++',
//   'php',
//   'java',
//   'c#',
//   'html',
//   'css',
//   'reactjs',
//   'angular',
//   'swift',
//   'android',
//   'sql',
// ];

// // console.log(msg);
// // console.log(guess);
// // console.log(btn);

// const createNewWords = () => {
//   // Array bata random number generate garna
//   let ranNum = Math.floor(Math.random() * sWords.length); //Floor le chai . paxi ko value hatauxa. Eg: 12.89 xa bhane 12 return garxa

//   //   console.log(sWords.length);   Op=13
//   //   console.log(ranNum);

//   //   selected random array number ko words chose garna
//   let newTempSwords = sWords[ranNum];
//   //   console.log(newTempSwords.split(''));  //split() changes strings to array / Example OP= ['r','e','a','c','t']

//   return newTempSwords;
// };

// const scrambleWords = (arr) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let temp = arr[i];
//     // console.log(temp);
//     let j = Math.floor(Math.random() * (i + 1)); //' i ' ma chai ordered way ma number aauxa bhane, letter lai shuffle garna lai chai ' j ' use garkeo ho,jasle random number generate garxa ra tei random number le represent garne letter lai show garxan , jas karan word shuffle bhayeko jasto dekhinxa
//     // console.log(i);
//     // console.log(j);

//     // aba tyo i ko thau ma j le replace garna chai Exercise-1 ma two number swap gare jastai swap garne ho
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//   return arr;
// };

// //------2] button click bhaye paxi game suru hunu paryo
// btn.addEventListener('click', function () {
//   if (!play) {
//     play = true;
//     btn.innerHTML = 'Guess';

//     guess.classList.toggle('hidden'); // class 'hidden' xa bhane hide garxa element bata , class 'hidden' xaina bhane element ma class'hidden' add garxa

//     newWords = createNewWords();

//     randomWords = scrambleWords(newWords.split('')); //split() changes strings to array / Example OP= ['r','e','a','c','t']

//     // console.log(randomWords.join('')); //join('') le chai array content lai combined way ma show garxa. Ex: ['a','b','c','d'] => abcd
//     msg.innerHTML = `Guess the word: ${randomWords.join('')}`;
//   } else {
//     let tempWords = guess.value; //user le input field ma type gareko word

//     if (newWords === tempWords) {
//       // console.log('correct');
//       play = false;
//       msg.innerHTML = `Awesome it's correct. It is ${newWords}`;

//       btn.innerHTML = 'Start again';

//       guess.classList.toggle('hidden');

//       guess.value = ''; // Clear input field after submit
//     } else {
//       // console.log('Incorrect');

//       msg.innerHTML = `Sorry it's incorrect. Please try again "${randomWords.join(
//         ''
//       )} "`;
//       guess.value = '';
//     }
//   }
// });

// ----------------------------------Praticing above code---------------------------------------------
const mssg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;

let newWords = '';
let randomWords = '';

let sWords = [
  'python',
  'javascript',
  'c++',
  'php',
  'java',
  'c#',
  'html',
  'css',
  'reactjs',
  'angular',
  'swift',
  'android',
  'sql',
];
// ---------------------------------------------------------

const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newTempWords = sWords[ranNum];

  return newTempWords;
};

// ---------------------------------------------------------

const scrambeWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i]; //'i' generate number in ordered list

    let j = Math.floor(Math.random() * (i + 1)); //'j' generate random number but in unordered list
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};
// ---------------------------------------------------------

btn.addEventListener('click', function () {
  if (!play) {
    btn.innerHTML = 'Guess';
    guess.classList.toggle('hidden');

    newWords = createNewWords();

    randomWords = scrambeWords(newWords.split(''));

    mssg.innerHTML = `Guess the word: ${randomWords.join('')}`;
  } else {
    let userInputWord = guess.value;

    if (newWords === userInputWord) {
      play = false;

      mssg.innerHTML = `It is right. The word is: ${newWords}`;
      btn.innerHTML = 'Start again';
      guess.classList.toggle('hidden');

      guess.value = '';
    } else {
      mssg.innerHTML = `Sorry its incorrect.Please try again ${randomWords.join(
        ''
      )}`;
      guess.value = '';
    }
  }
});
