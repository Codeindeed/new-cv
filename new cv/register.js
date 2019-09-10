const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirm_password").value;
const emailRegex = /[a-zs0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const button=document.getElementById("button")
button.addEventListener("click",function(e){
                e.preventDefault();
               // alert("you have sucessfully registered")//
             const username = document.getElementById("username").value;
             const email = document.getElementById("email").value;
             const password = document.getElementById("password").value;
             const confirmPassword = document.getElementById("confirm_password").value;
               console.log(username.length,password,email,confirmPassword);
               console.log(emailRegex.test(email))
               console.log(password.length)
               if(username.length<6){
                   alert("username should be greater than 6 characters")
               }
               else if(password!=confirmPassword){
                   alert("password does not match")
               }
               else if(emailRegex.test(email)==false){
                   alert("invalid email address")
               }
               else{
                   alert("account creation is successful")
               }            
})