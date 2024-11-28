
//1era funcionalidad:
//Boton leer mas/ Leer menos
// Seleccionamos el botón y el texto que queremos mostrar/ocultar
let hideText_btn = document.getElementById("hideText_btn");
let hideText = document.getElementById("hideText");// Evento y funcion a ejecutar 

// Añadimos un evento de clic al botón
hideText_btn.addEventListener("click", function () {
// Alternamos la clase 'hiddenText' en el texto
    hideText.classList.toggle("hiddenText");

// Cambiamos el texto del botón dependiendo del estado del texto
    if (hideText.classList.contains("hiddenText")) {
        hideText_btn.innerHTML = "Read Less";//Texto cuando el contenido está oculto
    } else {
        hideText_btn.innerHTML = "Read More"; // Texto cuando el contenido está visible
    }
});

/*------------------------------------------------*/

//2da funcionalidad:
//Slider Cards

// Seleccionamos el contenedor de las tarjetas y los botones de navegación
let btnRigth = document.querySelector("#btnRigth");
let btnLeft = document.querySelector("#btnLeft");
let content = document.querySelector(".carruselCard-container");

// Añadimos un evento de clic al botón izquierdo
btnLeft.addEventListener("click", ()=>{
   content.scrollLeft += 800;
});

 //Añadimos un evento de clic al botón derecho
btnRigth.addEventListener("click", ()=>{
    content.scrollLeft -= 800;
})


/*----------------------------------------------------*/

//3era funcionalidad: Validar email

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
    const emailForm = document.getElementById('emailForm');

    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validar el correo en tiempo real
    emailInput.addEventListener('input', () => {
        const emailValue = emailInput.value;
        if (emailRegex.test(emailValue)) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            errorMessage.style.display = 'none';
        } else {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
        }
    });

    // Validar al salir del campo
    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim() === '') {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            errorMessage.textContent = 'Email is required.';
            errorMessage.style.display = 'block';
        }
    });

    // Prevenir el envío si el email no es válido
    emailForm.addEventListener('submit', (e) => {
        if (!emailRegex.test(emailInput.value)) {
            e.preventDefault(); // Evitar el envío del formulario
            emailInput.classList.add('invalid');
            errorMessage.textContent = 'Please enter a valid email address before submitting.';
            errorMessage.style.display = 'block';
        } else {
            alert('Form submitted successfully!');
        }
    });
});





