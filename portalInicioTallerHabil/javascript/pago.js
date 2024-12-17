// funciones para los botones para direccionar a la otra pagina
function irAPagina_Principal() {
    window.location.href = 'indice.html';
}

function irAPagina_QR() {
    window.location.href = 'transferencia.html';
}

// aqui crea el evento para poder regresar a la primera parte del fomulario si el usuario quiere modificar algun dato 
const form = document.querySelector("form"),
        nextBtn1 = document.querySelector(".nextBtn1"),
        nextBtn2 = document.querySelector(".nextBtn2"),
        backBtn2 = document.querySelector(".backBtn2"),
        allInput = document.querySelectorAll(".first input");


nextBtn1.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value == ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
}) 


backBtn2.addEventListener("click", () => form.classList.remove('secActive'));

// aqui se crea un evento que al momento de darle click continuar verifica que todos los campos este bien digitalizados 
// y si estan correctamente, entonces oculta la primera parte del formulario y hace aparecer la segunda parte del mensaje
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const nextBtn1 = document.querySelector('.nextBtn1');
    const formFirst = document.querySelector('.form-first');
    const formSecond = document.querySelector('.form-second');

    nextBtn1.addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir que el formulario se envíe

        // Obtener todos los campos de entrada
        const inputs = form.querySelectorAll('input[required], select[required]');

        // Variable para rastrear la validez del formulario
        let isValid = true;

        // Eliminar mensajes de error previos
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        // Validar cada campo
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;

                // Crear mensaje de error
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.style.color = 'red';
                errorMessage.textContent = obtenerMensajeDeError(input);

                // Insertar el mensaje de error después del campo de entrada
                input.parentElement.appendChild(errorMessage);
            }
        });

        if (isValid) {
            // Ocultar la primera parte del formulario y mostrar la segunda
            formFirst.style.display = 'none';
            formSecond.style.display = 'block';
        }
    });

    backBtn2.addEventListener('click', function () {
        // Mostrar la primera parte del formulario y ocultar la segunda
        formFirst.style.display = 'block';
        formSecond.style.display = 'none';
    });

    // aqui se hace una funcion para cada uno de los caso de los inputs incorrectos 
    function obtenerMensajeDeError(input) {
        switch (input.type) {
            case 'text':
                return 'Este campo es obligatorio.';
            case 'email':
                return 'Por favor, ingresa un correo electrónico válido.';
            case 'number':
                return 'Por favor, ingresa un número válido.';
            case 'date':
                return 'Por favor, ingresa una fecha válida.';
            default:
                return 'Este campo es obligatorio.';
        }
    }
});
