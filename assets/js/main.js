/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const lessons = document.querySelectorAll('.lesson');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Show/hide lessons based on filter
            lessons.forEach(lesson => {
                if (filter === '*') {
                    lesson.style.display = 'block'; // Show all lessons
                } else if (filter === '.html' && lesson.classList.contains('html')) {
                    lesson.style.display = 'block'; // Show HTML lessons
                } else if (filter === '.css' && (lesson.classList.contains('css') || lesson.classList.contains('html'))) {
                    lesson.style.display = 'block'; // Show CSS lessons
                } else if (filter === '.javascript' && lesson.classList.contains('javascript')) {
                    lesson.style.display = 'block'; // Show JavaScript lessons
                } else {
                    lesson.style.display = 'none'; // Hide lesson
                }
            });
        });
    });
});