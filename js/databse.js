const form = document.getElementById('myForm')


var options = {
    "async": true,
    "crossDomain": true,
    "method": 'GET',
    "headers": {
        'Content-Type': 'text/plain;charset=utf-8'

    },
    "redirect": 'follow',

};


form.addEventListener("submit", function(event) {
    event.preventDefault();

    var formdata = new FormData(form);
    var params = new URLSearchParams(formdata).toString()
    const url = 'https://script.google.com/macros/s/AKfycbwNT9DY9lCoiVwhIp4TA94ewIbRBGOs5Xnmql9vQySd8XIZVxSXEr0f8h6UcV2U0wv1/exec' + '?'+ params
console.log(url)




















    fetch(url, options)
        .then(response => response.json())



        .then(data =>{
console.log("success", data)




        })











        .catch((error) => {


            console.log("error", error)


        })


})