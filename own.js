// Array of countries
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand",
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"

];

// Function to populate the Country dropdown
function populateCountries() {
    const countryDropdown = document.getElementById("Country");

    // Clear existing options (if any)
    countryDropdown.innerHTML = '<option>Choose your option</option>';

    // Add countries dynamically
    countries.forEach(country => {
        const option = document.createElement("option");
        option.textContent = country;
        option.value = country.toLowerCase(); // Use lowercase for value
        countryDropdown.appendChild(option);
    });
}


// Array of courses
const courses = [
    "Bachelor's in Art & Design",
    "Bachelor's in Business & Law",
    "Bachelor's in Communication, Media & Marketing",
    "Bachelor's in Computer &Data Science",
    "Bachelor's in Engineering, Sustainability & Architecture",
    "Bachelor's in Health, Education & Social Work",
    "Bachelor's in Psychology",
    "Bachelor's in Supply Chain Management",
    "Master's in Art & Design",
    "Master's in Business & Law",
    "Master's in Communication, Media & Marketing",
    "Master's in Computer &Data Science",
    "Master's in Engineering, Sustainability & Architecture",
    "Master's in Health, Education & Social Work",
    "Master's in Psychology",
    "Master's in Supply Chain Management",
];

// Function to populate the Program dropdown
function populateCourses() {
    const courseDropdown = document.getElementById("Program");

    // Clear existing options (if any)
    courseDropdown.innerHTML = '<option>Choose your option</option>';

    // Add courses dynamically
    courses.forEach(course => {
        const option = document.createElement("option");
        option.textContent = course;
        option.value = course.toLowerCase().replace(/\s+/g, "-"); // Use lowercase and replace spaces with dashes for value
        courseDropdown.appendChild(option);
    });
}

// Call the function on page load
window.onload = function () {
    populateCountries(); // Populate countries
    populateCourses();   // Populate courses
};

// // Add event listener to the Submit button
// document.getElementById("submitButton").addEventListener("click", function () {
//     alert("Thank you for your submission, the page will now reload");
//     location.reload();
// });
document.getElementById("submitButton").addEventListener("click", function (event) {
    // Get form fields
    const name = document.getElementById("Name").value.trim();
    const lastName = document.querySelector("input[placeholder='Last Name']").value.trim();
    const initial = document.querySelector("input[placeholder='Initial']").value.trim();
    const matriculation = document.getElementById("Matriculation").value.trim();
  
    // Validation logic
    if (!name || !lastName || !initial || !matriculation) {
      alert("Please fill out all the fields");
      event.preventDefault(); // Prevent submission if validation fails
      return;
    }
  
    // Show success message and refresh the page
    alert("Thank you for your submission, the page will now reload!");
    location.reload();
  });
  