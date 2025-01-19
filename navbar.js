document.addEventListener('DOMContentLoaded', function () {
    // Абсолютный путь к navbar.html
    fetch('/navbar.html') // Если ваш проект развёрнут в подкаталоге, укажите путь, например: '/myproject/navbar.html'
      .then(response => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки navbar: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data; // Вставляем содержимое в контейнер
        initializeNavbar(); // Инициализируем логику навигации после загрузки
      })
      .catch(error => console.error('Ошибка загрузки navbar:', error));
  });
  
  function initializeNavbar() {
    // Убедимся, что DOM обновлен и все элементы navbar загружены
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const dropbtn = dropdown.querySelector('.dropbtn');
  
      dropbtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Переключаем класс "show" для отображения/скрытия меню
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show'); // Скрыть меню
        } else {
          dropdown.classList.add('show'); // Показать меню
        }
      });
    });
  
    // Закрытие меню при клике вне его
    document.addEventListener('click', (event) => {
      dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        // Закрываем меню, если клик был вне меню
        if (!dropdown.contains(event.target) && !dropbtn.contains(event.target)) {
          dropdown.classList.remove('show');
        }
      });
    });
  
    // Обработчик для мобильного меню
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
  
    if (menuIcon && navbar) {
      menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle("show");
      });
    }
  }
  