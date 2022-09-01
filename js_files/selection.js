
async function selectionSort(){
    const ele = document.querySelectorAll(".bars");
    for(let i=0; i<ele.length-1; i++){
        let min_ind=i;
       for(let j=i+1; j<ele.length; j++){
         if(hasPressedStop==true) return;
          ele[j].style.background='red';
          ele[min_ind].style.background='red';
          await delayTime(delay);
          if(parseInt(ele[j].style.height) < parseInt(ele[min_ind].style.height)){
            ele[min_ind].style.background='blue';
            min_ind=j;
          }
          else ele[j].style.background='blue';
          

       }
      
       swap(ele[i], ele[min_ind]);
       ele[min_ind].style.background='blue';
       ele[i].style.background = "green";
    }
    ele[ele.length-1].style.background = 'green';
 }


 const selSortbtn = document.querySelector(".selectionSort");
 selSortbtn.addEventListener('click',   function(){
    hasPressedStop=false;
       enableStopBtn();
       disableNewArrayBtn();
       
       selectionSort();
       disableSortingBtn();
 });
 