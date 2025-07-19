function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    let check = '1xBet'.toLowerCase();
    let check1 = 'XXX'.toLowerCase();
    if (lowerStr.includes(check) ||
        lowerStr.includes(check1)
    ) {
        return true;
    } else {
        return false;
    }
}