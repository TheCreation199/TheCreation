const holder = document.getElementById("holder");
const text  = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis repellat, iste possimus nam, placeat ratione labore odio neque adipisci vel provident nobis mollitia magnam nostrum dolorem quos rem, dicta optio.rem";

function addArea() {
    var addDiv = document.createElement("div");
addDiv.textContent = text;
addDiv.classList.add("sections")
holder.appendChild(addDiv);
}