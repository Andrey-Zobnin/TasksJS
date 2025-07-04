// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
let num = 348;
nums = String(num);
let Start = nums[0];
let end = nums[nums.length - 1];

console.log(parseInt(Start) + parseInt(end));
