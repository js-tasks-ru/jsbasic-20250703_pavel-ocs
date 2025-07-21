function truncate(str, maxlength) {
    let lengthStr = str.length;
    if (lengthStr > maxlength) {
        return str.substr(str, maxlength - 1) + "…";
    } else {
        return str;
    }
}