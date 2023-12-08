const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const nextBtn = document.querySelector(".next-btn");
const noBtn = document.querySelector(".no-btn");
const finalBtn = document.querySelector(".final-btn")
const youtube = document.querySelector(".youtube");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 9th Dec!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  yesBtn.style.display = "none";
  nextBtn.style.display = "inline"
});

nextBtn.addEventListener("click", () => {
  question.innerHTML = "Here the song for you <3";
  gif.style.display = "none";
  youtube.style.display = "inline";
  nextBtn.style.display = "none";
  finalBtn.style.display = "inline";
});

finalBtn.addEventListener("click", () => {
  question.innerHTML = "Are you ready to be mine ?";
  youtube.style.display = "none";
  finalBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});