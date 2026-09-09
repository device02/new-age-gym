let weight = document.getElementById('weight');
let height = document.getElementById('height');
let bmidescription = document.getElementById('bmidescription');
const hamburger = document.getElementById('hamburger');
const topnav = document.querySelector('.topnav');


hamburger.addEventListener('click', () => {
    topnav.classList.toggle('show');
    hamburger.classList.toggle('active');
});











let bmi = document.getElementById('bmi');

document.getElementById('calculate').onclick = function() {
    let feetinft=height.value * 0.3048;
let calcbmi = weight.value / (feetinft * feetinft);
    bmi.value = calcbmi.toFixed(2);

   if (calcbmi < 18.5) {
      
        bmidescription.textContent = 'Underweight';
    } else if (calcbmi < 25) {
        bmidescription.textContent = 'Normal Weight';
    } else if (calcbmi < 30) {
        bmidescription.textContent = 'Overweight';
    } else {
        bmidescription.textContent = 'Obese';
    
    }

}
