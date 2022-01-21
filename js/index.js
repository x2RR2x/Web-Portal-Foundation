const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const searchBars = document.querySelectorAll('.events-search input, .cv-search input');

// Header - Responsive Navbar
const activeToggle = () => header.classList.toggle('active');

burger.addEventListener('click', () => activeToggle());

// Events Page - Search Bar
const input = searchBars[0];
const parent = input.parentNode;

const focusToggle = (parent) => parent.classList.toggle('focus');

input.addEventListener('focus', () => focusToggle(parent));
input.addEventListener('blur', () => focusToggle(parent));