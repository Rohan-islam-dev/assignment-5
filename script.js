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


//callig btn

const callButtons = document.querySelectorAll('#btn-call');
const starRemoveEl = document.getElementById('star-remove');

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function () {
        
        let credit = parseInt(starRemoveEl.innerText);

        if(credit < 20){
            alert('terminate the process')
            return;
        }

        const serviceName = document.querySelectorAll("#service")[i].innerText;
        const number = document.querySelectorAll("#num")[i].innerText;

        alert(`calling: ${serviceName} number: ${number}`);

        
        credit -= 20;
        starRemoveEl.innerText = credit;
    })
}

