document.getElementById('search-input').addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
			const searchTerm = this.value.toLowerCase();
			const textContent = document.body.innerText.toLowerCase();
			const occurrences = (textContent.match(new RegExp(searchTerm, 'g')) || []).length;

			const resultElement = document.getElementById('result');
			if (searchTerm) {
					resultElement.innerText = `The word "${searchTerm}" appears ${occurrences} time(s) on this page.`;
			} else {
					resultElement.innerText = '';
			}
	}
});
