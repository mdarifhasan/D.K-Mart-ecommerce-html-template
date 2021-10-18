// Header

/**
 * Navbar
 */

const menuBtn = document.querySelector('#menu-btn');
const headerNav = document.querySelector('.header .navbar');

menuBtn.addEventListener('click',()=>{
    headerNav.classList.toggle('active');
});
/**
 * Search form
 */

const searchClose = document.querySelector('header .search-form .fa-times');
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

searchClose.addEventListener('click',()=>{
    searchForm.classList.add('hide');
    searchForm.classList.remove('show');
    
});
searchBtn.addEventListener('click',()=>{
    searchForm.classList.add('show');
    searchForm.classList.remove('hide');
})
/**
 * Shopping cart
 */
const shoppingCart = document.querySelector('.shopping-cart');
const cartClose = document.querySelector('i.shopping-cart-close');
const cartBtn = document.querySelector('#cart-btn');

cartClose.addEventListener('click',()=>{
    shoppingCart.style.transform = 'translateX(100%)';
});
cartBtn.addEventListener('click',()=>{
    shoppingCart.style.transform = 'translateX(0%)';
});
/**
 * Login form
 */
const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click',()=>{
   loginForm.classList.toggle('active')
});
/**
 * home Slider
 */
 const nextBtn = document.querySelector('.home .slides .next');
 const prevBtn = document.querySelector('.home .slides .prev');
 
 let slides = document.querySelectorAll('.home .slides .slide');
 let index = 0;
 function nextSlide() {
     slides[index].classList.remove('active');
     index = (index + 1) % slides.length;
     slides[index].classList.add('active');
 }
 function prevSlide() {
     slides[index].classList.remove('active');
     index = (index - 1 + slides.length) % slides.length;
     slides[index].classList.add('active');
 
 }
 nextBtn.addEventListener('click',()=>{
     nextSlide();
     console.log('next');
    })
    prevBtn.addEventListener('click',()=>{
     console.log('prev');
     prevSlide();
 })
 setInterval(nextSlide,5000)
