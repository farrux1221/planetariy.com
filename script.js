// Modal
const modal = document.getElementById('priceModal');
const openBtns = document.querySelectorAll('#openModal');
const closeBtn = document.querySelector('.close-btn');

openBtns.forEach(btn => btn.onclick = () => modal.style.display = 'flex');
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

// Carousel
const slide = document.getElementById('carouselSlide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let index = 0;

function update() {
  slide.style.transform = `translateX(${-index * (100/3)}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

next.onclick = () => {
  index = (index + 1) % 4;
  if (index === 0) {
    slide.style.transition = 'none';
    slide.style.transform = 'translateX(0)';
    void slide.offsetWidth;
    slide.style.transition = 'transform .7s cubic-bezier(.4,0,.2,1)';
  }
  update();
};

prev.onclick = () => {
  if (index === 0) {
    index = 4;
    slide.style.transition = 'none';
    slide.style.transform = `translateX(-${4 * (100/3)}%)`;
    void slide.offsetWidth;
    slide.style.transition = 'transform .7s cubic-bezier(.4,0,.2,1)';
  }
  index = (index - 1 + 4) % 4;
  update();
};

dots.forEach((dot, i) => dot.onclick = () => { index = i; update(); });
setInterval(() => next.click(), 5000);