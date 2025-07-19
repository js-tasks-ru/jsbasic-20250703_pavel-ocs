function ucFirst(str) {
    if (str) {
        let newStr = '';
        let charStr = '';
        for (s = 0; s < str.length; s++) {
            if (s == 0) {
                charStr = str[s].toUpperCase();
            } else {
                charStr = str[s];
            }
            newStr += charStr;
        }
        return newStr;
    } else {
        return str;
    }
}