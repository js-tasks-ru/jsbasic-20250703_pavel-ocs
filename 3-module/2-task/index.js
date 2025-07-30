function filterRange(arr, a, b) {
    let newArr = arr.filter(it => it >= a && it <= b);
    return newArr;
}