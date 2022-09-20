
async function mergeSort(arr, l,r){
    if(r<=l) return;
    if(hasPressedStop==true) return;
    let m = l + Math.floor((r - l) / 2);
       await mergeSort(arr, l, m);
        await mergeSort(arr, m+1, r);
        await merge(arr, l, m, r);
}

async function merge(arr, l, m, r){
    if(hasPressedStop==true) return;
    let n1=m-l+1
    let n2=r-m;
    let left = new Array(n1);
    let right = new Array(n2);
    
    for(let i=0; i<n1; i++){
        arr[l+i].style.background = "red";
        await delayTime(delay);
        left[i] = parseInt(arr[l+i].style.height);
    }
    for(let i=0; i<n2; i++){
        arr[m+1+i].style.background = "red";
        await delayTime(delay);
        right[i] =  parseInt(arr[m+1+i].style.height);
    }
    let i=0, j=0, k=l;
    while(i<n1 && j<n2){
       
        if(left[i] <= right[j]){
            arr[k++].style.height = left[i++] + "px";
            arr[k-1].style.background = "green";
            await delayTime(delay);
        } 
        else{
            arr[k++].style.height = right[j++]+ "px";
            arr[k-1].style.background = "green";
            await delayTime(delay);
        } 
    }
    while(i<n1){
        arr[k++].style.height = left[i++] + "px";
            arr[k-1].style.background = "green";
            await delayTime(delay);
    }
    while(j<n2){
        arr[k++].style.height = right[j++]+ "px";
    arr[k-1].style.background = "green";
    await delayTime(delay);
}
}

const mrgSortbtn = document.querySelector(".mergeSort");
mrgSortbtn.addEventListener('click',   function(){
    ///
        const arr = document.querySelectorAll(".bars");
        hasPressedStop=false;
        enableStopBtn();
        disableNewArrayBtn();
        mergeSort(arr, 0, 99);
        disableSortingBtn();
 });