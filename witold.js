function goNext() {
  document.getElementById("next").innerHTML = "...loading";
  let source =
    "https://cdn.pixabay.com/animation/2023/09/05/23/41/23-41-35-228_512.gif";
  document.getElementById("imgRight").src = source;
  document.querySelector(".link1").style.display = "none";
  document.querySelector(".link2").style.display = "none";
  setTimeout(() => {
    window.location = "karoly.html";
  }, 5000);
}
