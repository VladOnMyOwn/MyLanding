// Скрипт для слайдшоу
var m = ['pictures/bg_im1.jpg', 'pictures/bg_im2.jpg', 'pictures/bg_im3.jpg', 'pictures/bg_im4.jpg'];
var i = 0;
function next_img()
{
	i++;
	if (i >= m.length) i = 0;
	document.bg_img_name.src = m[i];
}
setInterval('next_img();', 3000);

// Скрипт для анкеты
var n;
var t;
var em;
var p;
function ank_data() {
	n = document.getElementById('id_name').value;
	t = document.getElementById('id_tel').value;
	em = document.getElementById('id_eMail').value;
	p = document.getElementById('id_purpose').value;
	document.getElementById('id_name').value = '';
	document.getElementById('id_tel').value = '';
	document.getElementById('id_eMail').value = '';
	document.getElementById('id_purpose').value = '';
	alert('Заявка отправлена');
}
