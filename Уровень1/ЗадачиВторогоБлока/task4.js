let num = 829;
let count = 0;

while (num > 0) {
    num = Math.floor(num / 10); // Убираем последнюю цифру
    count++; // Увеличиваем счетчик
}

console.log(count); // Выводим количество цифр
