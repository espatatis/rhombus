const cardWindowNode = document.getElementsByClassName("upper-card-wrapper")[0];
const allCardHolderNode = document.getElementsByClassName("card-wrapper")[0];
const allCards = document.getElementsByClassName("teach-card");
const accessNames = {
  DEFAULT_CARDS_DISPLAYED: "defaultCardsDisplayed",
  CURRENT_CARD_NO: "currentCard",
  MAX_CARDS: "maxCards",
  TOTAL_CARD_SPACE: "totalCardSpace",
  CARD_SINGLE_MARGIN: "cardSingleMargin",
};

/**
 *
 * @param {Number} sizeInPx
 */
function checkMinScreenSize(sizeInPx) {
  if (window.matchMedia(`(min-width: ${sizeInPx}px)`).matches) {
    return true;
  }
  return false;
}

/**
 *
 * @param {Array<HTMLElement> | HTMLCollectionOf<Element>} nodes The array or collection of all nodes
 * @param {String} marginLeft The left margin along with CSS unit
 * @param {String} marginRight The right margin along with CSS unit
 */
function addLeftRightMargins(nodes, marginLeft, marginRight) {
  const length = nodes.length;
  for (let i = 0; i < length; i++) {
    var currentNode = nodes[i];
    currentNode.style.marginLeft = marginLeft;
    currentNode.style.marginRight = marginRight;
  }
}

//All dependent functions i.e state altering functions are starting from here
function initCarouselVars() {
  const cardWidth = parseInt(
    window
      .getComputedStyle(allCards[0])
      .getPropertyValue("width")
      .replace(/[^\d]/, "")
  );

  const cardWindowWidth = parseInt(
    window
      .getComputedStyle(cardWindowNode)
      .getPropertyValue("width")
      .replace(/[A-Z]/gi, "")
  );
  const singleSideMargin = Math.floor((cardWindowWidth - cardWidth * 3) / 6);
  console.log(cardWindowWidth + singleSideMargin * 2);
  window[accessNames.DEFAULT_CARDS_DISPLAYED] = 3;
  window[accessNames.CURRENT_CARD_NO] = 3;
  window[accessNames.MAX_CARDS] = allCards.length;
  window[accessNames.TOTAL_CARD_SPACE] = cardWidth + singleSideMargin * 2;
  window[accessNames.CARD_SINGLE_MARGIN] = singleSideMargin;
}

function leftArrow() {
  const leftArrowNode = document.getElementById("left-arrow-carousel");
  leftArrowNode.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      window[accessNames.CURRENT_CARD_NO] !==
      window[accessNames.DEFAULT_CARDS_DISPLAYED]
    ) {
      const newTranslateX =
        getTranslateXforrootCardHolder() + window[accessNames.TOTAL_CARD_SPACE];
      allCardHolderNode.style.transform = `translateX(${newTranslateX}px)`;
      window[accessNames.CURRENT_CARD_NO] =
        window[accessNames.CURRENT_CARD_NO] - 1;
    }
  });
}
function rightArrow() {
  const rightArrowNode = document.getElementById("right-arrow-carousel");
  rightArrowNode.addEventListener("click", (e) => {
    e.preventDefault();
    if (window[accessNames.CURRENT_CARD_NO] !== window[accessNames.MAX_CARDS]) {
      const newTranslateX =
        getTranslateXforrootCardHolder() +
        -1 * window[accessNames.TOTAL_CARD_SPACE];
      allCardHolderNode.style.transform = `translateX(${newTranslateX}px)`;
      window[accessNames.CURRENT_CARD_NO] =
        window[accessNames.CURRENT_CARD_NO] + 1;
    }
  });
}
function getTranslateXforrootCardHolder() {
  const style = window.getComputedStyle(allCardHolderNode);
  const matrix = style.transform || style.webkitTransform || style.mozTransform;
  if (matrix && matrix !== "none") {
    const filter = matrix.replace(/[^\d,-.]/gi, "").split(",");

    const translateX = parseInt(filter[4] || 0);
    return translateX;
  }
  return 0;
}
/**
  function leftArrow() {
  const leftArrowNode = document.getElementById("left-arrow-carousel");
  leftArrowNode.addEventListener("click", (e) => {
    e.preventDefault();
    const style = window.getComputedStyle(allCardHolderNode);
    const matrix =
      style.transform || style.webkitTransform || style.mozTransform;
    if (matrix && matrix !== "none") {
      const filter = matrix.replace(/[^\d,-.]/gi, "").split(",");

      const translateX = parseInt(filter[4]);
      if (!translateX >= 0) {
        const newTranslateX = translateX + window[accessName.TOTAL_CARD_SPACE];
        allCardHolderNode.style.transform = `translateX(${newTranslateX}px)`;
        window[accessNames.CURRENT_CARD_NO] =
          window[accessNames.CURRENT_CARD_NO] - 1;
      }
    }
  });
}
 */
function addCarouselFunctionality() {
  if (checkMinScreenSize(1220)) {
    initCarouselVars();

    addLeftRightMargins(
      allCards,
      `${window[accessNames.CARD_SINGLE_MARGIN]}px`,
      `${window[accessNames.CARD_SINGLE_MARGIN]}px`
    );
    leftArrow();
    rightArrow();
  }
}

addCarouselFunctionality();
