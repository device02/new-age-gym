
   const genderChart = document.getElementById("genderChart");
const SUPABASE_URL = "https://lantnoesejznwpoqcbjs.supabase.co";
const SUPABASE_KEY = "sb_publishable_izQa6YYVUNTsxzq18NStJg_yR14WCrO";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

    async function loadGenderChart() {

        // Fetch members from Supabase
        const { data: members, error } = await supabaseClient
            .from("members01")
            .select("gender");

        if (error) {
            console.error("Error fetching members:", error.message);
            return;
        }

        // Count male and female members
        let maleCount = 0;
        let femaleCount = 0;

        members.forEach((member) => {
            const gender = member.gender?.trim().toLowerCase();

            if (gender === "male") {
                maleCount++;
            } else if (gender === "female") {
                femaleCount++;
            }
        });

        // Create the pie chart
        new Chart(genderChart, {
            type: "pie",

            data: {
                labels: ["Male", "Female"],

                datasets: [{
                    data: [maleCount, femaleCount],
                    backgroundColor: [
                        "#0f3995",
                        "#ec487f"
                    ],
                    borderWidth: 2,
                    borderColor: "#ffffff"
                }]
            },

            options: {
                responsive: true,
                   maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });
    }

    loadGenderChart();









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
            
            <td class="activestatus">${member.status}</td>
            <td>${member.start_date}</td>
       
        `;

        tableBody.appendChild(row);
    });

}

loadMembers();

const classChart = document.getElementById("classChart");

if (classChart) {
    new Chart(classChart, {
        type: "line",
        data: {
            labels: [
                "Weight Loss",
                "Martial Arts",
                "Meditation & Yoga",
                "Cardio",
                "Boxing"
            ],
            datasets: [{
                label: "Number of Members",
                data: [2, 1, 1, 1, 1],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37, 99, 235, 0.15)",
                borderWidth: 3,
                pointRadius: 5,
                pointBackgroundColor: "#2563eb",
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
}