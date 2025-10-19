function goNext() {
  document.getElementById("next").innerHTML = "...loading";
  let source = "images/breakthrough.gif";
  document.getElementById("imgRight").src = source;
  document.querySelector(".link1").style.display = "none";
  document.querySelector(".link2").style.display = "none";
  setTimeout(() => {
    window.location = "karolyEngl.html";
  }, 4500);
}
