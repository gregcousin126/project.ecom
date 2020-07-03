window.addEventListener('DOMContentLoaded', (event) => {
	var checkbox = document.getElementById("menu-btn");
	var mainContainer = document.getElementById('wrapper');

	if (checkbox.checked = true) {
		window.addEventListener('resize', function() {
			if (window.matchMedia('(min-width: 51em)').matches) { checkbox.checked = false }
		}, true);
	}

	var headerLink = document.querySelectorAll('.header a, .header li a');
	headerLink.forEach(element => { element.addEventListener('click', function() { checkbox.checked.checked = false; }, true); });
});
