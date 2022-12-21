//SIDEBAR PROJECT
let btn = document.querySelector("nav .btn");

let sidebar = document.querySelector(".sidebar");

function sidebarToggler() {
  sidebar.classList.add("active");
}

btn.addEventListener("click", sidebarToggler);