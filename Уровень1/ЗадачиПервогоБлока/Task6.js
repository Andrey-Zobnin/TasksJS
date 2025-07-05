// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.?
let str = "stringь";

if (str[str.length - 1] === "ь") {
    console.log(str[str.length - 2]);
} else {
    console.log(str[str.length - 1]);
}