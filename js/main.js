// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (b - a + 1)) + a; // Максимум и минимум включён
}

getRandomIntInclusive(5, 20);

// Функция для проверки максимальной длины строки

function stringLength(stringCheck, stringMaxLength) {
  if (stringMaxLength >= stringCheck.length) {
    return true;
  }
  return false;
}

stringLength('test', 2);

