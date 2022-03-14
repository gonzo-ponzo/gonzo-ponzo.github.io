document.addEventListener('DOMContentLoaded', function() {
  // объявляем якоря для плавного скролла по ссылкам
  const anchors = document.querySelectorAll('.custom-scroll');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    });
  }

  // обработчик появления раскрывашки поиска в адаптиве
  document.querySelector('.header__search').addEventListener('click', function(event) {
    event.currentTarget.classList.add('header__search--closed');
    document.querySelector('.header__form').classList.add('header__form--opened');
  });

  // обработчик закрытия поиска при клике мимо него
  document.addEventListener('click', function(eventSearch){
    if (!eventSearch.target.classList.contains('non-target') && !eventSearch.target.classList.contains('header__search-btn') && !eventSearch.target.classList.contains('header__search-row')){
      document.querySelector('.header__form').classList.remove('header__form--opened');
      document.querySelector('.header__search').classList.remove('header__search--closed');
    }
  });

  // объявляем слайдер в секции hero
  const heroSwiper = new Swiper('.hero__swiper', {
    effect: 'fade',

    loop:true,

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд'
    },

    autoplay: {
      delay: 4000,
    },

    speed: 2000,

    spaceBetween: 30,
  });

  // обработчик клика по бургер меню.
  const Burger = document.querySelector('.burger__menu');
  document.querySelector('.burger__button-1').addEventListener('click', function() {
    Burger.classList.add('burger__menu--active');
    document.querySelector('body').classList.add('overflow--hidden');
  });
  document.querySelector('.burger__button-2').addEventListener('click', function() {
    Burger.classList.add('burger__menu--active');
    document.querySelector('body').classList.add('overflow--hidden');
  });
  document.querySelector('.header__close').addEventListener('click', function() {
    Burger.classList.remove('burger__menu--active');
    document.querySelector('body').classList.remove('overflow--hidden');

  });


  // обработчик клика по подменю в секции hero. Клик = открытие меню
  document.querySelectorAll('.hero__menu-btn').forEach(function (heroMenuBtn) {
    heroMenuBtn.addEventListener('click', function(event) {
      const currentButton = event.currentTarget;
      currentButton.classList.toggle('hero__menu-btn--active');
      if (event.currentTarget.classList.contains('hero__menu-btn--active')) {
        document.querySelectorAll('.hero__menu-btn').forEach(function (everyBtn) {
          if (everyBtn != currentButton) {
            everyBtn.classList.remove('hero__menu-btn--active');
          }
        });
      }
    });
  });
  
  // обработчик закрытия подменю в секции hero при клике мимо кнопки/подменю
  document.addEventListener('click', function(event){
    if (!event.target.classList.contains('hero__menu-btn') && !event.target.classList.contains('hero__submenu')){
      document.querySelectorAll('.hero__menu-btn').forEach(function(heroMenuBtn){
        heroMenuBtn.classList.remove('hero__menu-btn--active');
      });
    }
  });

  // объявляем селект в секции галереи
  const element = document.querySelector('#select');
  const choices = new Choices(element, {
    itemSelectText: '',
    searchEnabled: false,
    position: 'bottom',
    shouldSort: false
  });

  // объявляем слайдер в секции галереи
  const gallerySwiper = new Swiper('.gallery__swiper', {

    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
      clickable: true,
      observer: true,
      resizeObserver: true,
      centeredSlides: true,
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд'
    },
  
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        grid: {
          rows: 1,
        },
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1640: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      }
    }
  });

  // объявляем аккордион
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: 'content'
    });
  });

  // открытие таба художника при клике по его имени в аккордионе
  document.querySelectorAll('.catalog__artist').forEach(function(artist) {
    artist.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__artist').forEach(function(artistBtn) {
        artistBtn.classList.remove('catalog__artist--active');
      });
      event.currentTarget.classList.add('catalog__artist--active');

      document.querySelectorAll('.catalog__tab').forEach(function(tab) {
        tab.classList.remove('catalog__tab--active');
      });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab--active');
    });
  });

  // объявляем слайдер в секции событий
  const eventSwiper = new Swiper('.events__swiper', {
    navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд'
    },

    pagination: {
      el: ".events__swiper-pagination",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        grid: {
          rows: 1,
        },

      },
      600: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1640: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      }
    }
  });

  //объявяем тултипы в секции проектов
  tippy('#tooltip-1', {
    theme: 'custom',
    content: 'Пример современных тенденций - современная методология разработки',
    duration: [600, 600],
    maxWidth: 270,
  
  });
  tippy('#tooltip-2', {
    theme: 'custom',
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    duration: [600, 600],
    maxWidth: 270,
  });
  tippy('#tooltip-3', {
    theme: 'custom',
    content: 'В стремлении повысить качество',
    duration: [600, 600],
    maxWidth: 270,
  });

  // объявляем слайдер в секции проектов
  const projectsSwiper = new Swiper('.projects__swiper', {
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд'
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        grid: {
          rows: 1,
        },
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },
      1640: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      }
    }
  });

  // объявляем инпут и селектор для формы в секции контакты
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7(999)-999-99-99");

  im.mask(selector);
  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 4,
        maxLength: 30
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
  });

  // объявляем яндекс карту, устанавливаем маркер
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.758468, 37.601088],
            zoom: 17
        },
        {
            searchControlProvider: 'yandex#search'
        }),
  
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
  
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Шоурум № 4'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/yandex-marker.svg',
            iconImageSize: [28, 40],
            iconImageOffset: [-14, -40]
        });
  
    myMap.geoObjects
        .add(myPlacemark);
  });

  var oldWidth = window.innerWidth;
  window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
      eventSwiper.reInit()
      oldWidth = newWidth;
    }
  };
  
});