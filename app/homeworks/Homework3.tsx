import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework3() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 3"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework3.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Просмотр</title>
    <link rel="shortcut icon" href="image/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <h1 id="homework">Home work</h1>
        <a href="../hm.html">Домой</a>
    </nav>
    <hr>
    <div class="links">
        <a href="pages/lesson1.html">Lesson 1</a>
        <a href="pages/lesson2.html">Lesson 2</a>
        <a href="pages/lesson3.html">Lesson 3</a>
    </div>
    <div class="container">
        <h2>Здесь будут в основном ссылки на другие странциы для дз</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero esse voluptatem dicta sequi delectus!</p>
        <p>Относительный путь - это путь который идет с корня проекта. Например: "корень"/img/favicon.ico</p>
        <p>Абсолютный путь - это путь который идет с корня системы где находится этот проект. Например: C:/ProgramFiles/Project/img/favicon.ico</p>
    </div>
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

nav{
    display: flex;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
}

#homework{
    color: blueviolet;
}

.links{
    display: flex;
    justify-content: space-between;
    padding: 25px;
}

a{
    text-decoration: none;
    color: whitesmoke;
    background-color: gray;
    padding: 5px 8px;
}

.container{
    background-color: rgb(29, 29, 29);
    border-radius: 15px;
    color: whitesmoke;
    padding: 15px;
}

.img-media{
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
}

img{
    width: 300px;
}

video{
    width: 300px;
}`
      }



      js={
        `Пусто`
      }
    />
  );
}
