
   const genderChart = document.getElementById("genderChart");


if(genderChart){

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

}


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


const registrationform = document.getElementById("registerationform");

if (registrationform) {

    registrationform.addEventListener("submit", async function(event) {

        event.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const gender = document.getElementById("gender").value;
        const startdate = document.getElementById("startdate").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const classname = document.getElementById("class").value;


        const { data, error } = await supabaseClient
            .from("members01")
            .insert([
                {
                    class: classname,
                    full_name: fullname,
                    gender: gender,
                    start_date: startdate,
                    phone_number: phone,
                    email: email
                }
            ])
            .select();


        if (error) {

            console.error(error);
            alert("Registration failed: " + error.message);

        } else {

            console.log(data);
            alert("Member registered successfully!");

            registrationform.reset();

            closeModal();
        }

    });

}


// MEMBERS TABLE

async function loadMembers() {

    console.log("1. loadMembers started");

    const tableBody = document.getElementById("memberstablebody");

    console.log("2. tableBody:", tableBody);

    const { data, error } = await supabaseClient
        .from("members01")
        .select("*");

    console.log("3. data:", data);
    console.log("4. error:", error);

    if (error) {
        console.error("SUPABASE ERROR:", error.message);
        return;
    }

    if (!data) {
        console.log("No data returned");
        return;
    }

    data.forEach(member => {

        console.log("5. member:", member);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${member.member_id}</td>
            <td>${member.class}</td>
            <td>${member.full_name}</td>
            <td>${member.gender}</td>
            <td>${member.phone_number}</td>
            <td class="activestatus">${member.status}</td>
            <td>${member.start_date}</td>
            <td class="actionbuttons">
        <button>👁</button>
        <button>✎</button>
        <button style="color:red;background:none;">🗑</button>
    </td>
        `;

        tableBody.appendChild(row);
    });

}

loadMembers();

/*members table

async function loadMembers() {

    const { data, error } = await supabaseClient
        .from("members01")
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        console.error("Error loading members:", error);
        return;
    }

    const tableBody = document.getElementById("memberstablebody");

    tableBody.innerHTML = "";

    data.forEach(member => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${member.member_id}</td>
            <td>${member.class}</td>
            <td>${member.full_name}</td>
            <td>${member.gender}</td>
            <td>${member.phone_number}</td>
            <td class="activestatus">${member.status}</td>
            <td>${member.start_date}</td>

            <td class="actionbuttons">
                <button>👁</button>
                <button>✎</button>
                <button style="color:red;background:none;">🗑</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

loadMembers();*/