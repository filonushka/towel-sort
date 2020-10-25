module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let towelSorted = [];
    for (i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            towelSorted = towelSorted.concat(matrix[i])
        } else {
            towelSorted = towelSorted.concat(matrix[i].reverse());
        }

    } return towelSorted;
}
