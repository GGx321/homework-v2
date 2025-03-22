import HomeworkTemplate from "@/modules/HomeworkTemplate";

export default function Homework9() {
  return (
    <HomeworkTemplate
      title="Домашнее задание 9"
      description="Не помню что тут надо было. Вроде блоки просто прописать которые мы учили."
      fileUrl="/files/homework9.zip"
      html={
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Форма</title>
</head>
<body>
    <header>
        <h3>Заполните форму и идите дальше "я поставил js на проверку полей, поиграйтесь"</h3>
        <div class="buttons">
            <a href="../hm.html" rel="noopener noreferrer">Домой</a>
            <a href="lesson2/index.html" rel="noopener noreferrer">След. Задание</a>
        </div>
    </header>
    <main>
        <form id="registrationForm">
            <h3>Регистрация</h3>
            <div class="first-block">
                <label for="fname">Ваше Имя:*</label>
                <label for="lname">Ваша Фамилия:*</label>
                <input type="text" placeholder="Введите ваше Имя" name="fname" id="fname">
                <input type="text" placeholder="Введите вашу Фамилию" name="lname" id="lname">
                <div id="lname-error" class="error-message first-block-message">Эти поля обязательно для заполнения!</div>
            </div>
            <div>
                <label for="date">Дата Рождения:*</label>
                <input type="date" name="date" id="date">
                <div id="date-error" class="error-message">Это поле обязательно для заполнения!</div>
            </div>
            <div>
                <p>Выберите ваш Пол:*</p>
                <input type="radio" name="sex" id="male"><label for="male">Мужчина</label>
                <input type="radio" name="sex" id="fmale"><label for="fmale">Женщина</label>
                <div id="sex-error" class="error-message">Выберите ваш пол!</div>
            </div>
            <div>
                <p>Выберите ваш Возраст:*</p>
                <select name="age" id="age">
                    <option value="">Выберите возраст</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                </select>
                <div id="age-error" class="error-message">Это поле обязательно для заполнения!</div>
            </div>
            <div>
                <label for="pass1">Введите ваш Пароль:*</label>
                <input type="password" placeholder="Введите Пароль" name="pass1" id="pass1">
                <div id="pass1-error" class="error-message">Это поле обязательно для заполнения!</div>
            </div>
            <div>
                <label for="pass2">Повторите Пароль:*</label>
                <input type="password" placeholder="Повторите Пароль" name="pass2" id="pass2">
                <div id="pass2-error" class="error-message">Это поле обязательно для заполнения!</div>
                <div id="error-message" class="error-message">Пароли не совпадают!</div>
            </div>
            <div>
                <label for="title">Опишите себя:</label>
                <textarea name="title" id="title"></textarea>
            </div>
            <button type="submit">Подтвердить</button>
        </form>
    </main>
    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.style.display = 'none');

            let formIsValid = true;

            const fname = document.getElementById('fname');
            const lname = document.getElementById('lname');
            const date = document.getElementById('date');
            const sex = document.querySelector('input[name="sex"]:checked');
            const age = document.getElementById('age');
            const pass1 = document.getElementById('pass1');
            const pass2 = document.getElementById('pass2');

            if (!fname.value) {
                fname.classList.add('error');
                formIsValid = false;
            } else {
                fname.classList.remove('error');
            }

            if (!lname.value) {
                document.getElementById('lname-error').style.display = 'block';
                lname.classList.add('error');
                formIsValid = false;
            } else {
                lname.classList.remove('error');
            }

            if (!date.value) {
                document.getElementById('date-error').style.display = 'block';
                date.classList.add('error');
                formIsValid = false;
            } else {
                date.classList.remove('error');
            }

            if (!sex) {
                document.getElementById('sex-error').style.display = 'block';
                formIsValid = false;
            }

            if (!age.value) {
                document.getElementById('age-error').style.display = 'block';
                age.classList.add('error');
                formIsValid = false;
            } else {
                age.classList.remove('error');
            }

            if (!pass1.value) {
                document.getElementById('pass1-error').style.display = 'block';
                pass1.classList.add('error');
                formIsValid = false;
            } else {
                pass1.classList.remove('error');
            }

            if (!pass2.value) {
                document.getElementById('pass2-error').style.display = 'block';
                pass2.classList.add('error');
                formIsValid = false;
            } else {
                pass2.classList.remove('error');
            }

            if (pass1.value && pass2.value && pass1.value !== pass2.value) {
                document.getElementById('error-message').style.display = 'block';
                formIsValid = false;
            } else {
                document.getElementById('error-message').style.display = 'none';
            }

            if (formIsValid) {
                alert('Форма отправлена');
            }
        });
    </script>
</body>
</html>`
      }



      css={
        `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #252525;
}

header{
    color: whitesmoke;
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 5%;
}

.buttons a{
    margin-right: 20px;
}

header a{
    color: rgb(36, 36, 36);
    text-decoration: none;
    background-color: aquamarine;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all .4s;
}

header a:hover{
    color: rgb(36, 36, 36);
    text-decoration: none;
    background-color: rgb(170, 170, 170);
    border-radius: 5px;
    padding: 5px 10px;
}

main{
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
}

form{
    color: whitesmoke;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-between;
    background-color: gray;
    width: 450px;
    height: 700px;
    border-radius: 15px;
}

.cont{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.error {
    border: 2px solid red;
}
.error-message {
    position: absolute;
    top: 45px;
    left: 55px;
    color: rgb(202, 2, 2);
    font-size: 14px;
    margin-bottom: 5px;
    display: none;
    font-weight: bold;
}

form h3{
    text-align: center;
    margin-bottom: 15px;
}

form div{
    position: relative;
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
    padding: 0 15px 0 15px;
}

.first-block{
    padding: 15px 15px 0 15px;
    border-top: 2px solid black;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.first-block input{
    justify-self: center;
    height: 30px;
    width: 80%;
}

.first-block-message{
    top: 80px;
    left: 55px;
}

input[type="text"] {
    background-color: #f0f0f0; 
    border: 2px solid #ccc; 
    border-radius: 5px; 
    padding: 10px; 
    font-size: 16px; 
    width: 100%; 
    transition: all 0.3s ease; 
}

input[type="text"]:focus {
    border-color: #007bff; 
    outline: none; 
    background-color: #ffffff; 
}

input[type="text"].error {
    border-color: #ff0000; 
    outline: none; 
    background-color: #ffffff; 
}

input[type="password"] {
    background-color: #f0f0f0; 
    border: 2px solid #ccc; 
    border-radius: 5px; 
    padding: 10px; 
    font-size: 16px; 
    width: 50%; 
    transition: all 0.3s ease; 
}

input[type="password"]:focus {
    border-color: #007bff; 
    outline: none; 
    background-color: #ffffff; 
}

input[type="password"].error {
    border-color: #ff0000; 
    outline: none; 
    background-color: #ffffff; 
}

input[type="date"] {
    background-color: #f0f0f0; 
    border: 2px solid #ccc; 
    border-radius: 5px; 
    padding: 10px; 
    font-size: 16px; 
    width: 50%; 
    transition: all 0.3s ease; 
}

input[type="date"]:focus {
    border-color: #007bff; 
    outline: none; 
    background-color: #ffffff; 
}

input[type="date"].error {
    border-color: #ff0000; 
    outline: none; 
    background-color: #ffffff;
}

button{
    align-self: center;
    width: 155px;
    height: 55px;
}

`
      }



      js={
        `Пусто`
      }
    />
  );
}
