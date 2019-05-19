
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

/* Commenting out this code for task#1 to switch to using the animation
menuButton.addEventListener('click', () => {
  toggleMenu();
})
*/

/* 
  For stretch goal #1 - animation
  I could not figure out a way to trigger the menu to slide back so I created a fake button element that will replace the real menu button when the real button is closed. While the fake button is clicked, the menu will slide back
*/
const fakeBtn = document.createElement('img');
fakeBtn.src = './assets/menu.png';
document.querySelector('.header').prepend(fakeBtn);
fakeBtn.classList.add('menu-button')
fakeBtn.style.display = 'none';

//Did not want to change the CSS so I changed the menu attributes here
menu.setAttribute('style', `display: block; left: -350px`);

let appear = [
  {
    transform: `translateX(0)`,
  },
  {
    transform: `translateX(350px)`,
  }
]

menuButton.addEventListener('click', (event) => {
  event.preventDefault();
  menu.animate(appear, {
    duration: 1000,
    fill: 'forwards',
    easing: 'ease-out'
  });                                                                            
  menuButton.style.display = 'none';
  fakeBtn.style.display = 'inline';                                             
})

fakeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  menu.animate(appear, {
    duration: 1000,
    fill: 'forwards',
    direction: 'reverse',
    easing: 'ease-out'
  });                                                                menuButton.style.display = 'inline';
  fakeBtn.style.display = 'none';                                             
})

