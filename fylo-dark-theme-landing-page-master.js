'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
};

$(window).resize(function(){
	location.reload();
});

let check='';  let timer,timeoutVal=1000;
const email= document.getElementById('email');
const submitButton = document.getElementById('second-btn');

const keyUp = (event)=>{
	//The user may be done typing the email address , check to see if it's valid before enabling submit button
	window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
    timer = window.setTimeout(() => {
       check = validateEmail(email);
	   //on check is true(valid email), enablebutton.
	   if(check){
		 enableButton(submitButton);
		 $('.invalid-feedback').css('display','none');
		 
	   }else{
		  disableButton(submitButton);
		 $('.invalid-feedback').css('display','block');
	   }
    }, timeoutVal);
}
const keyPress =(event)=>{
	//The user may accidently delete part of the email after typing it, prevent submit even after button enabled
	window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
	check = validateEmail(email);
	if(check){
	   $('.invalid-feedback').css('display','none');
	}else{
	
	   disableButton(submitButton);
	}
}

$(window).on('load',function(){
	$('submitButton').on('click',function(){
		 $('.invalid-feedback').css('display','block');
	 });
	//User has pressed the keyboard ,and entered some data in the input field
	 email.addEventListener('keyup',keyUp);
	 email.addEventListener('keypress',keyPress);
});