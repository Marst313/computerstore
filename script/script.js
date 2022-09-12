'use strict';

// Navbar fixed

window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const backTop = document.querySelector('#btn-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    backTop.classList.add('flex');
    backTop.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    backTop.classList.remove('flex');
    backTop.classList.add('hidden');
  }
};

// selector hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Hamburger event
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// close hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// selector dots
function dots1() {
  const allCard1 = document.querySelectorAll('.card-1');
  const dots1 = document.querySelector('.dots-1');
  const allIklan1 = document.querySelectorAll('.iklan-1');

  // create dots button #1
  function createDots() {
    allCard1.forEach((_, el) => {
      dots1.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-card="${el}" data-num="${el}"></button>`);
    });
  }

  // Mengaktifkan dots pertama #1
  const activateDots = function (position) {
    document.querySelectorAll('.dots_dot').forEach((el) => el.classList.remove('dots__dot--active'));

    document.querySelector(`.dots_dot[data-card="${position}"]`).classList.add('dots__dot--active');
  };

  function init() {
    createDots();
    activateDots(0);
  }
  // inisialisasi dot #1
  init();

  // Menggeser dot VGA
  dots1.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots_dot')) {
      const { card } = e.target.dataset;

      // goToSlide(slide);
      activateDots(card);
    }
  });
  const dots1Container = document.querySelectorAll('.dots_dot');

  // Menggeser slide VGA
  dots1Container.forEach((el) => {
    el.addEventListener('click', function (e) {
      allIklan1.forEach((el) => {
        el.classList.add('hidden');
      });

      const { card } = e.target.dataset;
      if (!card) return;
      allCard1[card].closest('.card-item').classList.remove('hidden');
    });
  });
}

// ////////////////////////////!

// # dots 2 activate
function dots2() {
  const allDots2 = document.querySelectorAll('.dots_dot-2');
  const dots2 = document.querySelector('.dots-2');
  const dots2Container = document.querySelectorAll('.dots_dot-2');
  const allIklan2 = document.querySelectorAll('.iklan-2');

  function activateDots2(position) {
    allDots2.forEach((el) => {
      el.classList.remove('dots__dot--active');
    });

    allDots2[position].classList.add('dots__dot--active');
  }

  activateDots2(0);

  // Menggeser dots PSU #2
  dots2.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots_dot-2')) {
      const { card } = e.target.dataset;
      activateDots2(card);
    }
  });

  // selector #3

  dots2Container.forEach((el) => {
    el.addEventListener('click', function (e) {
      allIklan2.forEach((el) => {
        el.classList.add('hidden');
      });
      const { card } = e.target.dataset;
      if (!card) return;
      allIklan2[card].classList.remove('hidden');
    });
  });
}

// ////////////////////////////!

function dots3() {
  // Selector #3
  const allDots3 = document.querySelectorAll('.dots_dot-3');
  const dots3 = document.querySelector('.dots-3');
  const dots3Container = document.querySelectorAll('.dots_dot-3');
  const allIklan3 = document.querySelectorAll('.iklan-3');

  // Activate dots #3
  function activateDots3(position) {
    allDots3.forEach((el) => el.classList.remove('dots__dot--active'));
    allDots3[position].classList.add('dots__dot--active');
  }

  activateDots3(0);

  // menggeser dots #3
  dots3.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots_dot-3')) {
      const { card } = e.target.dataset;
      activateDots3(card);
    }
  });

  // Mengganti gambar #3
  dots3Container.forEach((el) => {
    el.addEventListener('click', function (e) {
      const { card } = e.target.dataset;
      if (!card) return;

      allIklan3.forEach((element) => element.classList.add('hidden'));
      allIklan3[card].classList.remove('hidden');
    });
  });
}
// Button animation
dots1();
dots2();
dots3();
