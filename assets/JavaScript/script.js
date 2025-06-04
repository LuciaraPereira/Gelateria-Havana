// Dropdown desktop
const dropDesktopBtn = document.getElementById('btndrop-desktop');
const dropdownDesktop = document.getElementById('dropdown-desktop');

// Dropdown mobile
const dropMobileBtn = document.getElementById('btndrop-mobile');
const dropdownMobile = document.getElementById('dropdown-mobile');

if (dropDesktopBtn && dropdownDesktop) {
  dropDesktopBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // impede o clique de fechar imediatamente
    dropdownDesktop.classList.toggle('show');
  });
}

if (dropMobileBtn && dropdownMobile) {
  dropMobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMobile.classList.toggle('show');
  });
}

// Fecha os dropdowns ao clicar fora
document.addEventListener('click', (e) => {
  // Fecha dropdown desktop se clicar fora
  if (!dropDesktopBtn.contains(e.target) && !dropdownDesktop.contains(e.target)) {
    dropdownDesktop.classList.remove('show');
  }

  // Fecha dropdown mobile se clicar fora
  if (!dropMobileBtn.contains(e.target) && !dropdownMobile.contains(e.target)) {
    dropdownMobile.classList.remove('show');
  }
});

// Menu hambúrguer responsivo
const menu = document.getElementById('icon-menu');
const navegacao = document.getElementById('links-nav');

if (menu && navegacao) {
  menu.addEventListener('click', () => {
    navegacao.classList.toggle('ativo');
  });
}


// botão de ver mais/menos
const imagens = document.querySelectorAll('.produtos-img_fundo');
const btn = document.getElementById('verMaisBtn');
const imagensPorPagina = 10;
let indiceAtual = imagensPorPagina;
let modoVerMais = true;

if (btn && imagens.length > 0) {
  btn.addEventListener('click', function () {
    if (modoVerMais) {
      for (let i = indiceAtual; i < indiceAtual + imagensPorPagina && i < imagens.length; i++) {
        imagens[i].classList.remove('ocultar');
        imagens[i].style.display = 'block';
      }

      indiceAtual += imagensPorPagina;

      if (indiceAtual >= imagens.length) {
        btn.textContent = 'Ver menos';
        modoVerMais = false;
      }
    } else {
      for (let i = imagensPorPagina; i < imagens.length; i++) {
        imagens[i].classList.add('ocultar');
        imagens[i].style.display = 'none';
      }
      indiceAtual = imagensPorPagina;
      btn.textContent = 'Ver mais';
      modoVerMais = true;
    }
  });
}






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


  const toggleBtn = document.getElementById('toggleBtn');
  const texto = document.getElementById('textoSobre');

  toggleBtn.addEventListener('click', () => {
    texto.classList.toggle('expandido');
    toggleBtn.textContent = texto.classList.contains('expandido') ? 'Ver menos' : 'Ver mais';
  });