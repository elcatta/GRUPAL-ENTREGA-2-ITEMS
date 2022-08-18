const CONTAINER = document.getElementById("contenedor")


function addText(){
let appendedTxt = document.getElementById("item").value
CONTAINER.innerHTML += '<li>' + appendedTxt + '</li>'
}