function sumSalary(salaries) {
    let sum = 0;
    for (let prop in salaries) {
        let value = salaries[prop];
        if (Number.isFinite(value)) {
            sum += salaries[prop];
        } else {
            sum += 0;
        }
    }
    return sum;
}