let increment = 1;
let teams = {
  one: {id: 'one', score: 0},
  two: {id: 'two', score: 0}
}

function drawTwo() { // two as in second version
  // iterate through items in array and draw to html
  // changing it into an array of objects lol
  Object.keys(teams).forEach(id => {
    let scoreElm = document.getElementById(id);
    scoreElm.innerText = 'Team ' + teams[id].id + ' Score ' + teams[id].score;
    totalScore();
  });
}

function scorePlus(id) {
  teams[id].score += increment;
  drawTwo();
}

function scoreMinus(id) {
  teams[id].score -= increment;
  drawTwo();
}

function gameOver() {
  Object.keys(teams).forEach(obj => {
    teams[obj].score = 0;
  });
  drawTwo();
}

function incChange() {
  let inc = parseInt(document.getElementById('p-increment').value);
  console.log(inc);
  increment = inc;
}

function totalScore() {
  let total = 0;
  Object.keys(teams).forEach(obj => {
    total += parseInt(teams[obj].score);
  });

  document.getElementById('total').innerText = total;
}

function addPlayer() { // writing the word instead of the number has bit me in the butt
  Object.assign(teams, {three: {id:3, score: 0}});
  console.log(teams);
}