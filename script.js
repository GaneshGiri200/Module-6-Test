var errors = 0;
function formValidation(){
    errors = 0;

    if (document.getElementById('firstName').value.length < 3){
        errors++;
        document.getElementById('firstNameError').style.visibility = 'visible';
    }else {
        document.getElementById('firstNameError').style.visibility = 'hidden';
    }

    if (document.getElementById('lastName').value.length < 3){
        errors++;
        document.getElementById('lastNameError').style.visibility = 'visible';
    }else {
        document.getElementById('lastNameError').style.visibility = 'hidden';
    }

    var email = document.getElementById("InputEmail").value;
    var exp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.]{5})+\.([A-Za-z]{2,4})$/;

    if(exp.test(email)){
        document.getElementById('InputEmailError').style.visibility = 'hidden';
    }else {
        errors++;
        document.getElementById('InputEmailError').style.visibility = 'visible';
    }

    var password = document.getElementById("InputPassword").value;
    var exp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(exp.test(password)){
        document.getElementById('InputPasswordError').style.visibility = 'hidden';
    }else {
        errors++;
        document.getElementById('InputPasswordError').style.visibility = 'visible';
    }

    if (document.getElementById('confirmPassword').value === password){
        document.getElementById('confirmPasswordError').style.visibility = 'hidden';
    }else {
        errors++;
        document.getElementById('confirmPasswordError').style.visibility = 'visible';
    }

    if(document.getElementById('termAndCondition').checked == true){
        document.getElementById('termAndConditionError').style.visibility = 'hidden';
    }else {
        errors++;
        document.getElementById('termAndConditionError').style.visibility = 'visible';
    }

    if (errors == 0){
        alert('Your details has been successfully submitted!')
        var inputs = document.getElementsByTagName('input');
        for(i = 0; i < inputs.length; i++){
            inputs[i].value = '';
        }
    }
}
