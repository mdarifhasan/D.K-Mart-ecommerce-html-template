/**
 * Header Menu
 */
const menuClose = document.querySelector('header .search-form .fa-times');
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn')

// Search form
menuClose.addEventListener('click',()=>{
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
})
