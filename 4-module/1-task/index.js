function makeFriendsList(friends) {
    const list = document.createElement('ul');
    for (friend of friends) {
        const listItem = document.createElement('li');
        listItem.innerHTML = friend.firstName + " " + friend.lastName;
        list.appendChild(listItem);
    }
    return list;
}