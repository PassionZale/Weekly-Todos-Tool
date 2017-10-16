module.exports = (index, template, key) => {
    if (key === 0) {
        return index + 1 + '.';
    } else {
        var before_index = 0;
        for (var i = 0; i < key; i++) {
            before_index = before_index + template[i].todos.length;
        }
        return before_index + index + 1 + '.';
    }
}