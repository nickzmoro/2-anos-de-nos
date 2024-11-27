const form = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    form.style.bottom = "35%"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.bottom = "-50%"
    mascara.style.visibility = "hidden"
}