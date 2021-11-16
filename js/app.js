// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');

var activador = true;

// Menú Responsive Secundario

btnMenu.addEventListener('click', (event) => {

  //Icon X
  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});

// Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

//Scroll Efect

 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Go Top Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const date = new Date();

// Menu Resposivo Secundario

let opti = ["Inicio","Nosotros","Servicios","Blog","Contacto"]

let navResponsive = document.querySelector(".list-container2");
let navResponsiveUl = document.querySelector(".list-container2__ul");
let anclasViejas = document.querySelectorAll(".lists__a");
let anclasNuevas = document.querySelectorAll(".anchorItem");

const fragmento = document.createDocumentFragment();

let contIndex = 0;

for (op of opti) {

  let listItem = document.createElement("LI");
  listItem.classList.add('list-container2__ul-li')

  let anchorItem = document.createElement("A");

  anchorItem.setAttribute("href", anclasViejas[contIndex].href);
  anchorItem.classList.add("anchorItem");
  anchorItem.textContent = op;

  listItem.appendChild(anchorItem);
  

  fragmento.appendChild(listItem);

  contIndex++;

}

navResponsiveUl.appendChild(fragmento);


// Show del menu responsive


let headerX = document.querySelector(".header-x");

headerX.addEventListener("click", () => {

  navResponsive.classList.toggle("show")

});





















