const doctors = {
    cardiology: [
        { name: "Dr. Alice Smith", department: "Cardiology", qualification: "MD", image: "./images/dralice.jpg" },
        { name: "Dr. John Doe", department: "Cardiology", qualification: "MBBS, MD", image: "./images/drjoe.jpg" },
        { name: "Dr. Micheal Brown", department: "Cardiology", qualification: "MBBS, MD", image: "./images/drmicheal.jpg" }
    ],
    neurology: [
        { name: "Dr. Emily Johnson", department: "Neurology", qualification: "PhD", image: "./images/dremily.jpg" },
        { name: "Dr. Michael Brown", department: "Neurology", qualification: "MD", image: "./images/drmicheal.jpg" }
    ],
    orthopedics: [
        { name: "Dr. Oliver Twist", department: "Orthopedics", qualification: "MD", image: "./images/dralice.jpg" }
    ],
    pediatrics: [
        // Add doctors for pediatrics specialization
    ],
    dermatology: [
        // Add doctors for dermatology specialization
    ]
};

// Function to render all doctors
function renderAllDoctors() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ''; // Clear previous content

    // Iterate over each department
    for (const department in doctors) {
        if (doctors.hasOwnProperty(department)) {
            const departmentDoctors = doctors[department];
            departmentDoctors.forEach((doctor) => {
                const cardDiv = document.createElement("div");
                cardDiv.className = "card";

                // Image div
                const imageDiv = document.createElement("div");
                imageDiv.className = "image";
                cardDiv.appendChild(imageDiv);

                // Image
                const image = document.createElement("img");
                image.src = doctor.image;
                imageDiv.appendChild(image);

                // Title
                const title = document.createElement("h1");
                title.innerText = doctor.name;
                cardDiv.appendChild(title);

                // Department
                const departmentPara = document.createElement("p");
                departmentPara.innerText = doctor.department;
                cardDiv.appendChild(departmentPara);

                // Qualification
                const qualification = document.createElement("p");
                qualification.innerText = doctor.qualification;
                cardDiv.appendChild(qualification);

                // Adding each card to the container
                cardContainer.appendChild(cardDiv);
            });
        }
    }
}

// Call the function to render all doctors
renderAllDoctors();
