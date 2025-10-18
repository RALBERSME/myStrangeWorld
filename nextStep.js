document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  gsap.set(cards[0], { zIndex: 1, rotation: 9, x: 0 });
  gsap.set(cards[1], { zIndex: 2, rotation: 0, x: 0 });
  gsap.set(cards[2], { zIndex: 3, rotation: -9, x: 0 });
  gsap.set(cards[3], { zIndex: 4, rotation: -18, x: 0 });
  gsap.set(cards[4], { zIndex: 5, rotation: 18, x: 0 });
  gsap.set(cards[5], { zIndex: 6, rotation: -27, x: 0 });
  gsap.set(cards[6], { zIndex: 7, rotation: 27, x: 0 });

  const DISTANCE_X = 70;
  const DISTANCE_Y = 15;
  const SHOWTIME = 0.75;

  const timeline = gsap.timeline({ repeat: -1 });

  timeline
    .to(cards[6], {
      x: -1 * DISTANCE_X,
      y: -1 * DISTANCE_Y,
      duration: SHOWTIME,
      ease: "circ.in",
    })
    .set(cards[6], { zIndex: 1 })
    .to(cards[2], { x: 0, duration: SHOWTIME, ease: "circ.out" })
    .set(cards[5], { zIndex: 7 })
    .set(cards[4], { zIndex: 6 })
    .set(cards[3], { zIndex: 5 })
    .set(cards[2], { zIndex: 4 })
    .set(cards[1], { zIndex: 3 })
    .set(cards[0], { zIndex: 2 })
    .to({}, { duration: 1 });

  timeline
    .to(cards[5], {
      x: -1 * DISTANCE_X,
      y: -1 * DISTANCE_Y,
      duration: SHOWTIME,
      ease: "circ.in",
    })
    .set(cards[5], { zIndex: 1 })
    .to(cards[2], { x: 0, duration: SHOWTIME, ease: "circ.out" })
    .set(cards[4], { zIndex: 7 })
    .set(cards[3], { zIndex: 6 })
    .set(cards[2], { zIndex: 5 })
    .set(cards[1], { zIndex: 4 })
    .set(cards[0], { zIndex: 3 })
    .set(cards[6], { zIndex: 2 })
    .to({}, { duration: 1 });

  timeline
    .to(cards[4], {
      x: -1 * DISTANCE_X,
      y: -1 * DISTANCE_Y,
      duration: SHOWTIME,
      ease: "circ.in",
    })
    .set(cards[4], { zIndex: 1 })
    .to(cards[2], { x: 0, duration: SHOWTIME, ease: "circ.out" })
    .set(cards[3], { zIndex: 7 })
    .set(cards[2], { zIndex: 6 })
    .set(cards[1], { zIndex: 5 })
    .set(cards[0], { zIndex: 4 })
    .set(cards[6], { zIndex: 3 })
    .set(cards[5], { zIndex: 2 })
    .to({}, { duration: 1 });

  timeline
    .to(cards[3], {
      x: -1 * DISTANCE_X,
      y: -1 * DISTANCE_Y,
      duration: SHOWTIME,
      ease: "circ.in",
    })
    .set(cards[3], { zIndex: 1 })
    .to(cards[2], { x: 0, duration: SHOWTIME, ease: "circ.out" })
    .set(cards[2], { zIndex: 7 })
    .set(cards[1], { zIndex: 6 })
    .set(cards[0], { zIndex: 5 })
    .set(cards[6], { zIndex: 4 })
    .set(cards[5], { zIndex: 3 })
    .set(cards[4], { zIndex: 2 })
    .to({}, { duration: 1 });

  timeline
    .to(cards[2], {
      x: -1 * DISTANCE_X,
      y: -1 * DISTANCE_Y,
      duration: SHOWTIME,
      ease: "circ.in",
    })
    .set(cards[2], { zIndex: 1 })
    .to(cards[2], { x: 0, duration: SHOWTIME, ease: "circ.out" })
    .set(cards[1], { zIndex: 7 })
    .set(cards[0], { zIndex: 6 })
    .set(cards[6], { zIndex: 5 })
    .set(cards[5], { zIndex: 4 })
    .set(cards[4], { zIndex: 3 })
    .set(cards[3], { zIndex: 2 })
    .to({}, { duration: 1 });

  timeline
    .to(cards[1], {
      x: -1 * DISTANCE_X,
      y: -1 * DISTANCE_Y,
      duration: SHOWTIME,
      ease: "circ.in",
    })
    .set(cards[1], { zIndex: 1 })
    .to(cards[1], { x: 0, duration: 0.4, ease: "circ.out" })
    .set(cards[0], { zIndex: 7 })
    .set(cards[6], { zIndex: 6 })
    .set(cards[5], { zIndex: 5 })
    .set(cards[4], { zIndex: 4 })
    .set(cards[3], { zIndex: 3 })
    .set(cards[2], { zIndex: 2 })
    .to({}, { duration: 1 });

  timeline
    .to(cards[0], {
      x: -1 * DISTANCE_X,
      y: -1 * DISTANCE_Y,
      duration: SHOWTIME,
      ease: "circ.in",
    })
    .set(cards[0], { zIndex: 1 })
    .to(cards[0], { x: 0, duration: SHOWTIME, ease: "circ.out" })
    .set(cards[6], { zIndex: 7 })
    .set(cards[5], { zIndex: 6 })
    .set(cards[4], { zIndex: 5 })
    .set(cards[3], { zIndex: 4 })
    .set(cards[2], { zIndex: 3 })
    .set(cards[1], { zIndex: 2 })
    .to({}, { duration: 1 });
});
