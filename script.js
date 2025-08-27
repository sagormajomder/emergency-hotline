const data = {
  numHeart: 0,
};

// elements
const numLikeBtnEl = getIdElement('likeNum');
const heartBtnEls = document.querySelectorAll('.fa-heart');

// Helpers functions
function getIdElement(id) {
  return document.getElementById(id);
}
// Listener for adding Like number
for (const heartBtnEl of heartBtnEls) {
  heartBtnEl.addEventListener('click', function (e) {
    data.numHeart += 1;
    numLikeBtnEl.innerText = data.numHeart;
  });
}
