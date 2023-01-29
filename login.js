var formEdit = document.getElementById("form");



formEdit.addEventListener("submit", function(event){
   event.preventDefault();

   const emailVerify = document.getElementById("emailIcon");

   const regexEmail = /\w+\.\w+@\w+\.\w+\.\w+ |\w+@\w+\.\w+/;

   const passwordVerify = document.getElementById("passwordIcon");

   const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

   if(regexEmail.test(emailVerify.value)){ 
       emailVerify.style.border = "2px solid #13c362";
   }
   else{
       emailVerify.style.border = "2px solid #d51f1a";
   }


   if(regexPassword.test(passwordVerify.value)){ 
       passwordVerify.style.border = "2px solid #13c362";
   }
   else{
       passwordVerify.style.border = "2px solid #d51f1a";
       
   }
});

