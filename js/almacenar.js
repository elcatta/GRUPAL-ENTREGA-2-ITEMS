const CONTAINER = document.getElementById("contenedor")
if (localStorage.getItem('lista') != null){
    CONTAINER.innerHTML = localStorage.getItem('lista')
}

function addText(){
    let appendedTxt = document.getElementById("item").value
    if (appendedTxt != "" && appendedTxt != null){
        localStorage.setItem('lista', localStorage.getItem('lista') + '<li>' + appendedTxt + '</li>')
        document.getElementById("item").value = ""
        CONTAINER.innerHTML = localStorage.getItem('lista')
    }
}

function clean(){
    CONTAINER.innerHTML = ""
    localStorage.setItem('lista', '')
}
