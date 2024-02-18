const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".form__list");

function createTodo(){
    let inValue = input.value;
    if(inValue){
    let elItem = document.createElement("li");
    elItem.textContent = inValue;
    elItem.className="elInput"
    list.appendChild(elItem)
    } 
}

form.addEventListener("submit",function(e){
e.preventDefault();
createTodo()
 input.value = ""
})