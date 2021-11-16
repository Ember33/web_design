const navSliderItems = document.querySelectorAll(".main-servicios__section5-nav-ul-li");
const slider = document.querySelector(".main-servicios__section5-slider");


navSliderItems[0].addEventListener("click", () => {

    for (item of navSliderItems)
    item.classList.remove("main-servicios__section5-nav-ul-li--active");

    navSliderItems[0].classList.toggle("main-servicios__section5-nav-ul-li--active");
    slider.style.transform = "translateX(0%)";
})

navSliderItems[1].addEventListener("click", () => {

    for (item of navSliderItems)
    item.classList.remove("main-servicios__section5-nav-ul-li--active");

    navSliderItems[1].classList.toggle("main-servicios__section5-nav-ul-li--active");
    slider.style.transform = "translateX(-100%)";
})

navSliderItems[2].addEventListener("click", () => {

    for (item of navSliderItems)
    item.classList.remove("main-servicios__section5-nav-ul-li--active");

    navSliderItems[2].classList.toggle("main-servicios__section5-nav-ul-li--active");
    slider.style.transform = "translateX(-200%)";
})

navSliderItems[3].addEventListener("click", () => {

    for (item of navSliderItems)
    item.classList.remove("main-servicios__section5-nav-ul-li--active");

    navSliderItems[3].classList.toggle("main-servicios__section5-nav-ul-li--active");
    slider.style.transform = "translateX(-300%)";
})

navSliderItems[4].addEventListener("click", () => {

    for (item of navSliderItems)
    item.classList.remove("main-servicios__section5-nav-ul-li--active");

    navSliderItems[4].classList.toggle("main-servicios__section5-nav-ul-li--active");
    slider.style.transform = "translateX(-400%)";
})




// let cont = 0;

// for (item of navSliderItems) {

// item.addEventListener("click", () => {

//     for (it of navSliderItems)
//     it.classList.remove("main-servicios__section5-nav-ul-li--active");
//     it.classList.toggle("main-servicios__section5-nav-ul-li--active");
//     slider.style.transform = "translateX(${cont}%)";
//     console.log(cont);
//     cont -= 100;
// })

// }
