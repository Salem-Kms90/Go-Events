/**
 * GoEvents Navigation Component
 */
export function initNavbar() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-4', 'bg-midnight-abyss/80', 'backdrop-blur-xl');
            header.classList.remove('py-8');
        } else {
            header.classList.remove('py-4', 'bg-midnight-abyss/80', 'backdrop-blur-xl');
            header.classList.add('py-8');
        }
    });
}

/**
 * Scroll Reveal Animation logic using Intersection Observer
 */
export function initReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
