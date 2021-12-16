function binarySearch(arr, ele){
    
    
    if (arr.length === 0){
        return false;
    };

    mid = Math.floor(arr.length / 2);

    if (arr[mid] === ele){
        return true
    } else {
        if (arr[mid] < ele){
            return binarySearch(arr.slice(mid+1), ele)
        } else {
            return binarySearch(arr.slice(0, mid), ele)
        }
    }

}

console.log(binarySearch([1,2,3,4,5], 5))


function binarySearch2(arr, ele) {
    first = 0
    last = arr.length - 1

    found = false;

    while (first <= last && found === false) {
        mid = Math.floor((first + last)/2)

        if (arr[mid] == ele) {
            found = true;
        } else {
            if (arr[mid] < ele){
                first = mid+1
            } else[
                last = mid -1
            ]
        }
    }
    return found
}

console.log(binarySearch2([1,2,3,4,5], 2))
