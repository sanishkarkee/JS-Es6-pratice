//------1] First ma chai gameArea class ko content lai select garinxa because tekso content haru sanga khelnu xa hamile
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;

let newWords = '';
let randomWords = '';

let sWords = [
  'python',
  'javscript',
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

// console.log(msg);
// console.log(guess);
// console.log(btn);

const createNewWords = () => {
  // Array bata random number generate garna
  let ranNum = Math.floor(Math.random() * sWords.length); //Floor le chai . paxi ko value hatauxa. Eg: 12.89 xa bhane 12 return garxa

  //   console.log(sWords.length);   Op=13
  //   console.log(ranNum);

  //   selected random array number ko words chose garna
  let newTempSwords = sWords[ranNum];
  //   console.log(newTempSwords.split(''));  //split() changes strings to array / Example OP= ['r','e','a','c','t']

  return newTempSwords;
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    console.log(temp);
    let j = Math.floor(Math.random() * (i + 1));
    console.log(i);
    console.log(j);
  }
};

//------2] button click bhaye paxi game suru hunu paryo
btn.addEventListener('click', function () {
  if (!play) {
    play = true;
    btn.innerHTML = 'Guess';

    guess.classList.toggle('hidden'); // class 'hidden' xa bhane hide garxa element bata , class 'hidden' xaina bhane element ma class'hidden' add garxa

    newWords = createNewWords();

    randomWords = scrambleWords(newWords.split('')); //split() changes strings to array / Example OP= ['r','e','a','c','t']
  }
});
