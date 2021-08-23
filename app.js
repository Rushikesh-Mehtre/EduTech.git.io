// const readmore = document.getElementsByClassName("read-more")[0];
// readmore.addEventListener("click", function1);
// function function1(e) {
//   document.getElementsByClassName("read-more-content")[0].style.display =
//     "block";
//   e.preventDefault();
//   document.getElementById("read-more").style.display = "none";
//   document.getElementById("read-less").style.display = "block";
// }
// const readless = document.getElementById("read-less");
// readless.addEventListener("click", function2);
// function function2(e) {
//   document.getElementById("read-more-content").style.display = "none";
//   e.preventDefault();
//   document.getElementById("read-more").style.display = "block";
//   document.getElementById("read-less").style.display = "none";
// }
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
let chat = document.querySelector(".chat-with-us");
chat.addEventListener("click", function4);
function function4(e) {
  if (document.querySelector(".chat-msg").style.display == "none") {
    document.querySelector(".chat-msg").style.display = "block";
  } else {
    document.querySelector(".chat-msg").style.display = "none";
  }
}
