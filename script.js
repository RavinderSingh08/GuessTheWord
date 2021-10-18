const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randomWords = "";
let sWords = [
  "python",
  "javascript",
  "cpp",
  "php",
  "java",
  "jquery",
  "html",
  "css",
  "react",
  "angular",
  "swift",
  "android",
  "mysql",
  "bootstrap",
  "matlab",
  "perl",
  "ruby",
  "pascal",
  "xml",
  "typescript",
  "node",
  "mongodb",
  "flutter",
  "vuejs",
  "reactnative",
  "nextjs"
];

const createNewWords = () => {
  let randomNum = Math.trunc(Math.random() * sWords.length);
  // console.log(randomNum);
  let newTempWords = sWords[randomNum];
  // console.log(newTempWords.split(""));
  return newTempWords;
};

const scrabbleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    // console.log(temp);
    let j = Math.trunc(Math.random() * (i + 1));
    // console.log(i);
    // console.log(j);

    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const main = () => {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randomWords = scrabbleWords(newWords.split("")).join("");
    // console.log(randomWords.join(""));
    msg.innerHTML = `Guess The Word : "${randomWords}"`;
  } else {
    let tempWords = guess.value;
    if (tempWords === newWords) {
      // console.log('corret');
      play = false;
      msg.innerHTML = `Awesome You Guessed It Right. It's ${newWords}.`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      // console.log('incorrect');
      msg.innerHTML = `You Just Missed It. Try Again ${randomWords}`;
    }
  }
};

btn.addEventListener("click", () => {
  main();
});

guess.addEventListener("keydown", (e) => {
  if (e.keyCode === 13)
    main();
});