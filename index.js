function binarySearch(A, X){
    let s = 0;
    let e = A.length - 1;

    while(s <= e){
        let mid = Math.floor((s+e) / 2);

        if(A[mid] < X){
            s = mid + 1;

        }else if(A[mid] > X){
            e = mid - 1;
        }else {
            return mid;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,4,5,8], 5))