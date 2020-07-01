'use strict';

let startBtn = document.getElementById('start');
let bugetValue = document.getElementsByClassName('budget-value')[0];
let dayBugetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value');
let yearSavingsValue = document.getElementsByClassName('yearsavings-value');
let expensesItem = document.getElementsByClassName('expenses-item');
let btn = document.getElementsByTagName('button');

let expensesItemBtn = btn[0];
let optionalExpensesBtn = btn[1];
let countBugetBtn = btn[2];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('.checksavings');
let chooseSum = document.querySelector('.choose-sum');
let percent = document.querySelector('.choose-percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () { // начать расчет
  money = +prompt("Ваш бюджет на месяц?", ""); //input buget
  time = prompt("Введите дату в формате YYYY-MM-DD", ""); //input date

  while (isNaN(money) || money == "" || money == null) { //check  input correct
    money = +prompt("Ваш бюджет на месяц?");
  }
  appData.budget = money;
  appData.timeData = time;
  bugetValue.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});


expensesItemBtn.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value, //get expenses key from user
      b = expensesItem[++i].value; //get expenses value from user
    sum += +b; //sum of expenses
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
      b != '' && a.length < 10) {
      appData.expenses[a] = b; //push to the obj
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () { //calc optional expenses
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBugetBtn.addEventListener('click', function () { //calc day buget
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  dayBugetValue.textContent = appData.moneyPerDay;
  if (appData.budget != undefined) {

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    dayBugetValue.textContent = 'Произошла ошибка';
  }
});

chooseIncome.addEventListener('input', function () {
  let item = chooseIncome.value;
  appData.income = item.split(',');
  incomeValue.textContent = appData.income;

})

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,


  checkSavings: function () {
    if (appData.savigs == true) {
      let save = +prompt("Какова сумма ваших накоплений", ""),
        percent = +prompt("Под какой процент", "");
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },



  chooseIncome: function () {
    
    appData.income.push(prompt("Может что-то еще?", ""));
    appData.income.sort();
    while ((typeof (item)) != 'string' || item == "" || item == null) {
      item = prompt("Что принесет дополнительный доход (Перечислите через запятую)", "");
    }
    appData.income.forEach(function (itemvalue, i) {
      alert("Способы доп.заработка: " + (i + 1) + itemvalue);
    });

  }
};