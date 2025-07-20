function isEmpty(obj) {
    let properties = [];
    for (let prop in obj) {
        properties += prop;
    }
    if (properties.length > 0) {
        return false;
    } else {
        return true;
    }
}