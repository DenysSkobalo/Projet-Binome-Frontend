const urlParams = new URLSearchParams(window.location.search);
const firstName = urlParams.get('first-name');
const lastName = urlParams.get('last-name');
const password = urlParams.get('password');
const comments = urlParams.get('comments');
const languages = urlParams.get('languages');

document.getElementById('first-name').innerText = firstName;
document.getElementById('last-name').innerText = lastName;
document.getElementById('password').innerText = password;
document.getElementById('comments').innerText = comments;
document.getElementById('languages').innerText = languages;