document.addEventListener("DOMContentLoaded", function () {

    // Display an alert when the page is loaded
    alert("9 Umum Ta'lim Maktabiga xush kelibsiz!");

    // Change the background color of the "Kurslar" section when clicked
    const coursesSection = document.getElementById("courses");
    coursesSection.addEventListener("click", function () {
        this.style.backgroundColor = "#f39c12";
        showSection('courses');
    });

    // Change the background color of the "Biz haqimizda" section when clicked
    const aboutSection = document.getElementById("about");
    aboutSection.addEventListener("click", function () {
        this.style.backgroundColor = "#f39c12";
        showSection('about');
    });

    // Change the background color of the "Bog'lanish" section when clicked
    const contactSection = document.getElementById("contact");
    contactSection.addEventListener("click", function () {
        this.style.backgroundColor = "#f39c12";
        showSection('contact');
    });

    // Scroll-related effect for the video section
    document.addEventListener('scroll', function () {
        const videoSection = document.getElementById('video');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 500) {
            videoSection.classList.add('show-video');
        } else {
            videoSection.classList.remove('show-video');
        }

        // Show or hide the footer based on scrolling
        const footer = document.getElementById('page-footer');
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;

        if (scrollPosition + windowHeight >= bodyHeight - 200) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }
    });

    // Add a console log message when the submit button is clicked
    const submitButton = document.querySelector('#contact button');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phoneNumber').value;
        console.log('Telefon raqam jo\'natildi:', phoneNumber);
    });

    // Navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            showSection(targetSectionId);
        });
    });

    // Show the initial section based on the hash in the URL
    const initialSectionId = window.location.hash.substring(1);
    showSection(initialSectionId);

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.backgroundColor = ''; // Reset background color for all sections
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

});
