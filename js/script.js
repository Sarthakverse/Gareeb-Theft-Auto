const personImage = document.getElementById('person');
let isScalingUp = true;
let scaleFactor = 1;
let step = 0.0010; 
function scaleAnimation() {
    if (isScalingUp) {
        scaleFactor += step;
        if (scaleFactor >= 1.1 ) {
            isScalingUp = false;
        }
    } else {
        scaleFactor -= step;
        if (scaleFactor <= 1) {
            isScalingUp = true;
        }
    }
    personImage.style.transform = `scale(${scaleFactor})`;
    requestAnimationFrame(scaleAnimation);
}
scaleAnimation();
const showInfoButton = document.getElementById('showButtonsInfo');
const buttonInfoModal = document.getElementById('buttonInfoModal');
const closeInfoModal = document.getElementById('closeInfoModal');

 
 showInfoButton.addEventListener('click', () => {
     buttonInfoModal.style.display = 'block';
     setTimeout(() => {
         buttonInfoModal.style.height = '100%'; 
     }, 10);
 });

 closeInfoModal.addEventListener('click', () => {
     buttonInfoModal.style.height = '0'; 
     setTimeout(() => {
         buttonInfoModal.style.display = 'none';
     }, 500); 
 });

 window.addEventListener('click', (event) => {
     if (event.target == buttonInfoModal) {
         buttonInfoModal.style.height = '0'; 
         setTimeout(() => {
             buttonInfoModal.style.display = 'none';
         }, 500); 
     }
 });

 
const startButton = document.getElementById('startButton');
function navigateToOtherPage() {
    window.location.href = '../game.html';
}
startButton.onclick = navigateToOtherPage;
