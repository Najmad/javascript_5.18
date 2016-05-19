$(window).load(function(){
		console.log();

		$("#lightBox").fadeIn(500);

		// //$("#closeBtn").click( function(){ 
		// 	console.log("submit button clicked");
		
		// email_var 	= $("#email").val();
		// pass_var 	= $("#pass").val();
		// zip_var 	= $("#zip").val();	



		// })

		var email_var;
		var pass_var;
		var zip_var;

		var email_valid 	= false;
		var pass_valid 		= false;
		var zip_valid 		= false;

		// if( zip_var == "" ){
		// 	$("#zip").css("border", "solid 1px red");
		// }else{
		// 	zip_valid = validate( "zipCode", zip_var );
		// }

		// if( email_var == "" ){
		// 	$("#email").css("border", "solid 1px red");
		// }else{
		// 	email_valid = validate( "emailAddress", email_var );
		// }

		// if( pass_var == "" ){
		// 	$("#pass").css("border", "solid 1px red");
		// }else{
		// 	pass_valid = validate( "password", pass_var );
		// }




$("#closeBtn").click( function(){
		console.log("----------------------")
		email_var 	= $("#email").val();
		zip_var 	= $("#zip").val();
		pass_var 	= $("#pass").val();

		if( zip_var == "" ){
			$("#zip").css("border", "solid 1px red");
		}else{
			zip_valid = validate( "zipCode", zip_var );
		}

		if( email_var == "" ){
			$("#email").css("border", "solid 1px red");
		}else{
			email_valid = validate( "emailAddress", email_var );
		}

		if( pass_var == "" ){
			$("#pass").css("border", "solid 1px red");
		}else{
			pass_valid = validate( "password", pass_var );
		}
		console.log(zip_valid)
		console.log(email_valid)
		console.log(pass_valid)

		if (zip_valid && email_valid && pass_valid){
			$("#lightbox").fadeOut( 500 );

		}

	})

		function validate( inputType, userInput ){
		var valid = false;
		switch( inputType ){
			case 'normalString':
					console.log( "Validating a String" );
					userInput = cleanUp( userInput );
					valid = true;

					case 'zipCode':
					console.log( "Validating a zip code" );
					userInput = cleanUp( userInput );
					if( isNaN( userInput ) ){
						valid = false;
					}else{
						//so far so good.
						if( userInput.length == 5 ){
							valid = true;
						}else{
							valid = false;
						}
					}
					break;

			case 'password':
					console.log( "Validating a password" );
					userInput = cleanUp( userInput );
					if( isNaN( userInput ) ){
						valid = false;
					}else{
				
						if( userInput == "password" ){
							valid = true;
						}else{
							valid = false;
						}
					}
						break;
					
			case 'emailAddress':
				console.log( "Validating Email Address" );
					userInput = cleanUp( userInput );
					if( userInput.indexOf("@") >= 0){
						//valid so far...
						if( userInput.indexOf(".") >= 0 ){
							valid = true;
						}
					}
				break;
		}
	}

	function cleanUp( userInput){
		return userInput
	}
});