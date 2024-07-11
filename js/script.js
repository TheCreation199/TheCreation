const bleft = document.getElementById("left");
const bright = document.getElementById("right");
const img1 = document.getElementById("img1");
let a = "a";
var obj = {
    a1: "url(../img/1.png)",
    a2: "url(../img/2.png)",
    a3: "url(../img/3.png)",
    a4: "url(../img/4.png)"
}
var objl = Object.keys(obj).length;






let ci = 0;
function always() {
    if (ci < 1) {
        ci = 1;
    }
    if (ci > objl) {
        ci = objl;
    }

    requestAnimationFrame(always)
}





window.onload = e => {
    ci++;
    img1.style.backgroundImage = obj[a + ci];
    always()

}

bleft.addEventListener("click", e => {
    img1.classList.remove("hidden2");
    img1.classList.add("hidden");
    ci--;
    img1.style.backgroundImage = obj[a + ci];
   
    setTimeout(function () {

        img1.classList.remove("hidden");
        img1.classList.add("hidden2");

    


    },250)

})



bright.addEventListener("click", e => {
    img1.classList.remove("hidden2");
    img1.classList.add("hidden");
    ci++;
    img1.style.backgroundImage = obj[a + ci];

    setTimeout(function () {
        img1.classList.remove("hidden");
        img1.classList.add("hidden2");
    },250)
    


});

const id = "creationtext";


color(id);
function color(id) {
    let aid = document.getElementById(id);
    aid.style.background = "linear-gradient(90deg, #008080, #f4d884)";
    aid.style.backgroundClip = "text";
    aid.style.webkitTextFillColor = "transparent";

}








