function kRotate(arr,k){

    let n = arr.length - 1
    let l=0
    let r=n
    // rev 1
    while(l <= (r-k)){
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp

        l++
        r--
    }
    // rev 2
    r = n
    // console.log(r)
    l = n-k+1
    // console.log(l)
    while(l <= r){
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp

        l++
        r--
    }

    for(let i = 0;i<n;i++){
        console.log(arr[i])
    }

}

kRotate([1,2,3,4,5,6,7,8],3)