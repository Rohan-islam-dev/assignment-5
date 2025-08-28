//heart count
const hearts = document.querySelectorAll(".heart-count");
const countEl = document.getElementById("counts");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    let counts = parseInt(countEl.innerText);
    counts += 1;
    countEl.innerText = counts;
  });
}

//callig btn

const callButtons = document.querySelectorAll("#btn-call");
const starRemoveEl = document.getElementById("star-remove");
const callHistoryList = document.querySelector("#History ul");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let credit = parseInt(starRemoveEl.innerText);

    if (credit < 20) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে");
      return;
    }

    const serviceName = document.querySelectorAll("#service")[i].innerText;
    const number = document.querySelectorAll("#num")[i].innerText;

    alert(`calling: ${serviceName} number: ${number}`);

    credit -= 20;
    starRemoveEl.innerText = credit;

    const li = document.createElement("li");
    li.style.backgroundColor = "#FAFAFA";
    li.style.borderRadius = "12px";
    li.style.height = "60px";
    li.style.marginBottom = "20px";
    li.style.padding = "10px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    const leftDiv = document.createElement("div");
    leftDiv.style.display = "flex";
    leftDiv.style.flexDirection = "column";

    const serviceNameDiv = document.createElement("div");
    serviceNameDiv.innerText = serviceName;
    serviceNameDiv.style.fontSize = '18px';
    serviceNameDiv.style.color = '#111111';
  
    const numberDiv = document.createElement("div");
    numberDiv.innerText = number;

    leftDiv.appendChild(serviceNameDiv);
    leftDiv.appendChild(numberDiv);

    const timeDiv = document.createElement("div");
    timeDiv.innerText = new Date().toLocaleTimeString();


    li.appendChild(leftDiv);
    li.appendChild(timeDiv);

    callHistoryList.appendChild(li);
  });
}


//clear history
document.getElementById('btn-clear').addEventListener('click',function(){
   const history = document.getElementById('History');
   history.style.display = 'none';
})




// copy btn

const copybutton = document.querySelectorAll('#btn-copy');
const copyCount = document.getElementById('copy-count');


for(let i = 0; i<copybutton.length; i++){
  copybutton[i].addEventListener('click',function(){
    
     let copyCounts = parseInt(copyCount.innerText);
     copyCounts += 1;
     copyCount.innerText = copyCounts;

    const number = document.querySelectorAll("#num")[i].innerText;
    alert(`নাম্বার কপি হয়েছে: ${number}`)

  })
}