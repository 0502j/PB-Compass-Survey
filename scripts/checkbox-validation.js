// Checkbox validation
const btnnext = document.querySelector('.nextcheck');
btnnext.addEventListener('click', () => {
    let checkboxes = document.querySelectorAll('input[name="res"]:checked');
    let val = [];
    checkboxes.forEach((checkbox) => {
        val.push(checkbox.value);
    });

   if(val != '' && validateSelectedTwo() !== 'not-selected' ){
        form2success = true;
        localStorage.setItem("checkbox-selected", val);
        window.location = "losses.html";
    }

    if(form2success === false){
        alert("Please fill the form before going to the next page.");
    }

});  