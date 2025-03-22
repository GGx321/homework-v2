import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework4() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 4"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework4.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Work</title>
    <link rel="shortcut icon" href="../../../img/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <table>
            <tr>
                <td><a href="../hm.html">Главная</a></td>
                <td><a href="pages/lesson1.html">Задание 1</a></td>
                <td><a href="pages/lesson2.html">Задание 2</a></td>
                <td><a href="pages/lesson3.html">Музыка</a></td>
            </tr>
        </table>
    </header>

    <main>
        <h1>Здесь первое и второе задание</h1>

        <section>
            <h2>Блюда</h2>
            <ol>
                <li>Вермишель с подливой
                    <ul>
                        <li>Вермишель</li>
                        <li>Томатная паста</li>
                        <li>Мясо</li>
                        <li>Приправы</li>
                        <li>Лавровый лист</li>
                        <li>Вода</li>
                    </ul>
                </li>
                <li>Блинчики
                    <ul>
                        <li>Яйца</li>
                        <li>Мука</li>
                        <li>Молоко</li>
                        <li>Подсолнечное масло</li>
                        <li>(сахар) по вкусу</li>
                    </ul>
                </li>
                <li>Жареная картошка (личнй рецепт)
                    <ul>
                        <li>Картошка</li>
                        <li>Яйца</li>
                        <li>Шинка</li>
                        <li>Вода</li>
                        <li>Подсолнечное масло</li>
                        <li>Укроп</li>
                        <li>Петрушка</li>
                        <li>Приправы</li>
                    </ul>
                </li>
            </ol>
        </section>

        <section>
            <h2>Любимые Фильмы</h2>
            <ul>
                <li>Пираты Карибского Моря</li>
                <li>Матрица</li>
                <li>Один дома</li>
            </ul>
        </section>
    </main>
</body>
</html>`
      }



      css={
        `body {
    font-family: Arial, sans-serif;
    background-color: rgb(219, 219, 219);;
}

header table {
    background-color: #333;
}

header table td {
    text-align: center;
    padding: 10px;
}

header table td a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

main ol, main ul {
    margin: 20px;
    padding-left: 40px;
}

main ul li, main ol li {
    margin-bottom: 10px;
}

main ul {
    list-style-type: disc;
}

main ol {
    list-style-type: decimal;
}

table {
    margin: 20px auto;
    text-align: center;
}

table td {
    border: 1px solid #000000;
    padding: 10px;
}

h1, h2 {
    text-align: center;
    margin: 20px 0;
}

.musicians-table {
    margin: 0;
    border: 1px solid #000000;
}

.musicians-table th, .musicians-table td {
    padding: 10px;
    border: 1px solid #000000;
    text-align: left;
}

.musicians-table th {
    background-color: #f4f4f4;
    font-weight: bold;
}
`
      }



      js={
        `Пусто`
      }
    />
  );
}
