function lowerBound(arr,key){
    let n = arr.length

    let l=0
    let r=n-1
    let ans = -1
    while(l <= r){
        let mid = (l+r)/2
        if(arr[mid] <= key){
            ans = arr[mid]
            l = mid+1
        }else{
            r = mid-1
        }
    }
    return ans

}

let key = 4
console.log(lowerBound([-1,-1,2,3,5],key))