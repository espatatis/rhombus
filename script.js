const sliderCloseNode = document.getElementById("slider-menu-close");
const sliderMenu = document.getElementById("slider-menu");
const sliderOpener = document.getElementById("menu-opener");
sliderCloseNode.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  sliderMenu.style.display = "none";
});
sliderOpener.addEventListener("click", () => {
  sliderMenu.style.display = "block";
});
{
  const menus = sliderMenu.getElementsByTagName("a");
  let length = menus.length;
  for (let i = 0; i < length; i++) {
    const item = menus.item(i);
    item.addEventListener("click", (e) => {
      document.body.style.overflow = "auto";
      sliderMenu.style.display = "none";
    });
  }
}

const allQuestionNodes = document.getElementsByClassName("faq-single-question");
const allAnswerNodes = document.getElementsByClassName("faq-answer");
console.log(allAnswerNodes[0].style);
for (let i = 0; i < allQuestionNodes.length; i++) {
  allAnswerNodes[i].style.maxHeight = "0px";
  allQuestionNodes[i].addEventListener("click", () => {
    const height = allAnswerNodes[i].style.maxHeight;
    console.log("0px" == allAnswerNodes[i].style.maxHeight);
    if (height == "0px") {
      allAnswerNodes[i].style.maxHeight = "500px";
      console.log(allAnswerNodes[i].style.maxHeight);
    } else {
      allAnswerNodes[i].style.maxHeight = "0px";
    }
  });
}
