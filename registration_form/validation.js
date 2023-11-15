function validate() 
{

    var  y=/[a-z]/;
    var e= document.getElementById("name").value;
if(e.match(y))
alert("valid name")
else
alert("Name should have minimum 6 characters")
var z=/[0-9]{10}/;
var n= document.getElementById("phn").value;
if(n.match(z))
alert("valid number")
else
alert("number should have exact 10 digits")
var b=/[0-9]{6}/;
var c=document.getElementById("pincode").value;
if(c.match(b)){
    alert("Valid pincode");
}
else{
    alert("Pincode should have  6 digits");
}
var x=/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/;
var d= document.getElementById("dob").value;
if(d.match(x))
alert("valid dob")
else
alert("invalid dob")
var w=("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\^&\*])(?=.{8,})");
var a= document.getElementById("pwd").value;
if(a.match(w))
alert("strong password")
else
alert("weak password")
}
 function acknowledgeRegistration() {
    alert('Thank you for acknowledging your registration!');
}