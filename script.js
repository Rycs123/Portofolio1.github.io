function onFormSubmit(e) {
    e.preventDefault();
    const email = $("#inputEmail");
    const message = $("#inputMessage");

    if (!$(email).val()) {
        alert("Email is required");
    } else if (!$(message).val()) {
        alert("Message is required");
    } else {
        alert("Form Submitted");
        $(email).val("");
        $(message).val("");
    }
}

let slideIndex = 0;

const updateSlide = (n) => {
    slideIndex += n;
    showSlide(slideIndex);
};

const showSlide = (n) => {
    const slides = document.getElementsByClassName("slider-item");
    // console.log(slides.length);
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    // membuat semua tampilan jadi none
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(`slideIndexlocal: ${slideIndex}`);
    slides[slideIndex].style.display = "block";
};
console.log(`showSlide: ${slideIndex}`);
// memanggil showSlide
showSlide(slideIndex);
