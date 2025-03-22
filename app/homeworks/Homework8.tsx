import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework8() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 8"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework8.zip"
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
            <a href="lesson2/index.html" id="a">Второе задание</a>
        </div>
    </header>
    <div class="menu"><h1>Меню</h1></div>
    <div class="grid-block">
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
                 <div class="ins1">
                    <h3>a-left</h3>
                </div>
                <div class="ins2">
                    <h3>b-left</h3>
                </div>
            </div>
        </div>
        <div class="blockd bl2">
            <h1>Block2</h1>
            <div class="mainbl2">
                <div class="ml1"></div>
                <div class="ml2">
                    <h3>a-center</h3>
                    <div class="ml2main">
                        <div class="ml2blocks1"><h3>A-C</h3></div>
                        <div class="ml2blocks2"><h3>B-C</h3></div>
                    </div>
                </div>
                <div class="ml3"></div>
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
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas: 
    " . . h1 h1 h1 . . "
    ". . . . . . ."
    " . . block block block . ."
    ". . . . . . ."
    ". . . . . . .";
    animation: moveup 1.5s;
}

@keyframes moveup {
    0%{
        transform: translateY(-200px);
    }

    100%{
        transform: translateY(0);
    }
}

header h1{
    color: whitesmoke;
    grid-area: h1;
    justify-self: center;
}

.block-header{
    display: grid;
    background-color: black;
    grid-area: block;
    border: 45px white solid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
    "blockh1 blockh1 blockh1 blockh1 ."
    "blockh1 blockh1 blockh1 blockh1 a"
    "blockh1 blockh1 blockh1 blockh1 .";
}

.block-header h1{
    color: whitesmoke;
    grid-area: blockh1;
    justify-self: center;
    align-self: center;
    animation: spin 2s, zoom 2s infinite;
}

@keyframes spin {
    0%{
        transform: translateX(400px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
    100%{
        transform: translateX(0px) rotateX(0deg) rotateY(0deg) rotateZ(360deg);
    }
}

@keyframes zoom {
    0%{
        transform: scale(1);
    }
    20%{transform: scale(1.05);}
    40%{transform: scale(1);}
    60%{transform: scale(1.05);}
    100%{transform: scale(1);}
}

#a{
    color: whitesmoke;
    justify-self: center;
    align-self: center;
    padding: 2px 5px;
    background-color: green;
    margin-right: 10px;
    border-radius: 5px;
    text-decoration: none;
    grid-area: a;
    transition: .5s;
}

header #a:hover{
    background-color: rgb(0, 92, 0);
}

header #a:active{
    background-color: rgb(0, 92, 0);
    transform: scale(.9);
}

.menu{
    width: 100%;
    background-color: gray;
    color: whitesmoke;
    animation: menumove 2s;
}

@keyframes menumove {
    0%{
        transform: translateX(400px);
    }
    70%{
        transform: translateX(-10px);
    }
    100%{
        transform: translateX(0);
    }
}

.menu h1{
    text-align: center;
    padding: 2px 4px;
}

.grid-block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
}

.grid-block .block{
    height: 200px;
}

.cl1 , .cl2 , .cl3 , .cl4{
    background-color: red ;
}

.cl1{
    animation: moveupv2 1s, multiBlink 1s infinite;
}

.cl2{
    animation: moveupv2 1.3s, multiBlink1 1s infinite;;
}

.cl3{
    animation: moveupv2 1.6s, multiBlink2 1s infinite;;
}

.cl4{
    animation: moveupv2 2s, multiBlink3 1s infinite;;
}

@keyframes moveupv2{
    0%{
        transform: translateY(200px);
        filter: brightness(0);
        opacity: 0;
    }

    50%{
        opacity: .2;
    }
    100%{
        transform: translateY(0);
        filter: brightness(1);
        opacity: 1;
    }
}

@keyframes multiBlink {
    0% { background-color: red; opacity: 1; filter: blur(10px);}
    25% { background-color: yellow; opacity: 0.5; filter: blur(0px);    }
    50% { background-color: blue; opacity: 1; filter: blur(10px);}
    75% { background-color: green; opacity: 0.5; filter: blur(0px);}
    100% { background-color: red; opacity: 1; filter: blur(10px);}
}
@keyframes multiBlink1 {
    0% { background-color: blue; opacity: 1; filter: blur(10px);}
    25% { background-color: green; opacity: 0.5; filter: blur(0px);}
    50% { background-color: red; opacity: 1; filter: blur(10px);}
    75% { background-color: yellow; opacity: 0.5; filter: blur(0px);}
    100% { background-color: blue; opacity: 1; filter: blur(10px);}
}
@keyframes multiBlink2 {
    0% { background-color: green; opacity: 1; filter: blur(10px);}
    25% { background-color: blue; opacity: 0.5; filter: blur(0px);}
    50% { background-color: yellow; opacity: 1; filter: blur(10px);}
    75% { background-color: red; opacity: 0.5; filter: blur(0px);}
    100% { background-color: green; opacity: 1; filter: blur(10px);}
}
@keyframes multiBlink3 {
    0% { background-color: yellow; opacity: 1; filter: blur(10px);}
    25% { background-color: red; opacity: 0.5; filter: blur(0px);}
    50% { background-color: green; opacity: 1; filter: blur(10px);}
    75% { background-color: blue; opacity: 0.5; filter: blur(0px);}
    100% { background-color: yellow; opacity: 1; filter: blur(10px);}
}


.container{
    display: grid;
    height: 440px;
    grid-template-columns: 1fr 1fr 1fr;
}

.container .blockd:last-child{
    animation: con3 2s;
}

.container .blockd:first-child{
    animation: con3 1s;
}

.container .blockd{
    animation: con3 1.5s;
}

@keyframes con3{
    0%{
        transform: translateY(200px);
    }
    100%{
        transform: translateY(0);
    }
}

.blockd{
    height: 100%;
    width: 100%;
    filter: blur(10px);
}

.blockd:hover{
    filter: blur(0px);
}

.blockd h1{
    align-self: self-start;
    grid-area: h1h1;
    justify-self: center;
}

.bl1{
    background-color: green;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 100px 1fr 1fr;
    grid-template-areas: 
    ". . h1h1 h1h1 h1h1 . ."
    ". mainbl1 mainbl1 mainbl1 mainbl1 mainbl1 ."
    ". mainbl1 mainbl1 mainbl1 mainbl1 mainbl1 .";
}

.mainbl1{
    background-color: orange;
    grid-area: mainbl1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
    "mainh3 mainh3"
    "ins1 ins2";
}

.mainbl1 h3{
    justify-self: center;
    grid-area: mainh3;
}

.ins1{
    background-color: pink;
    grid-area: ins1;
}

.ins2{
    background-color: yellow;
    grid-area: ins2;
}

.bl2{
    background-color:aqua;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 100px 1fr 1fr;
    grid-template-areas: 
    ". . h1h1 h1h1 h1h1 . ."
    "mainbl2 mainbl2 mainbl2 mainbl2 mainbl2 mainbl2 mainbl2"
    "mainbl2 mainbl2 mainbl2 mainbl2 mainbl2 mainbl2 mainbl2";
}

.mainbl2{
    grid-area: mainbl2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
}

.ml1{
    background-color: red;
}

.ml2{
    background-color: yellow;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas: 
    "ml2h3 ml2h3"
    "ml2main ml2main";
}

.ml2 h3{
    grid-area: ml2h3;
    justify-self: center;
}

.ml2main{
    grid-area: ml2main;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
    "ml2blocks1 ."
    "ml2blocks1 ml2blocks2";
}

.ml2blocks1{
    grid-area: ml2blocks1;
    background-color: orange;
}

.ml2blocks2{
    grid-area: ml2blocks2;
    background-color: red;
}

.ml3{
    background-color: orange;
}

.bl3 h1{
    grid-area: ml3h3;
    justify-self: center;
}

.bl3{
    background-color: blue;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
    "ml3h3 ml3h3 ml3h3"
    "mainbl3 mainbl3 mainbl3"
    "mainbl3 mainbl3 mainbl3";
}

.mainbl3{
    grid-area: mainbl3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas: 
    " . . ml6"
    ". ml5 ml6"
    ". ml5 ml6"
    "ml4 ml5 ."
    "ml4 . ."
    "ml4 . .";
}

.ml4{
    background-color: aqua;
    grid-area: ml4;
}

.ml5{
    background-color: yellow;
    grid-area: ml5;
}

.ml6{
    background-color: orange;
    grid-area: ml6;
}

.texts{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas: 
    ". . ."
    ". gg1 gg1"
    ". . ."
    "gg2 gg2 ."
    ". . .";
}

.texts h4{
    background-color: black;
    color: white;
    padding: 5px 0px;
    width: 100%;
}

.gg1{
    grid-area: gg1;
    text-align: center;
}

.gg2{
    grid-area: gg2;
    text-align: center;
}
`
      }



      js={
        `Пусто`
      }
    />
  );
}
