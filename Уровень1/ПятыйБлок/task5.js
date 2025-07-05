// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
str = 'sring'
last = str.length - 1;
// console.log(last);
for (let i = last; i >= 0 ; i--) {
    console.log(str[i]);
}