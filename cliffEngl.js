function getSolution() {
  const storyText = document.getElementById("storyText");

  storyText.innerHTML = `
 By evening, Cliff was already many miles behind the competition. But while the other runners lay down after dinner and slept in, Cliff simply kept running. He ran all night long. Unlike the professional runners, he had no experience with such long runs and the usual strategies that involve resting. <br/><br/> So Cliff did what he thought was sensible and kept running. He still ran at his own pace. This pace was considerably slower than that of the other participants. <br/> <br/> But because he ran continuously day and night while the others went to bed, he was soon ahead in the race and gradually increased his lead. His success was based on an unconventional, energy-conserving running technique. <br/><br/> With his resounding victory, he became an Australian legend overnight. He shared most of his prize money with other runners and remained known for his humility and perseverance. He later retired to his farm. He died in 2003 as a national hero. 
 `;
  storyText.style.color = "white";
  document.querySelector(".plants").classList.add("hide");
  document.querySelector(".plants2").classList.remove("hide");
  document.getElementById("getSolutionBtn").style.display = "none";
  document.getElementById("next").classList.remove("hide");
  document.querySelector("body").style.backgroundImage =
    "url(images/landscape.jpg)";
  document.querySelector(".story").style.fontSize = "1.3rem";
}
