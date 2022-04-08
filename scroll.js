let myButton = document.getElementById('button-top');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}