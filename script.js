const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const weddingDate = new Date("Februry 28, 2026 16:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days} ថ្ងៃ ${hours} ម៉ោង ${minutes} នាទី ${seconds} វិនាទី`;
}, 1000);

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 500);


function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

const section = document.querySelector('.fade-section');
const items = document.querySelectorAll('.fade-item');

const obs = new IntersectionObserver(
(entries) => {
    if (entries[0].isIntersecting) {
    section.classList.add('visible');

    items.forEach((item, index) => {
        setTimeout(() => {
        item.classList.add('visible');
        }, index * 120); // soft stagger
    });

    obs.disconnect();
    }
},
{ threshold: 0.2 }
);

obs.observe(section);

function switchCurrency(currency) {
  // Hide all
  document.querySelectorAll('.qr-card').forEach(card => card.style.display = 'none');
  
  // Show selected
  document.querySelectorAll(`.qr-card.${currency}`).forEach(card => card.style.display = 'block');
  
  // Update active button
  document.querySelectorAll('.currency-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.currency-btn[onclick="switchCurrency('${currency}')"]`).classList.add('active');
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}