
async function insertionSort(){
    const ele = document.querySelectorAll(".bars");
    for(let i=0; i<ele.length; i++){
       for(let j=i+1; j>0; j--){
         if(hasPressedStop==true) return;
          ele[j].style.background='red';
          ele[j-1].style.background='red';
          if(parseInt(ele[j].style.height) < parseInt(ele[j-1].style.height)){
            await delayTime(delay);
             swap(ele[j], ele[j-1]);
          }
          ele[j].style.background='green';
        //   ele[j].style.background='blue';
          ele[j-1].style.background='green';
       }
       
    }
    
 }

 const insSortbtn = document.querySelector(".insertionSort");
 insSortbtn.addEventListener('click',   function(){
    hasPressedStop=false;
       enableStopBtn();
       disableNewArrayBtn();
       
       insertionSort();
       disableSortingBtn();
 });
