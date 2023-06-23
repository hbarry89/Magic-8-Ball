let toggleButton = document.getElementById('toggle-button');
let body = document.body;

toggleButton.addEventListener('click', function () {
	body.classList.toggle('light-mode');
});