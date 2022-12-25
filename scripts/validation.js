let form1success = false;
let form2success = false;
const radio = document.querySelectorAll('input[name="radio-opt"]');
let checkboxes = document.querySelectorAll('input[name="res"]');


//Radio buttons + select validation
function checkRadio(){
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked){
            if(validateSelected() !== 'not-selected'){
                form1success=true;
                localStorage.setItem("radio-selected", radio[i].value);
                window.location = "investments.html";
            }
        }
    }

    if(form1success===false){
        alert("Please fill the form before going to the next page.");
        window.location = "account-status.html";
    }
}

//Textarea validation
function checkTextArea(){
    if(text.value === ''){
      alert("Text area is empty. Please try again before going to the next page.");
    }else{
        localStorage.setItem("textarea-comment", text.value);
        window.location = "personaldata.html";
    }

  }
  

//Select validation
function validateSelected(){
    let selection = document.getElementById('sel');
    let seloption = selection.options[selection.selectedIndex];
    let value = seloption.value;

    localStorage.setItem("selected-option", value);

    console.log(value);

    return value;
}

//Select validation - form2
function validateSelectedTwo(){
    let selectionform = document.getElementById('select');
    let selectedoption = selectionform.options[selectionform.selectedIndex];
    let value = selectedoption.value;

    localStorage.setItem("2nd-selected-option", value);

    console.log(value);

    return value;
}

//Validating info fields with Regex
function validatePersonalData(){
    let ageinput = document.getElementById("age");
    const ageRegex = new RegExp(/^[1-9]?[0-9]{1}$|^100$/);
    const isValidAge = ageRegex.test(ageinput.value);

    let nameinput = document.getElementById("name");
    const nameRegex = new RegExp(/^[a-zA-Z ]{2,30}$/);
    const isValidName = nameRegex.test(nameinput.value);

    let emailinput = document.getElementById("email");
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
    const isValidEmail = emailRegex.test(emailinput.value);

    if(isValidName === true && isValidEmail === true && isValidAge === true){
        localStorage.setItem("name-info", nameinput.value);
        localStorage.setItem("email-info", emailinput.value);
        localStorage.setItem("age-info", ageinput.value);
        return true;
    }else{
        return false;
    }
}


function checkPersonalInfo(){
    if(validatePersonalData() === true){
        window.location = "success.html";
    }else{
        alert("Please enter all information correctly before continuing.");
    }
}
