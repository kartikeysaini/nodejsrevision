function search(arr,idx,n,searchVal){

    // console.log(arr)

    for(let i = idx;i<n;i++){
        console.log(arr[i])
    }
    // console.log(searchVal)
    return 1
}

function pairSum(arr,n,key){
    
    flag = 1;
    for(let i = 0;i<n;i++){
        if(flag == 1 && arr[i] < key){
            searchVal=key-arr[i]

            flag = search(arr,i+1,n,searchVal)
        }
        
        


    }
    
}


pairSum([1,3,5,7,10,11,12,13],8,25)