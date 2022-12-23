let text = document.getElementById("textarea");
let countwords = document.getElementById("words");
let alltext = document.getElementById("fulltext");

text.addEventListener("keyup", function(){

    //array containing everything that its written
    let characters = text.value.split('');
    countwords.innerText = characters.length;

    if(characters.length >= 130){
        alltext.style.color = 'red';
    }

});