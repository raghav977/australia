
const doctors = {
    cardiology: [
        { name: "Dr. Alice Smith", department: "Cardiology", qualification: "MD", image: "dralice.jpg" },
        { name: "Dr. John Doe", department: "Cardiology", qualification: "MBBS, MD", image: "drjoe.jpg" },
        // Add more doctor objects as needed
    ],
    neurology: [
        { name: "Dr. Emily Johnson", department: "Neurology", qualification: "PhD", image: "dremily.jpg" },
        { name: "Dr. Michael Brown", department: "Neurology", qualification: "MBBS,MD", image: "drmicheal.jpg" }
        // Add more doctor objects as needed
    ],
    orthopedics: [
        { name: "Dr. Oliver Twist", department: "Orthopedics", qualification: "MBBS,MD", image: "dralice.jpg" },
        {name:"Dr. Tim Berners-Lee", department: "Orthopedics", qualification: "PhD", image: "orthopedicsdr.jpg"}
    ],
    pediatrics: [
        {name:"Dr. Sheela Shrestha", department: "Pediatrics", qualification: "MBBS, MD", image: "pediatricdr.jpg"},
        {name:"Dr. Emily Johnson", department: "Pediatrics", qualification: "MBBS, MD", image: "pediatricdr2.jpg"}
        // Add doctors/nurses/staff for pediatrics specialization
    ],
    dermatology: [
        {name:"Dr. Angela Gupta", department: "Dermatology", qualification: "MBBS, MD", image: "dermatologydr.jpg"},
        {name:"Dr. Anna Dahal", department: "Dermatology", qualification: "MBBS, MD", image: "dermatologydr1.jpg"}
        // Add doctors/nurses/staff for dermatology specialization
    ]
};

// const menuIcon = document.getElementsByClassName("menu-icon")[0];
// const navLinks = document.getElementsByClassName("nav-links")[0];
// const icon = menuIcon.querySelector("i");

// menuIcon.addEventListener("click", function() {
//     navLinks.classList.toggle("active");
//     // Toggle between fa-bars and fa-times
//     if (icon.classList.contains("fa-bars")) {
//         icon.classList.remove("fa-bars");
//         icon.classList.add("fa-times");
//     } else {
//         icon.classList.remove("fa-times");
//         icon.classList.add("fa-bars");
//     }
// });


function showDetails(specialization) {
    const detailsSection = document.getElementById('details-section');
    detailsSection.innerHTML = ""; // Clear previous content

    const selectedDoctors = doctors[specialization];
    selectedDoctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';

        const doctorImage = document.createElement('img');
        doctorImage.src = doctor.image;
        doctorCard.appendChild(doctorImage);

        const doctorName = document.createElement('h3');
        doctorName.innerText = doctor.name;
        doctorCard.appendChild(doctorName);

        const doctorDepartment = document.createElement('p');
        doctorDepartment.innerText = `Department: ${doctor.department}`;
        doctorCard.appendChild(doctorDepartment);

        const doctorQualification = document.createElement('p');
        doctorQualification.innerText = `Qualification: ${doctor.qualification}`;
        doctorCard.appendChild(doctorQualification);
        const bookAppointment = document.createElement('button');
        bookAppointment.innerText = 'Book Appointment';
        bookAppointment.onclick = () => {
            showForm(doctor);
        }
        doctorCard.appendChild(bookAppointment);

        detailsSection.appendChild(doctorCard);
    });
}
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const symptoms = document.getElementById('symptoms').value.trim();
    const doctor = document.getElementById('option-doctor').value;
    const patientType = document.getElementById('patient-type').value;

    // Simple Validation
    if (name === "") {
        alert("Please enter the patient's name.");
        return false;
    }
    else if (contact === "") {
        alert("Please enter contact information.");
        return false;
    }
    else if (dob === "") {
        alert("Please enter date of birth.");
        return false;
    }
    else if (symptoms === "") {
        alert("Please describe the symptoms.");
        return false;
    }
    else if (doctor === "") {
        alert("Please choose a doctor.");
        return false;
    }
    else if (patientType === "") {
        alert("Please select the patient type.");
        return false;
    }
    else{
        const patientType = document.getElementById('patient-type').value;
    
        const roomSelection = document.getElementById('room-select');
        // console.log(roomSelection)
      
        if (patientType === "IP") {
          roomSelection.style.display = 'block';
        //   console.log(roomSelection)
        } else {
          roomSelection.style.display = 'none';
        }
      }
      alert("Form submitted successfully!");
      return true; 
    }
    

    // Further validations can be added here (e.g., regex for contact number)

    

function showForm(doctor="") {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'block';

    const name = document.getElementById('doctor');
    if (doctor) {
        doctorSelect.value = doctor.name; // Set the selected doctor
        const options = doctorSelect.options;
    
        // Disable other doctors except the selected one
        for (let i = 0; i < options.length; i++) {
          const option = options[i];
          if (option.value !== doctor.name && option.value !== "") {
            option.disabled = true; // Disable all other options except the selected one
          }
        }
      } else {
        // If no doctor is specified, make sure all options are enabled
        const options = doctorSelect.options;
        for (let i = 0; i < options.length; i++) {
          options[i].disabled = false;
        }
      }
      
}
function showRoomSelect(){
    const patientType = document.getElementById('patient-type').value;
      console.log(patientType)
  const roomSelection = document.getElementById('room-select');
  console.log(roomSelection)

  if (patientType === "IP") {
    roomSelection.style.display = 'block';
    console.log(roomSelection)
  } else {
    roomSelection.style.display = 'none';
  }
}
function roomSelect(){
    const patientType = document.getElementById('patient-type').value;
    const room = document.getElementById('room').value;
    let amount = 0
    switch(room){
        case "general":
            amount = 100
            break;
        case "semi-private":
            amount = 200
            break;
        case "private":
            amount = 300
            break;
        default:
            amount =0
            break;
    }
    return amount
}

// Function to calculate the total amount
function calculateTotalAmount(event) {
    if(validateForm()){
        // console.log("hello")
        // event.preventDefault(); // Prevent form submission

  const patientType = document.getElementById('patient-type').value;
  console.log(patientType)
  const room = document.getElementById('room').value;
  console.log(room)
  let totalAmount = 0;
   totalAmount = roomSelect()
  console.log(totalAmount)

  // Calculate amount for IP and OP patients
   if (patientType === "OP") {
    totalAmount = 50; // Fixed consultation fee for OP
  }

  // Display the total amount
  const totalAmountDiv = document.getElementById('total-amount');
  totalAmountDiv.innerText = `Total Amount: $${totalAmount}`;
  alert("Your total Amount is: " + totalAmount);
    }
}
const modal = document.getElementById("myModal");
        // Get button that opens the modal

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
function closeForm(){
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';
}

    const doctorSelect = document.getElementById('option-doctor');
    // console.log(doctorSelect)
  
    // Iterate over each department
    for (const department in doctors) {
      // Get the array of doctors for the current department
      const doctorArray = doctors[department];
  
      // Iterate over each doctor in the array
      doctorArray.forEach((doctor) => {
        // Create a new option element
        const option = document.createElement('option');
        option.value = doctor.name;
        // console.log("this is option value",option.value) // Set the value attribute to the doctor's name
        option.textContent = `${doctor.name} - ${doctor.department}`; // Set the display text
  
        // Append the option to the select element
        doctorSelect.appendChild(option);
      });
    }

  
const dctrs = document.getElementById('doctors');
console.log(dctrs)
for(const key in doctors){
    // console.log(key)
    for(const k of doctors[key]){
        const div = document.createElement('div');
        div.className = 'doctor-info';
        const img = document.createElement('img');
        img.src = k.image;
        div.appendChild(img);
        const h2 = document.createElement('h2');
        h2.innerText = k.name;
        div.appendChild(h2);
        const h3 = document.createElement('h3');
        h3.innerText = `Department:${k.department}`;
        div.appendChild(h3); 
        const p = document.createElement('p');
        p.innerText = `Qualification:${k.qualification}`;
        div.appendChild(p);
        dctrs.appendChild(div);
        // console.log(k.name)
        // console.log(k.image)
    }
}
