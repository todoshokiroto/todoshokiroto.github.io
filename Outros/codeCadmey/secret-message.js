/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
const changeBackground = (domElement)=>{
  const r = Math.random()*255;
  const g = Math.random()*255;
  const b = Math.random()*255;
  domElement.style.background = `rgb(${r},${g},${b})`;
}
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);changeBackground(pElement);
});


