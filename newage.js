
const topnav = document.querySelector('.topnav');
const calculate = document.getElementById('calculate');

hamburger.addEventListener('click', () => {
    topnav.classList.toggle('show');
    hamburger.classList.toggle('active');
});








if (calculate) {
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let bmidescription = document.getElementById('bmidescription');
const hamburger = document.getElementById('hamburger');


let bmi = document.getElementById('bmi');

calculate.onclick = function() {
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

};

}



const services = document.querySelectorAll(".scrolls");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }

    });

}, {
    threshold: 0.2
});

services.forEach(service => {
    observer.observe(service);
});






function openmodal(){
   
registermembership.showModal();
}


const weightlossbtn = document.getElementById("weightlossbtn");
const martialartsbtn = document.getElementById("martialartsbtn");
const yogameditationbtn = document.getElementById("yogameditationbtn");
const cardiobtn = document.getElementById("cardiobtn");
const boxingbtn = document.getElementById("boxingbtn");


const memberh1 = document.getElementById("memberh1");

const registermembership = document.querySelector(".registermembership");
let classSelect = document.getElementById("class");

weightlossbtn.addEventListener("click", () => {
   
   classSelect.value = "Weight Loss";
    memberh1.textContent = "WEIGHT LOSS";
    registermembership.showModal();

});


martialartsbtn.addEventListener("click", () => {
   
   classSelect.value = "Martial Arts";
    memberh1.textContent = "MARTIAL ARTS";
    registermembership.showModal();

});

yogameditationbtn.addEventListener("click", () => {
   
   classSelect.value = "Meditation & Yoga";
    memberh1.textContent = "MEDITATION & YOGA";
    registermembership.showModal();

});


cardiobtn.addEventListener("click", () => {
   
   classSelect.value = "Cardio";
    memberh1.textContent = "CARDIO";
    registermembership.showModal();

});

boxingbtn.addEventListener("click", () => {
   
   classSelect.value = "Boxing";
    memberh1.textContent = "BOXING";
    registermembership.showModal();

});



function closeModal() {
    registermembership.classList.add("closing");

    setTimeout(() => {
        registermembership.close();
        registermembership.classList.remove("closing");
    }, 300);
}