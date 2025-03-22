import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework12() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 12"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework12.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Цикли. Види циклів</title>
    <script>
// 1)
console.log("Строка в булевой:", typeof Boolean("hello"));
console.log("Число в булевой:", typeof Boolean(123));
console.log("Строка в числе:", typeof Number("456"));
console.log("null в булевой:", typeof Boolean(null));
console.log("undefined в булевой:", typeof Boolean(undefined));

// 2)
let user = {
    name: "Alex",
    age: 22,
    contact: {
        email: "alex@example.com",
        phone: "123456789",
        address: {
            city: "Wien",
            street: "Main",
            zip: "0000"
        }
    }
};
console.log("Поле на 2м уровне:", user.contact.phone);
console.log("Поля на 3м уровне:", user.contact.address.city, user.contact.address.street);

// 3)
let list = [
    "apple",
    ["red", "blue", "green"],
    [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
];
console.log("Элемент на 2м уровне:", list[1][1]);
console.log("Элемент на 3м уровне:", list[2][0][1], list[2][1][2]);

// 4)
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 5)
let favorite = ["banana", "blue", 21];
console.log("Массив любимого:", favorite);
console.log("Тип массива:", typeof favorite);

// 6)
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
if (num1 > num2) {
    console.log("Больше число:", num1);
} else {
    console.log("Больше число:", num2);
}

// 7)
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

// 8)
let array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
console.log("Парные элементы:", array1.filter(item => typeof item === 'number' && item % 2 === 0));

// 9)
console.log("Непарные элементы:", array1.filter(item => typeof item === 'number' && item % 2 !== 0));

// 10)
let array2 = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let sum = array2.reduce((acc, num) => acc + num, 0);
console.log("Сума элементов:", sum);

// 11)
let array3 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let product = array3.reduce((acc, num) => acc * num, 1);
console.log(product);
    </script>
</head>
<body>

</body>
</html>`
      }



      css={
        `Пусто`
      }



      js={
        `Пусто`
      }
    />
  );
}
