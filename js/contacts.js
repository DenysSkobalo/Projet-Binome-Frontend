document.getElementById('clear-form').addEventListener('click', function (event) {
	var form = document.getElementById('contact-form');
	form.reset();
});

document.getElementById('submit').addEventListener('click', function (event) {
	var form = document.getElementById('contact-form');
	var error = false;
	if (!form['first-name'].value || !form['last-name'].value || !form['password'].value || !form['comments'].value) {
		error = true;
		alert('Please fill in all fields.');
	}
	if (!form['python'].checked && !form['golang'].checked && !form['javascript'].checked && !form['ccpp'].checked && !form['java'].checked) {
		error = true;
		alert('Please select at least one area of interest.');
	}
	if (error) {
		event.preventDefault();
		return;
	}
	event.preventDefault();
	var firstName = form['first-name'].value;
	var lastName = form['last-name'].value;
	var password = form['password'].value;
	var comments = form['comments'].value;
	var languages = [];
	if (form['python'].checked) languages.push('Python');
	if (form['golang'].checked) languages.push('Golang');
	if (form['javascript'].checked) languages.push('JavaScript');
	if (form['ccpp'].checked) languages.push('C/C++');
	if (form['java'].checked) languages.push('Java');
	var languageString = languages.join(', ');
	window.location.href = `info_user.html?first-name=${firstName}&last-name=${lastName}&password=${password}&comments=${comments}&languages=${languageString}`;
});