let form1success = false;
const radio = document.querySelectorAll('input[name="radio-opt"]');

function checkRadio(){
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked){
            if(validateSelected() !== 'not-selected'){
                form1success=true;
                window.location = "investments.html";
            }
        }
    }

    if(form1success===false){
        alert("Please fill the form before going to the next page.");
        window.location = "account-status.html";
    }
}

function checkTextArea(){
    if(text.value === ''){
      alert("Text area is empty. Please try again before going to the next page.");
    }else{
        window.location = "personaldata.html";
    }
  }
  


function validateSelected(){
    let selection = document.getElementById('sel');
    let seloption = selection.options[selection.selectedIndex];
    let value = seloption.value;

    console.log(value);

    return value;
}

