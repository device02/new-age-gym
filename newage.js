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






const SUPABASE_URL = "https://lantnoesejznwpoqcbjs.supabase.co";
const SUPABASE_KEY = "sb_publishable_izQa6YYVUNTsxzq18NStJg_yR14WCrO";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);



const registrationForm = document.getElementById("registerationform");

registrationForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    // Get values from the form
    const memberClass = document.getElementById("class").value;
    const fullName = document.getElementById("fullname").value;
    const gender = document.getElementById("gender").value;
    const startDate = document.getElementById("startdate").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;


    try {

        // Insert member into Supabase
        const { data, error } = await supabaseClient
            .from("members")
            .insert([
                {
                    // image is intentionally omitted

                    class: memberClass,
                    full_name: fullName,
                    gender: gender,
                    start_date: startDate,
                    phone_number: phoneNumber,
                    email: email,

                    status: false

                    // member_id is generated automatically
                    // created_at is generated automatically
                    // Date_of_birth is left NULL
                    // Special_info is left NULL
                }
            ])
            .select();


        // Check Supabase error
        if (error) {
            throw error;
        }


        // Success
        console.log("Member registered successfully:", data);

        alert("Member registered successfully!");

        registrationForm.reset();


        // Close modal if your function exists
        if (typeof closeModal === "function") {
            closeModal();
        }


    } catch (error) {

        console.error("Registration error:", error);

        alert("Registration failed: " + error.message);
    }

});
/*

document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript is loaded");

    const registrationForm = document.getElementById("registerationform");

    console.log("Form:", registrationForm);

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("SUBMIT BUTTON WAS CLICKED");

        const memberClass = document.getElementById("class").value;
        const fullName = document.getElementById("fullname").value;
        const gender = document.getElementById("gender").value;
        const startDate = document.getElementById("startdate").value;
        const phoneNumber = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        console.log("Class:", memberClass);
        console.log("Name:", fullName);
        console.log("Gender:", gender);
        console.log("Start date:", startDate);
        console.log("Phone:", phoneNumber);
        console.log("Email:", email);

    });

});*/