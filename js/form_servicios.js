const form = document.getElementById("formulario-servicios");
const boton = document.getElementById("boton-servicios");
const thanksServicios = document.getElementById("thanks-servicios");

form.addEventListener("submit", (event) => {
        event.preventDefault();
        senData(form);
});

const senData = (data) => {
        
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }

        xhr.open("POST", "marbel.php");
        let formData = new FormData(data);
        console.log(formData);

        xhr.addEventListener("load", (e) => {
            let jsonObject = JSON.parse(e.target.response);
            console.log(jsonObject);

            let parrafoServicios = document.createElement("P");
            parrafoServicios.classList.add("popUp");
            parrafoServicios.textContent = `Gracias ${jsonObject.user} por enviarnos tu información. Nos pondremos en contacto contigo a la brevedad posible`;
            thanksServicios.appendChild(parrafoServicios);
            window.addEventListener("click", () => {
                thanksServicios.removeChild(parrafoServicios);
})
        });

       

        xhr.send(formData);     

}

console.log("hola");