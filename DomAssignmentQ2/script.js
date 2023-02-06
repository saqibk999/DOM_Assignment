const btn = document.getElementById('btn');
const api_url = "https://jsonplaceholder.typicode.com/users/1";
let list = document.getElementById("list");
const card=document.getElementById('card');

btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Button is Clicked';
  btn.style.backgroundColor= 'magenta';
  btn.style.borderColor='purple';
  event.stopPropagation();
});

card.addEventListener('click', function handleClick(){
  console.log("card clicked");
  getapi(api_url);
});
  
async function getapi(url) {
    
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let fetched = data;
      console.log(fetched);
      let name = document.createElement("li");
      let email = document.createElement("li");
      let id = document.createElement("li");

      name.innerText ="name= "+ fetched.name;
      email.innerHTML ="email= "+ fetched.email;
      id.innerHTML ="id= "+ fetched.id;
      list.append(id);
      list.appendChild(name);
      list.appendChild(email);
    })
    
}

