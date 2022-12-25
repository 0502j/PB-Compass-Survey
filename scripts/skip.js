function accskipped(){
    localStorage.setItem("radio-selected", "None specified");
    localStorage.setItem("selected-option", "None specified");
    window.location = "investments.html";

}

function invskip(){
    localStorage.setItem("checkbox-selected", "None specified");
    localStorage.setItem("2nd-selected-option", "None specified");
    window.location = "losses.html";
}

function losskip(){
    localStorage.setItem("textarea-comment", "None specified");
    window.location = "personaldata.html";
}
