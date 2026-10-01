
const genderChart = document.getElementById("genderChart");

new Chart(genderChart, {
    type: "pie",

    data: {
        labels: ["Male", "Female"],

        datasets: [{
            data: [40, 60]
        }]
    },

    options: {
        responsive: true
    }
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






