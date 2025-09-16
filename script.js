// Navbar active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
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

// About section animation
const aboutSection = document.querySelector('.about');
const aboutLeft = document.querySelector('.about-left');
const aboutRight = document.querySelector('.about-right');

window.addEventListener('scroll', () => {
    const sectionTop = aboutSection.offsetTop;
    const scrollY = window.pageYOffset + window.innerHeight;

    if (scrollY > sectionTop + 100) {
        aboutLeft.classList.add('animate');
        aboutRight.classList.add('animate');
    }
});
// Modal functionality
const cvBtn = document.getElementById('cvBtn');
const modal = document.getElementById('cvModal');
const closeBtn = document.querySelector('.close');

// Open modal
cvBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent jumping to top
    modal.style.display = 'flex';
});

// Close modal (by X button)
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal (by clicking outside modal content)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

