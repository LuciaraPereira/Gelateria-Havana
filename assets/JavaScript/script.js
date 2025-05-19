const iconeDrop = document.getElementById('btndrop');
const dropdown = document.getElementById('myDropdown');

iconeDrop.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});