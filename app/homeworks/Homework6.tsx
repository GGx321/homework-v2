import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework6() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 6"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework6.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Шапка</h1>
        <div class="block-header">
            <h1>Здесь могла быть ваша реклама</h1>
            <a href="lesson2/index.html">Второе задание</a>
        </div>
    </header>
    <div class="menu"><h1>Меню</h1></div>
    <div class="flexbox">
        <div class="block cl1"></div>
        <div class="block cl2"></div>
        <div class="block cl3"></div>
        <div class="block cl4"></div>
    </div>
    <div class="menu"><h1>Меню2</h1></div>
    <div class="container">
        <div class="blockd bl1">
            <h1>Block1</h1>
            <div class="mainbl1">
                <h3>LEFT</h3>
                <div class="insidemain">
                    <div class="ins1">
                        <h3>a-left</h3>
                    </div>
                    <div class="ins2">
                        <h3>b-left</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="blockd bl2">
            <h1>Block2</h1>
            <div class="mainbl2">
                <div class="ins ml1"></div>
                <div class="ins ml2">
                    <h3>a-center</h3>
                    <div class="ml2main">
                        <div class="ml2blocks1"><h3>A-C</h3></div>
                        <div class="ml2blocks2"><h3>B-C</h3></div>
                    </div>
                </div>
                <div class="ins ml3"></div>
            </div>
        </div>
        <div class="blockd bl3">
            <h1>Block3</h1>
            <div class="mainbl3">
                <div class="ins ml4"></div>
                <div class="ins ml5"></div>
                <div class="ins ml6">
                    <div class="texts">
                        <h4 class="gg1">text</h4>
                        <h4 class="gg2">text</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
      }



      css={
        `*{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

body{
    border: 2px red solid;
    height: 100%;
}

header{
    background-color: purple;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

header h1{
    color: whitesmoke;
    text-align: center;
    padding: 2px 4px;
}

header a{
    color: whitesmoke;
    text-align: center;
    padding: 2px 5px;
    background-color: green;
    margin-right: 10px;
    border-radius: 5px;
    text-decoration: none;
}

.block-header{
    height: 100px;
    width: 600px;
    background-color: black;
    border: 40px white solid;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu{
    width: 100%;
    background-color: gray;
    color: whitesmoke;
}

.menu h1{
    text-align: center;
    padding: 2px 4px;
}

.flexbox{
    display: flex;
    width: 100%;
}

.flexbox .block{
    height: 200px;
    width: 100%;
}

.cl1{
    background-color: red ;
}

.cl2{
    background-color: orange ;
}

.cl3{
    background-color:aqua;
}

.cl4{
    background-color: yellow;
}

.container{
    display: flex;
    height: 440px;
}

.blockd{
    height: 100%;
    width: 33.33%;
}

.blockd h1{
    text-align: center;
}

.bl1{
    background-color: green;
    justify-content: space-between;
    flex-direction: column;
    display: flex;
    align-items: center;
}

.mainbl1{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: orange;
    width: 70%;
    height: 80%;
    
}

.insidemain{
    display: flex;
    width: 100%;
    height: 80%;
    align-self: center;
}

.ins1{
    width: 50%;
    height: 100%;
    background-color: pink;
}

.ins2{
    width: 50%;
    height: 100%;
    background-color: yellow;
}

.bl2{
    background-color:aqua;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.mainbl2{
    display: flex;
    width: 100%;
    height: 80%;
}

.ins{
    width: 33.33%;
    height: 100%;
}

.ml1{
    background-color: red;
}

.ml2{
    background-color: yellow;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.ml2main{
    display: flex;
    width: 100%;
    height: 80%;
    align-items: flex-end;
}

.ml2blocks1{
    width: 50%;
    height: 100%;
    background-color: orange;
}

.ml2blocks2{
    width: 50%;
    height: 50%;
    background-color: red;
}

.ml3{
    background-color: orange;
}

.bl3{
    background-color: blue;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.mainbl3{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 80%;
}

.ml4{
    background-color: aqua;
    height: 40%;
    align-self: flex-end;
}

.ml5{
    background-color: yellow;
    height: 40%;
    align-self: center;
}

.ml6{
    background-color: orange;
    height: 40%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
}

.texts{
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.texts h4{
    background-color: black;
    color: white;
    padding: 5px 5px;
}

.gg1{
    align-self: flex-end;
}

.gg2{
    align-self: flex-start;
}
`
      }



      js={
        `Пусто`
      }
    />
  );
}
