const list = document.getElementById("list");
const deleteItem = (event) => {
list.removeChild(event.target);};
const add = () => {
const value = document.getElementById("input").value;
if (value === "") {    return;  }  
const item = document.createElement("li");  
item.innerHTML= value;  
item.addEventListener("click", deleteItem);
list.appendChild(item);
};
const button = document.getElementById("btn");
button.addEventListener("click", add);
