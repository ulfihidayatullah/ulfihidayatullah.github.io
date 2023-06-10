
//=============Menu Navbar=============  //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//=============Active Link=============  //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active')
            });
        };
    });


    //=============Sticky Navbar=============  //
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 50);


    //=============Remove Navbar click and scrool=============  //
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


//=============Dark Mode=============  //
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

//=============Scroll Reveal=============  //
ScrollReveal({
    // reset: true,
    distance: '20px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .container-course, .contact form, h1, .row-1, .row-2', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,  .box-container', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .about-img,', { origin: 'right' });


