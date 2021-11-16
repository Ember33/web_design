const form = document.getElementById("formulario");
const boton = document.getElementById("boton");
const thanks = document.getElementById("thanks");

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
            console.log(e.target.response);
            let jsonObject = JSON.parse(e.target.response);
            console.log(jsonObject);

            let parrafo = document.createElement("P");
            parrafo.classList.add("popUp");
            parrafo.textContent = `Gracias ${jsonObject.user} por enviarnos tu información. Nos pondremos en contacto contigo a la brevedad posible`;
            thanks.appendChild(parrafo);

            window.addEventListener("click", () => {
                                thanks.removeChild(parrafo);
            })
        });

       

        xhr.send(formData);

}

