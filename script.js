
function openNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "50%";
}
function closeNavbar() {
	document.getElementById("sideNavigationBar")
		.style.width = "0%";
}

document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Fetch candidates based on location and job role
  var location = document.getElementById('location').value;
  var role = document.getElementById('role').value;

  // Perform an AJAX request to fetch candidates from the server
  // You can use libraries like jQuery or fetch API to make the request

  // Dummy data for demonstration
  var candidates = [
    { name: 'John Doe', location: 'New York', role: 'Software Developer' },
    { name: 'Jane Smith', location: 'San Francisco', role: 'Data Analyst' },
    { name: 'Mark Johnson', location: 'London', role: 'Project Manager' },
    {name: 'Mark Juganberg', location: 'America', role: 'Web Developer'},
    {name: 'Anny Simon', location: 'Australia', role: 'Project Developer'},
    {name: 'Ani Timer', location: 'Germany', role: 'Hardware Developer'}
  ];

  // Clear previous candidate list
  var candidateList = document.getElementById('candidates');
  candidateList.innerHTML = '';

  // Populate the candidate list
  candidates.forEach(function(candidate) {
    var listItem = document.createElement('li');
    listItem.classList.add('candidate');
    listItem.textContent = candidate.name + ' - ' + candidate.location + ' - ' + candidate.role;
    candidateList.appendChild(listItem);
  });
});

  