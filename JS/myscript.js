const navBar = document.querySelector("nav"),
  menuBtns = document.querySelectorAll(".menu_icon"),
  overlay = document.querySelector(".overlay");
//done to take the click input from the menu icon and the overlay

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});
/*for every click in the menu btn,this toggles a class called open for the nav bar and with the 
help of that .open css for the nav bar gets implemented which reveals the sidebar to the user*/

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});
/*and when the user clicks in the overlay which turns a darker color when the sidebar is displayed
the class called open gets removed/toggled off which removes the sidebar*/

function form(){
  var e = document.getElementById("email").value;
  if(e==""){
    alert("Please fill up the required field");
  }
  else{
    alert("Thank you for Signing up");
  }
}
/*A funtion that gets called in the footer of every page*/