//dropdown navbar
const iconeDrop = document.getElementById('btndrop');
const dropdown = document.getElementById('myDropdown');

iconeDrop.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

//menu hamburguer
  const navegacao = document.getElementById('links-nav');
  const menu = document.getElementById('icon-menu');

  menu.addEventListener('click', () => {
    navegacao.classList.toggle('ativo')
  })


//botão de ver mais/menos

const imagens = document.querySelectorAll('.produtos-img_fundo');
const btn = document.getElementById('verMaisBtn');
const imagensPorPagina = 10;
let indiceAtual = imagensPorPagina;
let modoVerMais = true;

btn.addEventListener('click', function () {
  if (modoVerMais) {
    for (let i = indiceAtual; i < indiceAtual + imagensPorPagina && i < imagens.length; i++) {
      imagens[i].classList.remove('ocultar'); // remove a classe que esconde
      imagens[i].style.display = 'block';     // garante que vai aparecer
    }

    indiceAtual += imagensPorPagina;

    if (indiceAtual >= imagens.length) {
      btn.textContent = 'Ver menos';
      modoVerMais = false;
    }
  } else {
    for (let i = imagensPorPagina; i < imagens.length; i++) {
      imagens[i].classList.add('ocultar'); // esconde novamente
      imagens[i].style.display = 'none';
    }
    indiceAtual = imagensPorPagina;
    btn.textContent = 'Ver mais';
    modoVerMais = true;
  }
});


//carossel de imagens
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
