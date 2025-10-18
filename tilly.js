function goOn() {
  let wave1 = document.getElementById("video1");
  let wave2 = document.getElementById("video2");
  let wave3 = document.getElementById("video3");
  wave1.style.visibility = "visible";
  wave2.style.visibility = "visible";
  wave3.style.visibility = "visible";
  setTimeout(() => {
    window.location = "lata1.html";
  }, 7500);
}
