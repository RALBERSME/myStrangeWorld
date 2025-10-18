function getSolution() {
  const storyText = document.getElementById("storyText");

  storyText.innerHTML = `
 Am Abend lag Cliff bereits viele Meilen hinter der Konkurrenz zurück. Doch während sich die anderen Läufer nach einem Abendessen hinlegen und ausschliefen, lief Cliff einfach weiter. Er lief die ganze Nacht durch. Im Gegensatz zu den professionellen Läufern hatte er keine Erfahrung mit derartig langen Läufen und den üblichen Strategien, bei denen man sich ausruht. <br/><br/>  So tat Cliff das, was er für sinnvoll hielt und lief weiter. Er lief noch immer in seinem eigenen Tempo. Dieses Tempo war erheblich langsamer als das der anderen Teilnehmer. <br/> <br/> Da er aber Tag und Nacht ununterbrochen lief, während sich die anderen nachts zum Schlafen legten, lag er bald im Rennen vorne und baute seinen Vorsprung mehr und mehr aus. Sein Erfolg beruhte auf einer unkonventionellen, energiesparenden Lauftechnik. <br/><br/> Mit seinem überragenden Sieg wurde er über Nacht zu einer australischen Legende. Er teilte den Großteil seines Preisgeldes mit anderen Läufern und blieb für seine Bescheidenheit und Ausdauer bekannt. Später zog er sich auf seine Farm zurück. Er verstarb im Jahre 2003 als Nationalheld. 
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
