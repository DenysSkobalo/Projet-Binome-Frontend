const navLinks = document.querySelectorAll('.nav-link');
const dropdownContainer = document.querySelector('.dropdown-container');
const dropdownContents = document.querySelectorAll('.dropdown-content, .search-container');

navLinks.forEach(link => {
	link.addEventListener('mouseenter', function () {
		const targetDropdown = this.getAttribute('data-dropdown');
		dropdownContents.forEach(content => {
			if (content.id === targetDropdown) {
				content.style.display = 'flex';
			} else {
				content.style.display = 'none';
			}
		});
		dropdownContainer.style.display = 'flex';
	});
});

dropdownContainer.addEventListener('mouseleave', function () {
	dropdownContainer.style.display = 'none';
});