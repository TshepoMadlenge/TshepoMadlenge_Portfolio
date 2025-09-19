// ===== Navbar Active Link on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== About Section Animation =====
const aboutSection = document.querySelector('.about');
const aboutLeft = document.querySelector('.about-left');
const aboutRight = document.querySelector('.about-right');
let aboutAnimated = false;

window.addEventListener('scroll', () => {
    const sectionTop = aboutSection.offsetTop;
    const scrollY = window.pageYOffset + window.innerHeight;

    if (!aboutAnimated && scrollY > sectionTop + 100) {
        aboutLeft.classList.add('animate');
        aboutRight.classList.add('animate');
        aboutAnimated = true;
    }
});

// ===== Profile Photo Animation (once) =====
const profileImage = document.querySelector('.home-image .image-circle');
let photoAnimated = false;
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + window.innerHeight;
    const homeSection = document.querySelector('.home');

    if (!photoAnimated && scrollY > homeSection.offsetTop + 50) {
        profileImage.classList.add('animate-photo');
        photoAnimated = true;
    }
});

// ===== CV Modal Functionality =====
const cvBtn = document.getElementById('cvBtn');
const modal = document.getElementById('cvModal');
const closeBtn = document.querySelector('.close');

// Open modal
cvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Close modal with X button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal by clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
