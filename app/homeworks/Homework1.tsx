import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework1() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 1"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework1.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Просмотр</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="image/favicon.png" type="image/x-icon">
</head>
<body>
    <nav>
        <h1 id="homework">Home work</h1>
        <a href="../hm.html">Домой</a>
    </nav>
    <hr>
    <p>1. <span>HTML</span> - это тип документа который предназначен для работы в браузерах. HTML дает браузеру понять что ему нужно выводить на экран пользователя.</p>
    <p>2. <strong>Язык разметки</strong> - это инструмент для создания и написания страницы. Тот же HTML.</p>
    <p>3. <span>DOCTYPE</span>  - это тип указания версии HTML</p>
    <p>3. <b>Блочные теги и линейные теги</b> 
        <ul>
            <li>Блочные теги - создают элемент который будет занимать всю ширину страницы.</li>
            <li>Линейные теги - создают элемент которые берут только нужное количество места для содержимого.</li>
        </ul>
    </p>
</body>
</html>`
      }



      css={
        `*{
    font-family: Arial, Helvetica, sans-serif;
}

body{
    background-color: rgb(219, 219, 219);
}

span{
    color: red;
    font-weight: bold;
}
nav{
    display: flex;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
}`
      }



      js={
        `console.log('Hello, world!');`
      }
    />
  );
}
