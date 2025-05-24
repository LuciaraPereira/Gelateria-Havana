const iconeDrop = document.getElementById('btndrop');
const dropdown = document.getElementById('myDropdown');

iconeDrop.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

window.onload = () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slidesContainer = document.querySelector('.slides');

  const showSlide = (index) => {
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }

  showSlide(0);
};