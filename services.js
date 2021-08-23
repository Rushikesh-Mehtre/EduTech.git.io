let hamburger = document.querySelectorAll(".fa-bars");
hamburger[0].addEventListener("click", function3);
function function3(e) {
  if (document.querySelectorAll(".nav-item-list")[0].style.display == "none") {
    document.querySelectorAll(".nav-item-list")[0].style.display = "block";
    console.log("clicked");
  } else {
    document.querySelectorAll(".nav-item-list")[0].style.display = "none";
  }
  e.preventDefault();
}
