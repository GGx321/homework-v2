import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework11() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 11"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework11.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Объекты</title>
    <script>
// 1)
let employee = {};
employee.name = "Ivan";
employee.position = "office manager";
employee.name = "Petro";
delete employee.name;

if (!("isFired" in employee)) {
    employee.isFired = false;
}

let property = prompt("Введите название:");
let value = prompt("Введите значение:");
employee[property] = value;

console.log(employee);

// 2)
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}
console.log("Количество свойств employee:", countProperties(employee));

// 3)
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log("Объект employee пустой:", isEmpty(employee));

// 4)
let salaries1 = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function getSum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}
console.log(getSum(salaries1));

// 5)
let salaries2 = {
    John: 100,
    Bill: false,
    Ann: 160,
    Lily: null,
    Pete: 13
};

function multiplyNumeric(obj, factor) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= factor;
        }
    }
}
multiplyNumeric(salaries2, 2);
console.log(salaries2);

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
