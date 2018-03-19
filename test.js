var target = document.querySelector('.target-area');

var shot3 = document.querySelector('.shots3');
var shot10 = document.querySelector('.shots10');
var shot20 = document.querySelector('.shots20');


target.addEventListener('click', function(e) {

	var noAmmo = target.getElementsByClassName('bullet');

	if (noAmmo.length == 19) {
		shot20.style.opacity = '1';
	};

	if (noAmmo.length == 9) {
		shot10.style.opacity = '1';
	};

	if (noAmmo.length == 2) {
		shot3.style.opacity = '1';
	};

	var x = e.clientX;
	var y = e.clientY;
	var audio = document.getElementsByTagName("audio")[0];

	var bullet = document.createElement('DIV');

	bullet.style.top = y - 12 + 'px';
	bullet.style.left = x - 12 + 'px';
	bullet.classList.add('bullet');

	target.appendChild(bullet);

	audio.play();

});

