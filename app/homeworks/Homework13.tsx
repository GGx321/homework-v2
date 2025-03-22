import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework13() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 13"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework13.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Масиви та їх методи</title>
    <script>
// 0
let arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);
arr.length = 7;
console.log(arr);

// 1
let colors = ['red', 'green', 'blue'];
console.log(colors.at(-1));
colors[1] = 'yellow';
console.log(colors);

// 2
let cars = ["Ford", "Mazda", "Renault", "Volvo"];
cars.push("BMW");
console.log(cars);
let removeCars = cars.splice(1, 2, "Toyota");
console.log(removeCars);
console.log(cars.shift());
cars.unshift("Infinity", "WW");
console.log(cars);

// 3
function multInput() {
    let dataBase = [];
    while (true) {
        let enter = prompt("Ну допустим число:");
        if (enter === "" || enter === null) break;
        dataBase.push(Number(input));
    }
    return dataBase.reduce((a, b) => a * b, 1);
}

// 4 МЕТОДЫ МАССИВОВ
function stylesCorrection(str) {
    console.log(str.split("!").join("-"));
}
stylesCorrection("my!short!string");

// 1
let arrD = [{id: 0, value: 5}, {id: 1, value: 3}, {id: 2, value: 8}, {id: 3, value: 1}];
function filterRange(arrD, a, b) {
    return arrD.filter(item => item.value >= a && item.value <= b);
}

a = (prompt("Нижний предел:"));
b = (prompt("Верхний предел:")); 

console.log(filterRange(arrD, a , b));

// 2
function copyAndSort(arrD) {
    let sort = prompt("'ASC' или 'DESC' ?)");

    if (sort !== "ASC" && sort !== "DESC") {
        console.log("Некорректный ввод!");
        return;
    }

    return arrD.slice().sort((a, b) => sort === "DESC" ? b.value - a.value : a.value - b.value);
}

console.log(copyAndSort(arrD));

//3
let carsOBJ = [{id: 0, brand: 'Ford'}, {id: 1, brand: 'Toyota'}, {id: 2, brand: 'Mazda'}];
let brands = carsOBJ.map(car => car.brand);
console.log(brands);

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
