let money = 2000;
let bet = 10;
let i = 0;
let obj = {};
let countStavka = 0;

for (i; i < 100; i++) {
  while (money > 100 && money < 3000) {
    let color = 1;
    if (bet > money) {
      bet = money;
    }
    money -= bet;

    let randomNumber = Math.floor(Math.random() * 37) + 1;

    if (randomNumber == 37) {
      randomNumber = 3;
    } else if (randomNumber % 2 == 0) {
      randomNumber = 1;
    } else if (randomNumber % 2 == 1) {
      randomNumber = 2;
    }

    if (color == randomNumber) {
      // раскомментировать следующую строку если в первом и втором for цикл повторяется до 10 раз
      // console.log(`Баланс ${money + bet * 2}  выиграл со ставкой ${bet}`);
      bet *= 2;
      money += bet;
      bet = 10;
      countStavka++;
    } else {
      // раскомментировать следующую строку если в первом и втором for цикл повторяется до 10 раз
      // console.log(`Баланс ${money} ставка  проиграна ${bet}`);
      bet *= 2;
      countStavka++;
    }
  }

  obj[i] = money;
  money = 2000;
  bet = 10;
}

let countLose = 0;
let countWin = 0;
let sum = 0;

for (i = 0; i < 100; i++) {
  if (obj[i] < 100) {
    countLose++;
    sum -= 2000;
  } else if (obj[i] >= 2900) {
    countWin++;
    sum = obj[i] - 2000 + sum;
  }
}

console.log(`${countLose} раз - проиграл
${countWin} раз - выиграл.`);
console.log(`Всего заработано: ${sum}`);
console.log(`Сделано ставок: ${countStavka}`);
