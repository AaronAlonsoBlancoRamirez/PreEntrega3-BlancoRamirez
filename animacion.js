let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length / 2) { // Dividimos por 2 porque hay pares de diapositivas
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex + 2].style.display = "block"; // Aquí accedemos al texto correspondiente
    setTimeout(showSlides, 5000); // Cambia cada 5 segundos
}