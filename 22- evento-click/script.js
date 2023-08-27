let btn = document.getElementById("btn");

function clickear() {
  btn.innerHTML = "me clickeaste <3";
  btn.style.backgroundColor = "red";
  console.log("Te saludo desde la consola :3");
}

btn.addEventListener("click", clickear);
