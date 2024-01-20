const containerEl = document.querySelector('.genre__container')
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
})

mixer.filter('.category-a');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        1024: {
            slidesPerView: 2, 
        }
    }
  });

  const navMenu = document.querySelector('.nav__menu')
  const navOpenBtn = document.querySelector('.nav__toggle-open')
  const navCloseBtn = document.querySelector('.nav__toggle-close')

  const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
  }

  const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
  }

  navOpenBtn.addEventListener('click', openNavHandler)
  navCloseBtn.addEventListener('click', closeNavHandler)

  const themeBtn = document.querySelector('.nav__theme-btn');
  themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
        window.localStorage.setItem('theme', bodyClass);
    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
        window.localStorage.setItem('theme', bodyClass);
    }
  })

  window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
  })