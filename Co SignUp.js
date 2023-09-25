//Password Check
function password() {
    var mypwd=document.getElementById("pwd");
    var my_re_pwd=document.getElementById("re_pwd");
    if(mypwd.value=="")
    {
        alert("You have not entered the password");
        mypwd.focus();// Cursor stay particularly at that position after showing the pop up msg
        return false;
    }
    if(mypwd.value!=my_re_pwd.value)
    {
        alert("Password is not verified,Re-enter both the passwords");
    }
    else{
        alert("Congratulations!!!!");
        return true;
    }
}

// Email Check
document.getElementById("myform").addEventListener("submit",function(event){
    const mail=document.getElementById("Email").value;
    if(!mail||!mail.includes("@")){
        alert("Invalid email address!!!");
        event.preventDefault();
    }
    });
//Country Selection
    function check(w)
        {
            document.f1.countryselected.value=w
        }
//Recheck Of Submittion
        function myFunction() {  
            var result;  
            var r = confirm("Select an Action!");  
            if (r == true) {  
                result = "You have selected OK!";  
            } 
            else {  
                result = "You have selected Cancelled!";  
            }  
            document.getElementById("conf").innerHTML = result;  
        }  