let headingEl = document.querySelector(".heading");

let headingAnim = anime({
  targets: headingEl,
  delay: 1500,
  opacity: 1,
  duration: 2000,
  easing: "easeInOutExpo",
});

let subheadingAnim = anime({
  targets: ".subheading",
  delay: 2000,
  opacity: 1,
  duration: 2000,
  easing: "easeInOutExpo",
});

let imageCarouselAnim = anime({
  targets: ".image__carousel",
  delay: 2500,
  width: 1525,
  duration: 2000,
});
