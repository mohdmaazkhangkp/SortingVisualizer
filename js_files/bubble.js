let hasPressedStop= new Boolean(false);
async function bubbleSort(){
    const ele = document.querySelectorAll(".bars");
    for(let i=0; i<ele.length-1; i++){
       for(let j=0; j<ele.length-i-1; j++){
         if(hasPressedStop==true) return;
          ele[j].style.background='red';
          ele[j+1].style.background='red';
          if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
            await delayTime(delay);
             swap(ele[j], ele[j+1]);
          }
          ele[j].style.background='blue';
          ele[j+1].style.background='blue';
       }
       ele[ele.length-i-1].style.background = "green";
    }
    ele[0].style.background = 'green';
 }

 const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click',   function(){
   hasPressedStop=false;
      enableStopBtn();
      disableNewArrayBtn();
      bubbleSort();
      disableSortingBtn();
});


