function getMinMax(str) {
    const result = {};
    const listString = str.split(' ');
    const listNumb = listString.map(it => +it).filter(item => item);
    result.max = Math.max(...listNumb);
    result.min = Math.min(...listNumb);
    return result;
}