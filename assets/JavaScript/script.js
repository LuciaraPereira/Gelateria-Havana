const iconeDrop = document.getElementById('btndrop');
const dropdown = document.getElementById('myDropdown');

iconeDrop.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 2000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}