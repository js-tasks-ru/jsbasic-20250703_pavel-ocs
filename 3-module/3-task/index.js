function camelize(str) {
    const listWords = str.split('-');
    const camelWord = listWords.map((it, i) =>
        i > 0 && it ? it.at(0).toUpperCase() + it.slice(1) : it).join('');
    return camelWord;
}