import { initNavbar, initReveal } from './components.js';

/**
 * Custom Cursor Component (Native JS)
 */
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'fixed top-0 left-0 w-8 h-8 border border-gold-champagne/50 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block';
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.animate({
            transform: `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
        }, { duration: 500, fill: 'forwards' });
    });

    document.querySelectorAll('a, button, input, textarea, select, .movie-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('scale-150', 'bg-gold-champagne/10');
            cursor.style.borderColor = '#C5A059';
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('scale-150', 'bg-gold-champagne/10');
            cursor.style.borderColor = 'rgba(197, 160, 89, 0.5)';
        });
    });
}

/**
 * GoCiné Interactive Gallery logic
 */
function initGoCine() {
    const cards = document.querySelectorAll('.movie-card');
    const modal = document.getElementById('movie-modal');
    if (!modal) return;

    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.getElementById('close-modal');

    cards.forEach(card => {
        const video = card.querySelector('.card-video');
        const videoSrc = card.dataset.video;

        // Hover Effect: Play Preview
        card.addEventListener('mouseenter', () => {
            if (video && videoSrc) {
                if (!video.src) video.src = videoSrc;
                video.play();
                video.classList.replace('opacity-0', 'opacity-100');
            }
        });

        card.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.classList.replace('opacity-100', 'opacity-0');
            }
        });

        // Click Effect: Open Modal
        card.addEventListener('click', () => {
            modalTitle.innerText = card.dataset.title;
            modalCategory.innerText = card.dataset.category;
            modalDesc.innerText = card.dataset.desc;
            modalVideo.src = card.dataset.video;

            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.querySelector('.transform').classList.remove('scale-95');
            modalVideo.play();
        });
    });

    const closeModal = () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.querySelector('.transform').classList.add('scale-95');
        modalVideo.pause();
        modalVideo.src = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

/**
 * Floating Ticketing Widget logic
 */
function initTicketing() {
    const widgetHTML = `
        <div id="ticketing-widget" class="fixed bottom-8 right-8 z-[80] flex flex-col items-end gap-4 reveal">
            <button id="ticket-trigger" class="w-16 h-16 bg-gold-champagne text-midnight-abyss rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
            </button>

            <div id="ticket-panel" class="w-80 glass rounded-2xl overflow-hidden shadow-2xl opacity-0 pointer-events-none translate-y-10 transition-all duration-500 origin-bottom-right">
                <div class="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <h4 class="text-xs font-bold tracking-widest uppercase">Billetterie <span class="text-gold-champagne">Privée</span></h4>
                    <button id="close-ticket" class="text-white/20 hover:text-white transition-colors">
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div id="ticket-step-1" class="p-6">
                    <p class="text-[10px] text-white/40 uppercase tracking-widest mb-4">Sélectionnez votre expérience</p>
                    <div class="flex flex-col gap-3">
                        <button class="cat-btn w-full text-left p-3 rounded-lg border border-white/5 hover:border-gold-champagne transition-all group" data-price="150" data-name="Accès Premium">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-xs font-bold group-hover:text-gold-champagne">Accès Premium</span>
                                <span class="text-xs font-black text-gold-champagne">150€</span>
                            </div>
                            <p class="text-[10px] text-white/30 italic">Coupe-file + Cocktail de bienvenue</p>
                        </button>
                        <button class="cat-btn w-full text-left p-3 rounded-lg border border-white/5 hover:border-gold-champagne transition-all group" data-price="450" data-name="Loge VIP Platinum">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-xs font-bold group-hover:text-gold-champagne">Loge VIP Platinum</span>
                                <span class="text-xs font-black text-gold-champagne">450€</span>
                            </div>
                            <p class="text-[10px] text-white/30 italic">Service maître d'hôtel + After-party</p>
                        </button>
                    </div>
                </div>

                <div id="ticket-step-2" class="p-6 hidden">
                    <div class="mb-6 flex items-center gap-2">
                        <button id="back-step" class="text-gold-champagne hover:scale-110 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <p id="selected-cat" class="text-xs font-bold tracking-widest uppercase">Accès Premium</p>
                    </div>
                    <div class="flex justify-between items-center mb-8">
                        <span class="text-xs font-light text-white/60">Quantité</span>
                        <div class="flex items-center gap-4 bg-white/5 p-1 rounded-lg">
                            <button id="qty-minus" class="w-8 h-8 flex items-center justify-center hover:text-gold-champagne font-bold">-</button>
                            <span id="qty-val" class="w-4 text-center text-xs font-black">1</span>
                            <button id="qty-plus" class="w-8 h-8 flex items-center justify-center hover:text-gold-champagne font-bold">+</button>
                        </div>
                    </div>
                    <button id="add-to-cart" class="w-full bg-gold-champagne text-midnight-abyss py-3 rounded-lg font-bold text-xs tracking-widest hover:scale-[1.02] transition-transform">
                        AJOUTER AU PANIER — <span id="total-price">150</span>€
                    </button>
                </div>

                <div id="ticket-step-3" class="p-8 text-center hidden">
                    <div class="w-16 h-16 bg-gold-champagne/10 rounded-full flex items-center justify-center mx-auto mb-6">
                         <svg class="text-gold-champagne" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 class="text-lg font-bold mb-2">Ajouté avec succès</h3>
                    <p class="text-[10px] text-white/40 uppercase tracking-widest mb-8 leading-loose">Votre invitation pour le Gala d'Exception a été réservée.</p>
                    <a href="/contact.html" class="inline-block text-[10px] font-black text-gold-champagne border-b border-gold-champagne pb-1 hover:text-white hover:border-white transition-colors">FINALISER LE PAIEMENT →</a>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    const trigger = document.getElementById('ticket-trigger');
    const panel = document.getElementById('ticket-panel');
    const closeBtn = document.getElementById('close-ticket');

    let currentPrice = 150;
    let currentQty = 1;

    trigger.addEventListener('click', () => {
        panel.classList.toggle('opacity-0');
        panel.classList.toggle('pointer-events-none');
        panel.classList.toggle('translate-y-10');
    });

    closeBtn.addEventListener('click', () => {
        panel.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
    });

    // Tunnel Logic
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPrice = parseInt(btn.dataset.price);
            document.getElementById('selected-cat').innerText = btn.dataset.name;
            document.getElementById('total-price').innerText = currentPrice * currentQty;
            document.getElementById('ticket-step-1').classList.add('hidden');
            document.getElementById('ticket-step-2').classList.remove('hidden');
        });
    });

    document.getElementById('back-step').addEventListener('click', () => {
        document.getElementById('ticket-step-2').classList.add('hidden');
        document.getElementById('ticket-step-1').classList.remove('hidden');
    });

    document.getElementById('qty-plus').addEventListener('click', () => {
        currentQty++;
        document.getElementById('qty-val').innerText = currentQty;
        document.getElementById('total-price').innerText = currentPrice * currentQty;
    });

    document.getElementById('qty-minus').addEventListener('click', () => {
        if (currentQty > 1) {
            currentQty--;
            document.getElementById('qty-val').innerText = currentQty;
            document.getElementById('total-price').innerText = currentPrice * currentQty;
        }
    });

    document.getElementById('add-to-cart').addEventListener('click', () => {
        document.getElementById('ticket-step-2').classList.add('hidden');
        document.getElementById('ticket-step-3').classList.remove('hidden');
        trigger.innerHTML = `<span class="text-xs font-black">${currentQty}</span>`;
    });
}

/**
 * Contact Form Logic
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        // Simple visual feedback
        btn.disabled = true;
        btn.innerText = 'ENVOI EN COURS...';
        btn.classList.add('opacity-50', 'cursor-not-allowed');

        setTimeout(() => {
            btn.innerText = 'BRIEF ENVOYÉ !';
            btn.classList.replace('bg-gold-champagne', 'bg-green-500');
            btn.classList.replace('text-midnight-abyss', 'text-white');

            form.reset();

            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = originalText;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.classList.replace('bg-green-500', 'bg-gold-champagne');
                btn.classList.replace('text-white', 'text-midnight-abyss');
            }, 3000);
        }, 1500);
    });
}

/**
 * Smooth Internal Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initReveal();
    initCustomCursor();
    initGoCine();
    initTicketing();
    initContactForm();
    initSmoothScroll();
});
