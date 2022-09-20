function quickSort(arr, l, r){
    if(l>=r) return;
    let p = hPartition();
    quickSort(arr, l, p);
    quickSort(arr, p+1, r);
}

function hPartition(arr, l, r){
    let p = arr[l];
    let i=l-1, j=h+1;
    while(true){
        do{
            i++;
        }while(arr[i]<p);

        do{
            j--;
        }while(arr[j]>p);
        if(i>=j) return j;
        swap(arr, i, j);

    }
}