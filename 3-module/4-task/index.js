function showSalary(users, age) {
    const listUsers = users.filter(it => it.age <= age);
    const listUserText = listUsers.map(it => it.name + ', ' + it.balance);
    const text = listUserText.join("\n");
    return text;
}