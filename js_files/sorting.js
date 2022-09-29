//Main Engine
let arrSize;
const mq = window.matchMedia( "(max-width: 500px)" );
if (mq.matches) {
   arrSize=50;
}
 else {
  arrSize=100;
}
generateBars();


//functions
function generateBars() {
   const barContainer = document.querySelector("#bar-container");
   barContainer.innerHTML = '';

   let arr = new Array(arrSize);
for(let i=0; i<arr.length; i++){
   // arr will contain number between 2 and 100
   arr[i] = Math.round(2 + (100-2)* Math.random());
}
for(let i=0; i<arr.length; i++){ 
 let bar = document.createElement("div");
 bar.className = "bars";
 bar.style.height= 3*arr[i] +"px";
 barContainer.appendChild(bar);
}
 }

  // SWAP
  function swap(el1,el2)
  {
  
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
 
  }
  let delay=260;
  function delayTime(milisec) { 
   return new Promise(resolve => { 
       setTimeout(() => { resolve('') }, milisec); 
   }) ;
}


//click
const stopBtn = document.querySelector(".stopSorting");
stopBtn.addEventListener("click", function(){
   hasPressedStop=true;
   enableNewArrayBtn();
   disableStopBtn();
   disableSortingBtn();
   
 
});

const newArrayBtn = document.querySelector(".newArray");
newArrayBtn.addEventListener("click", function(){
   generateBars();
   enableSortingBtn();
  
 
});

//speed
let delayElement = document.querySelector('#speed_input'); 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});


// disable and enable 
function disableSortingBtn(){
   document.querySelector(".bubbleSort").disabled = true;
   document.querySelector(".insertionSort").disabled = true;
   document.querySelector(".mergeSort").disabled = true;
   document.querySelector(".selectionSort").disabled = true;
}

function enableSortingBtn(){
   document.querySelector(".bubbleSort").disabled = false;
   document.querySelector(".insertionSort").disabled = false;
   document.querySelector(".mergeSort").disabled = false;
   document.querySelector(".selectionSort").disabled = false;  
}

function disableNewArrayBtn(){
   document.querySelector(".newArray").disabled = true;
}
function enableNewArrayBtn(){
   document.querySelector(".newArray").disabled = false;
}

function disableStopBtn(){
   document.querySelector(".stopSorting").disabled = true;
}
function enableStopBtn(){
   document.querySelector(".stopSorting").disabled = false;
}

