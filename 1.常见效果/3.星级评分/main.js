const starTab = document.getElementsByClassName('star-tab')[0];
const star = starTab.getElementsByClassName('star');
let grade = 0;
let tempgrade = 0;
for(let i = 0; i < star.length; i++) {
  star[i].value = i;
  star[i].onmouseenter = function () {
    tempgrade = star[i].value;
    for(let j = 0; j <= tempgrade; j++) {
      star[j].children[0].className = 'fas fa-star'
    }
  }
  star[i].onmouseleave = function () {
    for(let j = 0; j <= grade; j++) {
      star[j].children[0].className = 'fas fa-star'
    }
    for (let j = grade + 1; j < 5; j++) {
      star[j].children[0].className = 'far fa-star'
    }
  }
  star[i].onclick = function() {
    grade = star[i].value;
  }
}
