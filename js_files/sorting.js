//Main Engine
generateBars();


//functions
function generateBars() {
   const bar = document.querySelector("#bar-container");
   bar.innerHTML = '';

   var arr = new Array(100);
for(let i=0; i<arr.length; i++){
   arr[i] = Math.round(2 + (100-2)* Math.random());
}
for(let i=0; i<arr.length; i++){ 
 let bar = document.createElement("div");
 bar.className = "bars";
 bar.style.height= 3.5*arr[i] +"px";
 document.getElementById("bar-container").appendChild(bar);
}
 }

  // SWAP
  function swap(el1,el2)
  {
  
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
 
  }
  let delay=100;
  function delayTime(milisec) { 
   return new Promise(resolve => { 
       setTimeout(() => { resolve('') }, milisec); 
   }) ;
}

