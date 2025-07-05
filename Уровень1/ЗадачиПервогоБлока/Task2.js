// Дана строка
let a = "строка";

// Функция для подсчета длины строки (аналог .length)
function stringLength(str) {
    let count = 0;
    for (let i = 0; ; i++) {
        if (str[i] === undefined) break;
        count++;
    }
    return count;
}

// Функция для подсчета количества строк
function linesCount(str) {
    let count = 1; // Минимум одна строка
    for (let i = 0; i < stringLength(str); i++) {
        if (str[i] === '\n') {
            count++;
        }
    }
    return count;
}

console.log("Длина строки:", stringLength(a)); // 33
console.log("Количество строк:", linesCount(a)); // 3