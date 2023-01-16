const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

//Начинаем дату отсчёта
// год ; месяц ; день ; часы ; минуты ; секунды
let countdownDate = new Date(2025, 1, 2, 2, 20).getTime();

function getCountdownTime() {
  //Получить текущее время
  const now = new Date().getTime();

  //Найти разницу времени
  const distance = countdownDate - now;

  // 1с = 1000мс
  // 1м = 60с
  // 1ч = 60м
  // 1 д = 24ч

  //Создаём переменные в милисекундах
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //Подсчёт для дней, часов, минут и секунд
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  //Создаём массив с переменными
  const values = [days, hours, minutes, seconds];
  console.log(values);

  //Добавляем значение переменных на страницу
  items.forEach(function (item, index) {
    item.textContent = values[index];
  });
  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = '<h4 class ="expired">Время вышло </h4>';
  }
}

//Обновляем счётчик каждую секунду
let countdown = setInterval(getCountdownTime, 1000);

//Инициализация текущего времени
getCountdownTime();
