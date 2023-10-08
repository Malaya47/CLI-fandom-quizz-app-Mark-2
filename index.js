import readlineSync from "readline-sync";
import chalk from "chalk";

const questionBank = [
  {
    question: "Q.1 Which Call of Duty game introduced the iconic character Captain Price? ",
    answer: "Call of Duty 4: Modern Warfare",
    answerOptions: [
      "Call of Duty 2",
      "Call of Duty 3",
      "Call of Duty 4: Modern Warfare",
      "Call of Duty: World at War",
    ],
  },
  {
    question:
      "Q.2 Which developer studio worked on the 2019 Modern Warfare reboot?",
    answer: "Infinity Ward",
    answerOptions: [
      "Treyarch",
      "Infinity Ward",
      "Sledgehammer Games",
      "Raven Software",
    ],
  },
  {
    question: "Q.3 What is the name of the game mode in Modern Warfare where players fight to be the last person or team standing?",
    answer: "Free-for-All",
    answerOptions: [
      "Team Deathmatch",
      "Domination",
      "Free-for-All",
      "Battle Royale",
    ],
  },
  {
    question: "Q.4 Which real-life firearm is known as the 'M4A1' in Modern Warfare?",
    answer: "M16",
    answerOptions: ["AK-47", "M16", "FN Scar", "AR-15"],
  },
  {
    question: "Q.5 Which real-world country serves as the primary setting for many missions in Modern Warfare?",
    answer: "Russia",
    answerOptions: ["United States", "Russia", "France", " Germany"],
  },
];

const highestScores = {
  name: "Tanmay",
  score: 3,
};

function play(questionBank) {
  var score = 0;
  var userName = readlineSync.question(
    chalk.bold.yellow("May I know your name ? ")
  );
  console.log("----------------------------------------------------");
  console.log(chalk.bold.yellow("welcome to this fandom Quiz " + userName));
  console.log("----------------------------------------------------");

  for (let i = 0; i < questionBank.length; i++) {
    console.log(chalk.blue(questionBank[i].question));

    var index = readlineSync.keyInSelect(
      questionBank[i].answerOptions,
      "choose the right option: "
    );

    if (questionBank[i].answer === questionBank[i].answerOptions[index]) {
      score = score + 1;
      console.log(chalk.bold.green("Your answer is correct"));
      console.log("----------------------------------------------------");
    } else {
      score = score - 1;
      console.log(chalk.bold.red("Your answer is incorrect"));
      console.log("----------------------------------------------------");
    }
  }
  console.log(chalk.bold.green(userName + " Your final score is: " + score));

  console.log("----------------------------------------------------");

  if (score > highestScores.score) {
    console.log(
      chalk.bold.green("Congrats " + userName + " you scored highest " + score)
    );
  } else {
    console.log(highestScores.name + " scored highest " + highestScores.score);
  }
}

play(questionBank);
