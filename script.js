const hamburger = document.querySelector(".btn-toggle-nav");

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar span");
    const bodyElement = document.body;
    const home = document.getElementById("home");
    const rood = document.getElementById("red");
    const oranje = document.getElementById("orange");
    const geel = document.getElementById("yellow");
    const groen = document.getElementById("green");
    const blauw = document.getElementById("blue");
    const indigo = document.getElementById("indigo");
    const violet = document.getElementById("violet");
    
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "200px";
    getSidebarLinks.forEach(element => element.style.opacity = "1");
        
    home.addEventListener("click", function() {bodyElement.style.background = "#f1f1f1", getSidebar.style.width = "0px"})
    rood.addEventListener("click", function() {bodyElement.style.background = "red", getSidebar.style.width = "0px"});
    oranje.addEventListener("click", function() {bodyElement.style.background = "orange", getSidebar.style.width = "0px"});
    geel.addEventListener("click", function() {bodyElement.style.background = "yellow", getSidebar.style.width = "0px"});
    groen.addEventListener("click", function() {bodyElement.style.background = "green", getSidebar.style.width = "0px"});
    blauw.addEventListener("click", function() {bodyElement.style.background = "blue", getSidebar.style.width = "0px"});
    indigo.addEventListener("click", function() {bodyElement.style.background = "indigo", getSidebar.style.width = "0px"});
    violet.addEventListener("click", function() {bodyElement.style.background = "violet", getSidebar.style.width = "0px"});
}   
    
hamburger.addEventListener("click", toggleNav);

