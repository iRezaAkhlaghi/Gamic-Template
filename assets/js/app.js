let menu=document.querySelector('.menu');
let open= document.querySelector('.open');
let bar= document.querySelector('.menu-toggle');
let link=document.querySelectorAll('link-item');

bar.addEventListener('click', function(){
  menu.classList.toggle('active')
  this.classList.toggle("active");
 
})







  
let headerTop= document.querySelector('.header-bottom');
  window.onscroll = function() {myFunction()};



var sticky = headerTop.offsetTop;


function myFunction() {
  if (window.pageYOffset > 250) {
    headerTop.classList.add("active");
  } else {
    headerTop.classList.remove("active");
  }
}


const search = document.querySelector('.search-box');
const sToggle=document.querySelectorAll('.sBtn');

for(let i=0 ; i < sToggle.length ; i++){
  sToggle[i].addEventListener('click', function(){
     search.classList.toggle('active')
  })
}



