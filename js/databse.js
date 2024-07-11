const naming = document.getElementById("naming");
const text = document.getElementById("input");
const date = document.getElementById("date");
const file = document.getElementById("file");
const but = document.getElementById("submit");
const form = document.getElementById("holder");
but.addEventListener("click", (e) => {
    var d = naming.value;
    var a = text.value;
    var b = date.value;
    var c = file.files[0];

    e.preventDefault();


const s = {
name:d,
content:a,
date:b,
file:c
} 
form.reset();
console.log(s);

var string = JSON.stringify(s, null, 2);
console.log(string)
var blob = new Blob([string], {type: 'application/json'});
const url = URL.createObjectURL(blob);


})

