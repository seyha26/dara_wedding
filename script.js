const name_customer= {
  "makara": "លោកស្រី មាស មករា និង​ ស្វាមី",
  "lek": "លោក ផាត់ លិក និង ភរិយា",
  "tola": "លោក អាន តុលា និង ភរិយា",
  "houn": "លោក សេង ហួន និង ភរិយា",
  "vannak": "លោក ក្រោន វណ្ណះ និង ភរិយា",
  "vichey": "លោក​ វ៉ែន វិជ័យ្យ និង ស្រីណាក់",
  "manut": "លោក ឃួន ម៉ានុត និង ភរិយា",
  "thoeun": "លោក ជុន ចាន់ធឿន និង​ ហានី",
  "rey": "លោក សេង រី និង​ សង្សារ",
  "khun": "កញ្ញា ង៉ែត ​សុខុន​ និង សង្សារ",
  "mina": "កញ្ញា ហ៊ុំ សៀសុមិនា​ និង សង្សារ",
  "sreyneang": "លោកស្រី យាំ ស្រីនាង",
  "chiva": "កញ្ញា វូន ជីវ៉ា និង​ សង្សារ"
}

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

if (name && name_customer[name]) {
  document.getElementById('cs_name').innerText = name_customer[name];
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});



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

function goTo(page) {
  if (name) {
    window.location.href = `${page}?name=${encodeURIComponent(name)}`;
  } else {
    window.location.href = page;
  }
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('closing');

    // remove modal after animation ends
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = "auto"; 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        document.querySelector('header').style.opacity = 1;
        document.querySelector('header').style.transform = 'scale(1)';

        document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
        
    }, 200); // must match CSS transition duration
}

  setTimeout(() => {
    document.body.style.display = 'block';
    document.getElementById("modal").style.opacity = 1;
}, 50); 