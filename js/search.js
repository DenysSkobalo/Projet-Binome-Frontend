function searchContent() {
	const keyword = document.getElementById('searchInput').value.toLowerCase();
	const content = document.body.innerText.toLowerCase();
	const count = (content.match(new RegExp(keyword, 'g')) || []).length;
	document.getElementById('searchResult').innerText = count > 0
		? `The word "${keyword}" appears ${count} times on this page.`
		: `The word "${keyword}" was not found.`;
}