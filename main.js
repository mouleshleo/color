const p = document.getElementById('color');
const setBg = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.background = "#" + randomColor;
	p.innerHTML = "#" + randomColor.toUpperCase();
};

p.innerHTML = "PRESS ENTER TO GENERATE COLOR" + '&#127912;';

document.body.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		setBg();
	} 
});
