"use strict";

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");
  while (isNaN(money) || money == "" || money == null) {
    +prompt("Ваш бюджет на месяц?");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
      b = prompt("Во сколько обойдется?");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
      b != '' && a.length < 10) {
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }

  }
}

chooseExpenses();

function checkSavings() {
  if (appData.savigs == true) {
    let save = +prompt("Какова сумма ваших накоплений"),
      percent = +prompt("Под какой процент");
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ваш бюджет на день: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка")
  }
}

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++){
   let z = prompt ("Статья необязательных расходов?"),
       y = +prompt ("Во сколько это обойдется");
       appData.optionalExpenses[z] = y; 
  }
  
}

chooseOptExpenses();

console.log (appData);