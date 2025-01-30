let bookingSlideIndex = 0;

function moveBookingSlide(n) {
    const bookingSlides = document.querySelector('.booking-slides');
    const totalBookingSlides = document.querySelectorAll('.booking-slide').length;

    bookingSlideIndex += n;

    if (bookingSlideIndex >= totalBookingSlides) {
        bookingSlideIndex = 0;
    } else if (bookingSlideIndex < 0) {
        bookingSlideIndex = totalBookingSlides - 1;
    }

    bookingSlides.style.transform = `translateX(${-bookingSlideIndex * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveBookingSlide(1);
}, 5000);