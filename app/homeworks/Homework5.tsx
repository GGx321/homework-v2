import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework5() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 5"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework5.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <nav>
        <a href="pages/owerflow.html">overflow </a>
        <a href="pages/display.html">display & visibility</a>
        <a href="pages/float.html">float</a>
    </nav>
    <section>
        <h1>Музыкантов взял у ChatGPT (я не знаю биографии тех кого слушаю)</h1>
        <br>
        <ul>
            <li>
                <div class="name">Freddie Mercury</div>
                <div class="bio">
                    Lead vocalist of Queen, known for his powerful voice and flamboyant stage presence.
                </div>
            </li>
            <li>
                <div class="name">Ludwig van Beethoven</div>
                <div class="bio">
                    Classical composer whose works include symphonies, concertos, and piano sonatas.
                </div>
            </li>
            <li>
                <div class="name">Taylor Swift</div>
                <div class="bio">
                    Pop and country music artist known for her storytelling and chart-topping hits.
                </div>
            </li>
        </ul>
    </section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis nostrum dolorum magnam animi placeat, ipsa eius quibusdam maxime, doloribus cum voluptas nesciunt excepturi quod dolor, voluptates ducimus eos neque.
        Magni, nihil! Voluptatem nulla saepe quam illum nobis rerum similique suscipit molestias eius adipisci voluptates placeat dignissimos excepturi ea, cumque sint, praesentium mollitia corrupti aperiam repellendus. Natus laboriosam quidem culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quod tenetur temporibus, quis eaque ab sunt sint fugiat at optio perspiciatis nihil nostrum quae nobis excepturi minus cumque possimus saepe.
        Itaque, earum possimus officiis, quidem cupiditate aliquam accusantium qui eveniet ut ea perspiciatis! Expedita sit alias provident non nulla delectus quisquam magni est. Placeat dicta ut modi magni. Perferendis, asperiores!
        A aut eaque minus inventore saepe eius repellendus veniam corrupti recusandae, sit eligendi nostrum iste reprehenderit nisi optio! Explicabo fugiat quidem provident odio voluptates quos consequatur voluptatem vitae ipsum dolorem?
        Alias doloremque, commodi dignissimos in aspernatur blanditiis odio voluptates praesentium adipisci veniam officia quisquam fugiat voluptatibus maiores eius ex nostrum quidem accusantium earum consequatur quos ducimus numquam dolorem? Id, nam?
        Quidem facilis nihil quos officia quibusdam explicabo minima nesciunt ab soluta sunt illum aliquid excepturi nulla doloribus repellendus aspernatur, numquam velit amet aliquam eius dolorum sequi. Porro excepturi recusandae sapiente.
        Velit reiciendis laborum quo tenetur quia iusto doloribus natus cupiditate doloremque officia saepe modi, laboriosam accusamus enim beatae adipisci quod officiis numquam alias voluptates est voluptatem quasi error. Cumque, ut.
        Quasi asperiores earum nihil ratione! Labore, sequi. Quia eos rerum optio eum delectus tempora dolores doloremque impedit, eveniet earum consectetur perferendis vitae accusantium animi atque debitis in dolorum perspiciatis voluptate.
        Non nemo ducimus eligendi nam error itaque! Iure voluptatibus laboriosam incidunt et quaerat asperiores ad ipsa ut repudiandae veniam quisquam, possimus cum, animi fuga? Qui ipsam magnam suscipit vero porro!
        Libero doloremque tenetur, sint unde, quam quisquam sunt ad labore laboriosam aliquam, numquam beatae. Recusandae ratione dicta iure eum laboriosam eaque labore architecto veniam, quod suscipit quae nemo sunt molestiae.
        Est temporibus quam sequi dolorem beatae similique maiores aperiam, quasi natus, doloribus aliquid tempora neque incidunt earum iste consequuntur voluptatem harum minima quis pariatur non exercitationem reiciendis autem? Cum, in!</p>
        <div class="block k2"></div>
    <div class="blocks">
        <div class="block k"></div>
        <div class="block k3"></div>
        <div class="block k4"></div>
        <div class="block k5"></div>
    </div>
</body>
</html>`
      }



      css={
        `body {
    font-family: Arial, sans-serif;
}

nav{
    top: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 5px;
}

a{
    text-decoration: none;
    color: whitesmoke;
    background-color: firebrick;
    padding: 8px 7px;
    border-radius: 5px;
}

section{
    margin-top: 105px;
}

ul {
    list-style-type: none;
}

li {
    border: 2px solid #000;
    margin: 20px 0;
    padding: 15px;
    position: relative;
    background-color: #f9f9f9;
}

.name {
    position: absolute;
    top: -20px;
    left: 10px;
    background-color: #311a1a;
    color: whitesmoke;
    padding: 5px 10px;
    border: 1px solid #000;
}

.bio {
    margin-top: 10px;
}

.owel{
    width: 200px;
    background-color: #000;
    color: whitesmoke;
    height: 100px;
    overflow: auto;
}
.owel2{
    width: 200px;
    background-color: #000;
    color: whitesmoke;
    height: 100px;
    overflow: scroll;
}
.owel3{
    width: 200px;
    background-color: #000;
    color: whitesmoke;
    height: 100px;
    overflow: hidden;
}
.owel4{
    width: 200px;
    background-color: #000;
    color: whitesmoke;
    height: 100px;
    overflow: hidden;
}

.flex{
    color: whitesmoke;
    display: flex;
    background-color: #311a1a;
    align-items: center;
    justify-content: space-between;
}

.flex .owel{
    visibility: hidden;
}
.flex .owel2{
    visibility:collapse;
}
.flex .owel3{
    visibility: visible;
}
.flex .owel4{
    display: none;
}
.flex h1{
    color: whitesmoke;
}

.ff{
    height: 100px;
    width: 100%;
    background-color: aliceblue;
    color: #000;
}

.float{
    float: right;
}
.float2{
    float: left;
}
.float3{
    float: right;
}
.float4{
    float: left;
}

.block{
    height: 200px;
    width: 200px;
    border: red 2px solid;
}

.k{
    position: static;
    background-color: red;
}
.k2{
    position: sticky;
    background-color: blue;
    bottom: 1px;
    left: 700px;
}
.k3{
    position: absolute;
    background-color: yellow;
    right: 200px;
}
.k4{
    position: relative;
    background-color: green;
    left: 180px;
}
.k5{
    position: fixed;
    background-color: purple;
    left: 410px;
    top: 500px;
}

P{width: 300px;}`
      }



      js={
        `Пусто`
      }
    />
  );
}
