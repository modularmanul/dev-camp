// List of countries for dropdown
const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Switzerland",
  "Poland",
  "Russia",
  "India",
  "China",
  "Japan",
  "South Korea",
  "Indonesia",
  "Australia",
  "New Zealand",
  "Singapore",
  "Malaysia",
  "Philippines",
  "Saudi Arabia",
  "United Arab Emirates",
  "South Africa",
  "Nigeria",
  "Egypt",
];

const dropdownList = document.getElementById("dropdown-list");
const searchInput = document.getElementById("search-input");

// Populate the dropdown with all countries
function populateDropdown() {
  dropdownList.innerHTML = ""; // Clear previous entries
  countries.forEach((country) => {
    const item = document.createElement("div");
    item.textContent = country;
    item.classList.add("dropdown-item");
    item.onclick = () => {
      searchInput.value = country;
      dropdownList.style.display = "none"; // Hide dropdown after selection
    };
    dropdownList.appendChild(item);
  });
}

// Filter the dropdown based on input
function filterDropdown() {
  const filter = searchInput.value.toLowerCase();
  const items = dropdownList.getElementsByTagName("div");

  if (filter === "") {
    dropdownList.style.display = "none"; // Hide dropdown if input is empty
    return;
  }

  let hasResults = false;

  for (let item of items) {
    if (item.textContent.toLowerCase().includes(filter)) {
      item.style.display = "block";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  }

  dropdownList.style.display = hasResults ? "block" : "none"; // Show only if results exist
}

// Show the dropdown when input is clicked
function showDropdown() {
  dropdownList.style.display = "block";
}

// Hide dropdown if clicked outside of input or dropdown
document.addEventListener("click", (e) => {
  if (
    !e.target.closest("#search-input") &&
    !e.target.closest("#dropdown-list")
  ) {
    dropdownList.style.display = "none";
  }
});

// Attach event listener to input field for filtering
searchInput.addEventListener("keyup", filterDropdown);

// Initialize dropdown with all countries
populateDropdown();
