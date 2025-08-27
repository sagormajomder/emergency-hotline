const data = {
  numHeart: 0,
  numCoin: 100,
  services: [],
  numCopy: 0,
};

// elements
const numLikeBtnEl = getIdElement('likeNum');
const heartBtnEls = document.querySelectorAll('.fa-heart');

const numCoinEl = getIdElement('coinNum');
numCoinEl.innerText = data.numCoin;
const callBtnEls = document.querySelectorAll('.callBtn');

const numCopyEl = getIdElement('copyNum');
const clearHistoryBtn = getIdElement('clearBtn');

// Helpers functions
function getIdElement(id) {
  return document.getElementById(id);
}

function renderCallHistory() {
  const callHistoryParentEl = getIdElement('callHistoryParent');
  callHistoryParentEl.innerHTML = '';
  let html = '';

  for (const service of data.services) {
    html += `
  <div class="flex justify-between items-center">
              <div class="">
                <h4 class="heading-quaternary">${service.name}</h4>
                <p>${service.number}</p>
              </div>
              <p class="text-dark">${service.time}</p>
            </div>
  `;
  }
  callHistoryParentEl.innerHTML = html;
}

// Listener for adding Like number
for (const heartBtnEl of heartBtnEls) {
  heartBtnEl.addEventListener('click', function (e) {
    data.numHeart += 1;
    numLikeBtnEl.innerText = data.numHeart;
  });
}

// Listener for reducing coin
for (const callBtnEl of callBtnEls) {
  callBtnEl.addEventListener('click', function (e) {
    e.stopPropagation();

    if (data.numCoin < 20) {
      alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।');
      return;
    }

    const newService = {};

    if (e.target.nodeName === 'IMG') {
      newService.name =
        e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText;

      newService.number =
        e.target.parentNode.parentNode.parentNode.children[2].children[0].innerText;
    } else if (e.target.nodeName === 'BUTTON') {
      newService.name =
        e.target.parentNode.parentNode.children[1].children[0].innerText;

      newService.number =
        e.target.parentNode.parentNode.children[2].children[0].innerText;
    }
    newService.time = new Date().toLocaleTimeString();
    data.services.push(newService);

    alert(`📞Calling ${newService.name} ${newService.number}... `);

    data.numCoin -= 20;
    numCoinEl.innerText = data.numCoin;
    // Render History
    renderCallHistory();
  });
}
