//heart count
const hearts = document.querySelectorAll('.heart-count');
const countEl = document.getElementById('counts');

for (const heart of hearts) {
  heart.addEventListener('click', function () {
    let counts = parseInt(countEl.innerText);
     counts += 1;
     countEl.innerText = counts;
  });
}


