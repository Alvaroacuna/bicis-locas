function validateForm(){

	$(".error").remove();
	
	var name = $('#name').val();
	var lastname = $('#lastname').val();
	var input_email = $('#input-email').val();
	var input_password = $('#input-password').val();

	if (name == "") {
		$('.name-container').append('<span class="error">Debes escribir un nombre</span>');
	}

	if (lastname == "") {
		$('.lastname-container').append('<span class="error">Debes escribir un apellido</span>');
	}

	if (input_email == "") {
		$('.email-container').append('<span class="error">Tienes que escribir un email</span>');
	}

	if(input_password == "") {
		$('.input-box').eq(3).append('<span class="error">Tienes que crear una contraseña</span>');
	} else if (input_password.length < 6) {
		$('.input-box').eq(3).append('<span class="error">El largo debe ser de al menos 6 carácteres</span>');
	} else if (input_password == 'password' || input_password == '123456' || input_password == '098765') {
		$('.input-box').eq(3).append('<span class="error">La contraseña no puede ser igual a "password" o "123456" o "098765"</span>')
	}



}