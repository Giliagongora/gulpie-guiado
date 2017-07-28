/* Configuración a menu responsive */
$(document).ready(function(){
	//side nav bar
	$('.button-collapse').slide-nav({
		menuWidth: 170,
		edge: 'left',
		closeOnClick: true,
		draggable: true
	});
});