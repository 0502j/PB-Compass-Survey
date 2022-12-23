let text = document.getElementById("textarea");
let countwords = document.getElementById("words");
let alltext = document.getElementById("fulltext");
let characters = text.value.split('');

text.addEventListener("keyup", function(){

    let characters = text.value.split('');

    countwords.innerText = characters.length;

    if(characters.length >= 130){
        alltext.style.color = 'red';
    }else{
        alltext.style.color = 'black';
    }

});
