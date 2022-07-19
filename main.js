window.onscroll = function() {
  myFunction()
};

const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/*
const togglea = document.getElementsByClassName('togglea')[0];
const toggleLinks = document.getElementsByClassName('toggle-bar-links')[0];
const link = document.querySelector('.link');

togglea.addEventListener('click', ()=> {
  toggleLinks.classList.toggle('active')

  togglea.style.display = 'none';
});
*/
