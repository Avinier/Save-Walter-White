gsap.registerPlugin(ScrollTrigger);

//Background SVGS
for (let i = 1; i <= 150; i++) {
  let min = Math.ceil(40);
  let max = Math.floor(60);

  let sizeNum = Math.floor(Math.random() * (max - min + 1) + min);

  let svgEl = document.getElementById(`bgsvg-${i}`);

  svgEl.style.width = `${sizeNum}px`;
  svgEl.style.height = `${sizeNum}px`;

  anime({
    targets: `#bgsvg-${i}`,
    translateY: -600,
    duration: 50000,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
  });
}

for (let j = 1; j <= 150; j++) {
  let min = Math.ceil(0);
  let max = Math.floor(750);

  let topNum = Math.floor(Math.random() * (max - min + 1) + min);
  let leftNum = Math.floor(Math.random() * (95 - min + 1) + min);

  let svgPosEl = document.getElementById(`bgsvg-${j}`);
  svgPosEl.style.top = `${topNum}vh`;
  svgPosEl.style.left = `${leftNum}vw`;
}

for (let i = 1; i <= 25; i++) {
  let min = Math.ceil(100);
  let max = Math.floor(150);

  let sizeNum = Math.floor(Math.random() * (max - min + 1) + min);

  let bigSvgEl = document.getElementById(`bigsvg-${i}`);
  bigSvgEl.style.width = `${sizeNum}px`;
  bigSvgEl.style.height = `${sizeNum}px`;
}

for (let j = 1; j <= 25; j++) {
  let min = Math.ceil(0);
  let max = Math.floor(750);

  let topNum = Math.floor(Math.random() * (max - min + 1) + min);
  let leftNum = Math.floor(Math.random() * (100 - min + 1) + min);

  let bigSvgPosEl = document.getElementById(`bigsvg-${j}`);
  bigSvgPosEl.style.top = `${topNum}vh`;
  bigSvgPosEl.style.left = `${leftNum}vw`;
}

//Title
anime({
  targets: "#Color_Fill_1",
  strokeDashoffset: [anime.setDashoffset, 0],
  direction: "alternate",
  easing: "linear",
  duration: 7000,
});

anime({
  targets: ".titlesvg",
  opacity: 0,
  delay: 7000,
  duration: 1000,
  easing: "easeInOutQuad",
});

let headingAnim = anime({
  targets: ".heading",
  opacity: 1,
  delay: 7000,
  duration: 2000,
  easing: "easeInOutExpo",
});

let tl = anime.timeline({
  easing: "linear",
  delay: 4000,
  duration: 4000,
});

tl.add(
  {
    targets: ".father",
    opacity: 1,
  },
  1000
)
  .add(
    {
      targets: ".husband",
      opacity: 1,
      translateX: 120,
      z: 0,
    },
    1000
  )
  .add(
    {
      targets: ".teacher",
      opacity: 1,
      translateX: 280,
      z: 0,
    },
    1000
  );

// GSAP Scroll Animations
let imgTl = gsap.timeline({ duration: 4 });

imgTl
  .to(".image__grid-1", {
    scrollTrigger: {
      trigger: ".image__grid-1",
      start: "-1000px 10%",
      end: "-=1000px",
      scrub: 1,
    },
    y: -480,
  })
  .to(".image__grid-2", {
    scrollTrigger: {
      trigger: ".image__grid-2",
      start: "-900px 10%",
      end: "-=900px",
      scrub: 1,
    },
    y: -480,
  })
  .to(".image__grid-3", {
    scrollTrigger: {
      trigger: ".image__grid-3",
      start: "-800px 10%",
      end: "-=800px",
      scrub: 1,
    },
    y: -480,
  })
  .to(".image__grid-4", {
    scrollTrigger: {
      trigger: ".image__grid-4",
      start: "-900px 10%",
      end: "-=900px",
      scrub: 1,
    },
    y: -480,
  });

const contentTL = gsap.timeline({ ease: "power4.out" });

for (let i = 1; i < 10; i++) {
  contentTL.to(`.content--${i}`, {
    scrollTrigger: {
      trigger: `.content--${i}`,
      start: "-20px 50%",
      end: "50% 15%",
      scrub: true,
    },
    y: -20,
  });
}

const bgEL = gsap.timeline();
const bgArr = [
  `180, 100%, 50%`,
  `146, 100%, 50%`,
  `330, 100%, 50%`,
  `271, 100%, 50%`,
];

for (let j = 0; j < 4; j++) {
  bgEL.to(".gradientoverlay", {
    scrollTrigger: {
      trigger: ".gradientoverlay",
      start: `${200 * j}% top`,
      end: `bottom top`,
      scrub: true,
    },
    backgroundImage: `linear-gradient(200deg,
      hsla(${bgArr[j]}, 0.3) 0%,
      hsla(${bgArr[j]}, 0.218) 19%,
      hsla(${bgArr[j]}, 0.123) 34%,
      hsla(${bgArr[j]}, 0.058) 47%,
      hsla(${bgArr[j]}, 0.046) 56.5%,
      hsla(${bgArr[j]}, 0.029) 65%,
      hsla(${bgArr[j]}, 0.01) 73%,
      hsla(${bgArr[j]}, 0.008) 80.2%,
      hsla(${bgArr[j]}, 0) 86.1%,
      hsla(${bgArr[j]}, 0) 91%,
      hsla(${bgArr[j]}, 0) 95.2%,
      hsla(${bgArr[j]}, 0) 98.2%,
      hsla(${bgArr[j]}, 0) 100%
    )`,
  });
}

//Typing Animation
let contentEnd1El = document.querySelector(".content--end1");
let contentEnd2El = document.querySelector(".content--end2");
let contentEnd3El = document.querySelector(".content--end3");

let options1 = {
  strings: ["What a wonderful dad I have,<br />^500 But he is in trouble."],
  typeSpeed: 40,
};
let options2 = {
  strings: [
    "^500It's <span class='lung'>Lung Cancer</span>.<br />He needs an operation.^500 Now!",
  ],
  typeSpeed: 40,
  startDelay: 4500,
};
let options3 = {
  strings: [
    "^500To help, please send your contribution<br />to our operation fund<br />and keep my Dad in your prayers!",
  ],
  typeSpeed: 40,
  startDelay: 8500,
};

ScrollTrigger.create({
  trigger: ".content__second",
  start: "-200px 50%",
  end: "-10px 50%",
  onEnter: () => {
    console.log("entered");
    new Typed(contentEnd1El, options1);
    new Typed(contentEnd2El, options2);
    new Typed(contentEnd3El, options3);
  },
  once: true,
});

//SVG ANIMATIONS
// let flypathEl = anime.path(".flypath");

// anime({
//   targets: ".flysvg",
//   translateX: flypathEl("x"),
//   translateY: flypathEl("y"),
//   easing: "easeOutQuad",
//   loop: true,
// });

//SAVE BANNER ANIMATIONS
let bannertl = anime.timeline({
  easing: "easeOutExpo",
  duration: "5000",
  loop: true,
});

//VISITORS
import { fetchHandler } from "./form.js";
let visitorsEl = document.querySelector(".visitors");

const USERDATA = [
  ["Aditya", "Your Mom"],
  ["A kid named finger", "Philadelphia"],
  ["Hank Schrader", "Albeqerque"],
  ["Sussy Baka", "Albeqerque"],
  ["Skyler White", "Teds Bed"],
  ["Flynn, aka Walter White Jr.", "Breakfast Table"],
  ["Captain Cook", "Your Biatch"],
  ["Marie Schrader", "Jewellery Shop"],
  ["Bogdan", "A1A CarWash"],
  ["Huell Babinaux", "Some random apartement"],
];

const userData = await fetchHandler();
console.log(userData);
let list = ``;

userData.map((arr) => {
  list += `<li class="visitor--items"><span class="text-teal-200">${arr.name}</span> from ${arr.location}</li>`;
});

visitorsEl.innerHTML = list;

anime({
  targets: ".visitor--items",
  translateY: -150,
  duration: 6000,
  easing: "linear",
  delay: 1000,
  loop: true,
});
