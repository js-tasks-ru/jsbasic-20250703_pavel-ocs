function factorial(n) {
    let fact = 1;
    for (let x = 0; x < n; x++) {
        fact *= n - x;
    }
    return fact;
}